import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core/testing';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(' https://rxnav.nlm.nih.gov/REST/Prescribe/drugs.json?name=cymbalta')
      .subscribe({
        next: (res) => {
          console.log("res", res);
        }
      })
  }

}
