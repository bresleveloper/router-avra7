import { Component, OnInit } from '@angular/core';
import { DbJsonService } from 'src/app/services/db-json.service';
import { Person } from 'src/app/model/simple-items';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  //students:Person[]
  showJirrafs:boolean = false

  constructor(public db:DbJsonService) {
  }

  ngOnInit(): void {
    //this.students = this.db.db.students
  }

}
