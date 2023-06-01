import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'MANI KANTA VARAPRASAD CHOWDARY NELLURI'],
    ['DOB', 'O3/10/1996'],
    ['Work Exp', '5+ Years'],
    ['Education', 'M.S (2022)'],
    ['Interests', 'Cricket',],
  ];

  aboutMe: string[] = [
    'Hi, I am a skilled Java Full Stack Developer with a strong technical background in developing scalable and maintainable web applications. With expertise in Java/J2EE, Spring, React, and other cutting-edge technologies, I have a proven track record of delivering high-quality software solutions that drive business success My experiencspans various industries, and I have worked with cross-functional teams to understand business requirements and deliver customised solutions. I am passionate about software design patterns, data structures, and algorithms, and I have hands-on experience with various databases and version control tools I am committed to staying up-to-date with the latest technologies and best practices in the industry. I have experience working in Agile software development methodologies and CI/CD pipelines, and I enjoy collaborating with teams to deliver high-quality software solutions that meet business requirements'
  ];

  constructor() {}

  ngOnInit(): void {}
}
