import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core/testing';
import { CommonDataService } from '../../services/common-data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient,private commonService: CommonDataService) { }

  ngOnInit(): void {

    this.commonService.formValid=true;
  }

}
