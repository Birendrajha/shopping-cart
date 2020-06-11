import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { User } from 'src/app/core/user';
import {ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {


  @Input()
   user:User;
   @Output()
   logoutEvent= new EventEmitter<any>();

   constructor() { }

  ngOnInit() {
  }

}
