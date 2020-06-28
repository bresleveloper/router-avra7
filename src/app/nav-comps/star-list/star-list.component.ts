import { Component, OnInit } from '@angular/core';
import { DbJsonService } from 'src/app/services/db-json.service';

@Component({
  selector: 'app-star-list',
  templateUrl: './star-list.component.html',
  styleUrls: ['./star-list.component.css']
})
export class StarListComponent implements OnInit {

  constructor(public db:DbJsonService) { }

  ngOnInit(): void {
  }

}
