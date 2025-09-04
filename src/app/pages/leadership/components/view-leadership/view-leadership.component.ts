import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Leader } from '../../../../models/leader.model';

@Component({
  selector: 'app-view-leadership',
  imports: [RouterLink, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './view-leadership.component.html',
  styleUrl: './view-leadership.component.scss',
})
export class ViewLeadershipComponent implements OnInit {
  leadership: Leader[] = [
    {
      memberId: 1,
      title: 'Pastor - Presidente',
      member: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        profilePicture: 'man-1.png',
      },
    },
    {
      memberId: 2,
      title: '1º Vice-Presidente',
      member: {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        profilePicture: 'woman-1.png',
      },
    },
    {
      memberId: 3,
      title: '2º Vice-Presidente',
      member: {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        profilePicture: 'woman-2.png',
      },
    },
    {
      memberId: 4,
      title: '1º Secretário(a)',
      member: {
        id: 4,
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        profilePicture: 'man-2.png',
      },
    },
    {
      memberId: 5,
      title: '2º Secretário(a)',
      member: {
        id: 5,
        name: 'Charlie Green',
        email: 'charlie.green@example.com',
        profilePicture: 'man-3.png',
      },
    },
    {
      memberId: 6,
      title: '1º Tesoureiro',
      member: {
        id: 6,
        name: 'Geena Davis',
        email: 'geena.davis@example.com',
        profilePicture: 'woman-3.png',
      },
    },
    {
      memberId: 6,
      title: '2º Tesoureiro',
      member: {
        id: 6,
        name: 'Joshua Kimich',
        email: 'joshua.kimich@example.com',
        profilePicture: 'man-3.png',
      },
    },
    {
      memberId: 7,
      title: 'Diácono',
      member: {
        id: 7,
        name: 'Philip Johnson',
        email: 'philip.johnson@example.com',
        profilePicture: 'man-1.png',
      },
    },
    {
      memberId: 8,
      title: 'Diácono',
      member: {
        id: 8,
        name: 'Karla Davis',
        email: 'karla.davis@example.com',
        profilePicture: 'woman-1.png',
      },
    },
    {
      memberId: 9,
      title: 'Diácono',
      member: {
        id: 9,
        name: 'Patrick Godwin',
        email: 'patrick.godwin@example.com',
        profilePicture: 'man-2.png',
      },
    },
    {
      memberId: 10,
      title: 'Líder de Jovens',
      member: {
        id: 10,
        name: 'Francesca Polinari',
        email: 'francesca@example.com',
        profilePicture: 'woman-2.png',
      },
    },
    {
      memberId: 11,
      title: 'Líder SMHB',
      member: {
        id: 11,
        name: 'Faustino Pereira',
        email: 'faustino.pereira@example.com',
        profilePicture: 'man-3.png',
      },
    },
    {
      memberId: 12,
      title: 'Líder MCM',
      member: {
        id: 12,
        name: 'Moses Smith',
        email: 'moses.smith@example.com',
        profilePicture: 'man-2.png',
      },
    },
    {
      memberId: 13,
      title: 'Líder Patrimônio',
      member: {
        id: 13,
        name: 'Andrea Cameron',
        email: 'andrea.cameron@example.com',
        profilePicture: 'man-1.png',
      },
    },
  ];

  pastor: Leader | undefined;
  vicePresidents: Leader[] = [];
  secretaries: Leader[] = [];
  treasurers: Leader[] = [];
  deacons: Leader[] = [];
  leaders: Leader[] = [];

  ngOnInit(): void {
    this.pastor = this.leadership.find(
      (leader) => leader.title === 'Pastor - Presidente'
    );
    this.vicePresidents = this.leadership.filter((leader) =>
      leader.title.includes('Vice-Presidente')
    );
    this.secretaries = this.leadership.filter((leader) =>
      leader.title.includes('Secretário')
    );
    this.treasurers = this.leadership.filter((leader) =>
      leader.title.includes('Tesoureiro')
    );
    this.deacons = this.leadership.filter(
      (leader) => leader.title === 'Diácono'
    );
    this.leaders = this.leadership.filter((leader) =>
      leader.title.includes('Líder')
    );
  }
}
