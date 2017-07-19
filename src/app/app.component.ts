import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userName: string = "";
  psw:string = "";

onUserChange(event:Event){
  this.userName = (<HTMLInputElement>event.target).value;
}
onPasswordChange(event:Event){
  this.psw = (<HTMLInputElement>event.target).value;

}

  onSbmitBtn() {
    console.log(this.userName);
    console.log(this.psw);
    alert(this.userName)
  }
}
