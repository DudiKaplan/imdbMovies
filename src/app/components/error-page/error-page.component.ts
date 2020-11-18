import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  date: Date;
  title:string;
  msg:string;
  constructor() { }

  ngOnInit() {
    this.date = new Date()
    this.title = 'שגיאת גישה'
    this.msg = 'כמו שזה נראה מפה אין לי הרשאה לעשות את מה שנסית לעשות'
  }

}
