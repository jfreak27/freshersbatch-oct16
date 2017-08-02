import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'myAccount',
  templateUrl: `./myAccount-html.html`,
})
export class MyAccountComponentClass implements OnInit {

  public id:any;

  public ad:any;
  constructor(private activatedRoute: ActivatedRoute){}
  
  
  ngOnInit(){

        


  }
 }
