import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Genders, MaritalStatuses } from '../../../../models/member.model';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-add-member',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxMaskDirective,
  ],
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.scss',
})
export class AddMemberComponent implements OnInit {
  form!: FormGroup;

  genders = Genders;
  maritalStatuses = MaritalStatuses;

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      birthDate: new FormControl(''),
      gender: new FormControl(''),
      maritalStatus: new FormControl(''),
      baptismDate: new FormControl(''),
      entryDate: new FormControl(''),
      profilePicture: new FormControl(''),
      active: new FormControl(true),
      notes: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        number: new FormControl(null),
        complement: new FormControl(''),
        neighborhood: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
    });
  }
}
