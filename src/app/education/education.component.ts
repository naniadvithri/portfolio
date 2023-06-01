import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Lamar University",
      course: 'MASTERS IN COMPUTER SCIENCE',
      duration: '2021-2022',
      score: '3.6 GPA',
    },
    {
      institute: 'K L University',
      course: 'BACHELORS IN Electronics And Communication ENGINEERING',
      duration: '2015-2019',
      score: '75%',
    }
  
  ];

  constructor() {}

  ngOnInit(): void {}
}
