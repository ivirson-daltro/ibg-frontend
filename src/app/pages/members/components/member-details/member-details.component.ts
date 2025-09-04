import { Component, OnInit } from '@angular/core';
import {
  Genders,
  MaritalStatuses,
  Member,
} from '../../../../models/member.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-member-details',
  imports: [DatePipe, NgxMaskPipe],
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.scss',
})
export class MemberDetailsComponent implements OnInit {
  memberId!: number;
  member: Member | undefined;
  members: Member[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      profilePicture: 'man-1.png',
      baptismDate: '2022-08-01',
      birthDate: '1990-01-01',
      entryDate: '2020-01-01',
      gender: Genders.Male,
      maritalStatus: MaritalStatuses.Single,
      phone: '11984567890',
      notes:
        'John é um membro ativo e engajado, sempre disposto a ajudar. Tem um talento especial para o louvor e é muito querido por todos.',
      active: true,
      address: {
        street: '123 Main St',
        number: 456,
        complement: 'Apt 789',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      profilePicture: 'woman-1.png',
      baptismDate: '2021-05-15',
      birthDate: '1992-02-02',
      entryDate: '2020-02-02',
      gender: Genders.Female,
      maritalStatus: MaritalStatuses.Divorced,
      phone: '11987654321',
      notes:
        'Jane é uma membro ativa e engajada, sempre disposta a ajudar. Tem um talento especial para o louvor e é muito querida por todos.',
      active: true,
      address: {
        street: '456 Elm St',
        number: 789,
        complement: 'Apt 101',
        city: 'Othertown',
        state: 'NY',
        zip: '67890',
      },
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      profilePicture: 'woman-2.png',
      baptismDate: '2020-06-10',
      birthDate: '1995-03-15',
      entryDate: '2020-03-15',
      gender: Genders.Female,
      maritalStatus: MaritalStatuses.Married,
      phone: '11976543210',
      notes:
        'Alice é uma membro ativa e engajada, sempre disposta a ajudar. Tem um talento especial para o louvor e é muito querida por todos.',
      active: false,
      address: {
        street: '789 Oak St',
        number: 101,
        complement: 'Apt 202',
        city: 'Sometown',
        state: 'TX',
        zip: '34567',
      },
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      profilePicture: 'man-2.png',
      baptismDate: '2019-12-25',
      birthDate: '1988-07-30',
      entryDate: '2018-07-30',
      gender: Genders.Male,
      maritalStatus: MaritalStatuses.Widowed,
      phone: '11965432109',
      notes:
        'Bob é um membro ativo e engajado, sempre disposto a ajudar. Tem um talento especial para o louvor e é muito querido por todos.',
      active: false,
      address: {
        street: '321 Pine St',
        number: 654,
        complement: 'Apt 321',
        city: 'Anycity',
        state: 'FL',
        zip: '98765',
      },
    },
    {
      id: 5,
      name: 'Charlie Green',
      email: 'charlie.green@example.com',
      profilePicture: 'man-3.png',
      baptismDate: '2020-11-11',
      birthDate: '1993-04-04',
      entryDate: '2020-04-04',
      gender: Genders.Male,
      maritalStatus: MaritalStatuses.Single,
      phone: '11954321098',
      notes:
        'Charlie é um membro ativo e engajado, sempre disposto a ajudar. Tem um talento especial para o louvor e é muito querido por todos.',
      active: true,
      address: {
        street: '654 Maple St',
        number: 321,
        complement: 'Apt 654',
        city: 'Anycity',
        state: 'WA',
        zip: '54321',
      },
    },
    {
      id: 6,
      name: 'Geena Davis',
      email: 'geena.davis@example.com',
      profilePicture: 'woman-3.png',
      baptismDate: '2021-05-15',
      birthDate: '1992-02-02',
      entryDate: '2020-02-02',
      gender: Genders.Female,
      maritalStatus: MaritalStatuses.Divorced,
      phone: '11987654321',
      notes:
        'Jane é uma membro ativa e engajada, sempre disposta a ajudar. Tem um talento especial para o louvor e é muito querida por todos.',
      active: false,
      address: {
        street: '654 Maple St',
        number: 321,
        complement: 'Apt 654',
        city: 'Anycity',
        state: 'WA',
        zip: '54321',
      },
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getIdFromUrl();
  }

  getIdFromUrl(): void {
    const url = this.router.url;
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.memberId = +id;
      this.getMemberById(this.memberId);
    }
  }

  getMemberById(id: number): void {
    this.member = this.members.find((member) => member.id === id);
  }
}
