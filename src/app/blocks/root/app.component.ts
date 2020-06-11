import { Component,OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { User } from '../../core/user';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy,OnInit {
  
  user: Observable<User>;
  userSubscription:Subscription;
  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(): void{
    this.user = this.authService.user
    this.userSubscription=this.authService.findMe().subscribe(user =>(this.user = user));
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/'])
  }
  ngOnDestroy(): void{
    if (this.userSubscription){
      this.userSubscription.unsubscribe();
    }
  }
  title = 'product-mart';
}
