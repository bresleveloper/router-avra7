import { Injectable } from '@angular/core';
import { AjaxService } from './ajax.service';
import { DbAjaxResponse } from '../model/simple-items';

@Injectable({
  providedIn: 'root'
})
export class DbJsonService {

  db:DbAjaxResponse = new DbAjaxResponse()

  constructor(private ajax:AjaxService) {
    this.ajax.ajaxGet("https://raw.githubusercontent.com/bresleveloper/db/master/ajax/someDB.json")
      .subscribe(res => {
        this.db = res
        console.log("DbJsonService", res);
      })
  }

}
