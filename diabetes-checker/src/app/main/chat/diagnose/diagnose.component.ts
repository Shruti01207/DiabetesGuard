import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnose',
  templateUrl: './diagnose.component.html',
  styleUrls: ['./diagnose.component.css']
})
export class DiagnoseComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect( ){
  this.router.navigate(["/chat-session"]);
  }

}
