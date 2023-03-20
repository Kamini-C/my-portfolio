import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  myInfo: string[][] = [
    ['Name', 'Kamini Chhabra'],
    ['DOB', 'Dec 21,1991'],
    ['Work Experience', '5+ Years'],
    ['Education', 'MSc. Computer Science'],
    ['Interests', 'Pencil Sketching'],
  ];

  aboutMe: string[] = [
    'Ambitious and solution-driven Web Developer adept at contributing to highly collaborative work environment, finding solutions and determining customer satisfaction. Proven experience in developing consumer-focused websites. ',
    'Built products for Web users, meeting highest standards for web design, user experience, best practices and speed. Constantly seeking growth and learning experiences.'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
