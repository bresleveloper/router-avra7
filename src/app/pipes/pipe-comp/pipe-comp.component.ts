import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-comp',
  templateUrl: './pipe-comp.component.html',
  styleUrls: ['./pipe-comp.component.css']
})
export class PipeCompComponent implements OnInit {

  ipt1Val
  today=new Date()


  someBD

  constructor() { 
    let d = new Date()
    d.setFullYear(1984)
    this.someBD = d
  }

  ngOnInit(): void {
  }

}
