import { Injectable } from '@angular/core';
import { of,Subject, throwError, EMPTY } from 'rxjs';
import {switchMap,catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import {User} from '../user';
import { TokenStorageService } from './token-storage.service';

interface UserDto {
  user:User;
  token:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private user$ = new Subject<User>();
private apiUrl='/api/auth/';

  constructor(
    private httpClient:HttpClient,
    private tokenStorage: TokenStorageService
    ) { }
  
  login(email:string,password:string){
    const loginCredentials={email,password};
    console.log('login credentials',loginCredentials)
    return this.httpClient.post<UserDto>(`${this.apiUrl}login`,loginCredentials).pipe(
      switchMap(
        ({user,token}) => {
         this.setUser(user);
         this.tokenStorage.setToken(token);
         console.log(`user found`,user);
         return of(user);
        }),
      catchError(e =>{
        console.log(`Your login details can't be verified.please try again`,e);
        return throwError(`Your login details can't be verified.please try again`);
      })
    );
  }


  logout(){
this.tokenStorage.removeToken();
this.setUser(null)
console.log('user has been logout');
}
 
get user(){
  return this.user$.asObservable();
}

  
  register(userToSave:any){
      return this.httpClient.post<any>(`${this.apiUrl}register`,userToSave).pipe
      (
        switchMap(({user,token}) =>{
          this.setUser(user);
          this.tokenStorage.setToken(token);
          console.log(`user registered successfully`,user);
          return of(user);
        }),
          
        catchError(e=> {
          console.log(`server error occured`,e)
          return throwError(`Registration failed please contact to admin`);
        })
      )
     }

     findMe() {
       const token=this.tokenStorage.getToken();
       if(!token){
         return EMPTY;
       }
       return this.httpClient.get<any>(`${this.apiUrl}findMe`).pipe(
         switchMap(({user}) => {
           this.setUser(user);
           console.log(`user found`,user);
           return of (user);
         }),
         catchError(e =>{
           console.log(`Your login details can't be verified.please try again`,e)
           return throwError(`Your login details can't be verified.please try again`)
         })
       );
     }
     
   private setUser(user){
     this.user$.next(user)
   }
}
