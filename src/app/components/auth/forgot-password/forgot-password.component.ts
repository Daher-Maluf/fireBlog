import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  

  constructor(private authSvc: AuthService, private router: Router ) { }
   userEmail = new FormControl('');

  ngOnInit(): void {
  }
 onReset(){
   const email = this.userEmail.value;
   this.authSvc.resetPassword(email).then(() => {
     window.alert('enviado');
     this.router.navigate(['/login']);
   }).catch(() => {
     console.log('error');
   })
 }
}
