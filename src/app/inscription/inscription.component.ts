import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth-user.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    pseudo: ['', Validators.required],
    password: ['', Validators.required],
    avatar: ['']
  });
  submitted = false
  constructor(private formBuilder: FormBuilder, private authUser: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.inscriptionForm.invalid) {
      return console.log('error form');
    }
    return this.authUser.register(this.inscriptionForm.value).subscribe(console.log);
  };
}


