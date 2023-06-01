import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Long Tail Web Services',
      technologies: 'Cloud Compounting, Angular, Angular Material, Java',
      description: [
        'develop apps that are powered by Cloud.',
        'Built the services of Google Map that can be used by third party apps to get data.',
        'Was part of team to expand the google drive.',
      ],
    },
    {
      title: 'Lamar University',
      technologies: 'C, C++',
      description: [
        'Worked Managing Student records',
        'Got to learn about linux kernel',
        'Learned C, C++ to build an O.S.',
        'Worked On Big Data Concepts'
      ],
    },
    {
      title: 'Advithri Technologies LLC',
      technologies: 'HTML, CSS, JS, C#',
      description: [
        'Worked on Google Toolbar, to include the google search engine in Internet Explorer',
        'Learned multiple technologies to build the product.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
