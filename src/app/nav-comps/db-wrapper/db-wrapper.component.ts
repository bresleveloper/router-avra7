import { Component, OnInit } from '@angular/core';
import { DbJsonService } from 'src/app/services/db-json.service';

@Component({
  selector: 'app-db-wrapper',
  templateUrl: './db-wrapper.component.html',
  styleUrls: ['./db-wrapper.component.css']
})
export class DbWrapperComponent implements OnInit {

  constructor(private db:DbJsonService) { }

  ngOnInit(): void {
  }

}
