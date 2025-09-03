import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Member } from '../../../../models/member.model';

@Component({
  selector: 'app-members-list',
  imports: [
    FormsModule,
    RouterLink,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './members-list.component.html',
  styleUrl: './members-list.component.scss',
})
export class MembersListComponent {
  searchTerm: string = '';
  statusFilter: 'all' | 'active' | 'inactive' = 'all';

  members: Member[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      profilePicture: 'man-1.png',
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
    {
      id: 7,
      name: 'John Doe',
      email: 'john.doe@example.com',
      profilePicture: 'man-1.png',
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
      id: 8,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      profilePicture: 'woman-1.png',
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
      id: 9,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      profilePicture: 'woman-2.png',
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
      id: 10,
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      profilePicture: 'man-2.png',
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
      id: 11,
      name: 'Charlie Green',
      email: 'charlie.green@example.com',
      profilePicture: 'man-3.png',
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
      id: 12,
      name: 'Geena Davis',
      email: 'geena.davis@example.com',
      profilePicture: 'woman-3.png',
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

  get filteredMembers(): Member[] {
    return this.members.filter((member) => {
      const matchesSearch = member.name
        ?.toLowerCase()
        .includes(this.searchTerm?.toLowerCase());
      const matchesStatus =
        this.statusFilter === 'all' ||
        (this.statusFilter === 'active' && member.active) ||
        (this.statusFilter === 'inactive' && !member.active);
      return matchesSearch && matchesStatus;
    });
  }

  setStatusFilter(filter: 'all' | 'active' | 'inactive') {
    this.statusFilter = filter;
  }
}
