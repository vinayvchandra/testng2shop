import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'app';
  userName: string = "";
  psw:string = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }


onUserChange(event:Event){
  this.userName = (<HTMLInputElement>event.target).value;
}
onPasswordChange(event:Event){
  this.psw = (<HTMLInputElement>event.target).value;

}

  onSbmitBtn() {
    console.log(this.userName);
    console.log(this.psw);
    // alert(this.userName);

    this.router.navigate(['/dashboard']);
  }
}
