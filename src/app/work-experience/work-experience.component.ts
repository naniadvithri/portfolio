import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Full Stack Developer',
      company: 'Advithri Technologies LLC',
      duration: 'DEC 2022 - Now',
      description: [
        'Working to migrate Legacy Monolithic Application.',
        'Working to develop new technologies to make life easier.',
      ],
    },
    {
      role: 'Graduate Assistant',
      company: 'Lamar University',
      duration: 'Sept 2021 - Dec 2022',
      description: [
        'Involved in Student Activity',
        'Responsible in Developing ERP Site',
        
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Long tail web services ',
      duration: 'Feb 2019 - Jul 2021',
      description: [
        'Hands on Exprience in Designing, Developing, and maintaining Complex Web Applications',
        'Proficient in java, spring, Hibernate, Angular, HTML, CSS, JavaScript',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
