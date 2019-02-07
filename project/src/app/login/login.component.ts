import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
checklogin() {
document.getElementById("loginc").style.display = "block";
document.getElementById("nuser").style.display = "none";

}
checkregister() {
  document.getElementById("registerc").style.display = "block";
  document.getElementById("euser").style.display = "none";

}
}
