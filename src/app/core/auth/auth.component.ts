import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup  = this.formBuilder.group({
    username : [null, Validators.required],
    password : [null, Validators.required]
  });



  constructor(private formBuilder: FormBuilder, private oauthService: OAuthService, private router: Router) {

  }

  ngOnInit(): void {
  }

  login(){
    
  }

}
