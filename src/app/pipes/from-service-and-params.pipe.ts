import { Pipe, PipeTransform } from '@angular/core';
import { DbJsonService } from '../services/db-json.service';

@Pipe({
  name: 'fromServiceAndParams'
})
export class FromServiceAndParamsPipe implements PipeTransform {

    /*"students":[
      { "name":"ariel", "age" : 35},*/
  constructor(private svc:DbJsonService) {
    console.log('FromServiceAndParamsPipe constructor');
    
  }

  //transform(tableName: string, ...args: unknown[]): unknown {
  transform(tableName: string, index:number): string {
    console.log('FromServiceAndParamsPipe transform');

    //args[0]
    let x = this.svc.db[tableName][index]
    return `<span class="fromSvcPipe">${x.name} - ${x.age}</span>`
  }

}
