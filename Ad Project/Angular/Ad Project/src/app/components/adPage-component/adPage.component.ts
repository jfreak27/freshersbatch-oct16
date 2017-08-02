import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'adPage',
  templateUrl: `./adPage-html.html`,
})
export class AdPageComponentClass implements OnInit {

  public id:any;

  public ad:any;
  constructor(private activatedRoute: ActivatedRoute){}
  
  
  ngOnInit(){

         this.id = this.activatedRoute.snapshot.params['id'];



  }
 }
