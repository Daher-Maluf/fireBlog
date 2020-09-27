import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../shared/services/contact.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private contactSvc: ContactService) {
    this.contactForm = this.createFormGroup();
  }

  contactForm: FormGroup;

  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl(''),
      email: new FormControl(''),
      asunto: new FormControl(''),
      mensaje: new FormControl(''),

    });
  }

  ngOnInit() {
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){

    this.contactSvc.saveMessage(this.contactForm.value);

  }

}
