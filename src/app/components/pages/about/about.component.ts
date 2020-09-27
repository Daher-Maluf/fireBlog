import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../shared/services/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
   contactForm: FormGroup;

  // tslint:disable-next-line: max-line-length
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private contactSvc: ContactService) {
    this.contactForm = this.createFormGroup();
  }



  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      asunto: new FormControl('',Validators.required),
      mensaje: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(100)]),

    });
  }

  ngOnInit() {
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){
     if(this.contactForm.valid){
      this.contactSvc.saveMessage(this.contactForm.value);
      this.onResetForm();
      console.log('validado');
      
     }else{
       console.log('No Valido');
       
     }
    

  }

  get nombre() {return this.contactForm.get('nombre'); }
  get email() {return this.contactForm.get('email'); }
  get asunto() {return this.contactForm.get('asunto'); }
  get mensaje() {return this.contactForm.get('mensaje'); }

}
