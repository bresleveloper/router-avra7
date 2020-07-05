import { Component, OnInit, DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-c1-show-interfaces',
  templateUrl: './c1-show-interfaces.component.html',
  styleUrls: ['./c1-show-interfaces.component.css']
})
export class C1ShowInterfacesComponent 
  implements OnInit, OnChanges, DoCheck, AfterViewInit, 
            AfterContentChecked, AfterContentInit, AfterViewChecked,
            OnDestroy
{

  constructor() { 
    console.log('C1ShowInterfacesComponent - constructor');
    
  }
  ngOnDestroy(): void {
    console.log('C1ShowInterfacesComponent - ngOnDestroy');
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('C1ShowInterfacesComponent - ngOnChanges');

  }
  
  ngDoCheck(): void {
    console.log('C1ShowInterfacesComponent - ngDoCheck');
  }
  ngAfterViewInit(): void {
    console.log('C1ShowInterfacesComponent - ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('C1ShowInterfacesComponent - ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('C1ShowInterfacesComponent - ngAfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('C1ShowInterfacesComponent - ngAfterViewChecked');
  }

  ngOnInit(): void {
    console.log('C1ShowInterfacesComponent - ngOnInit');
  }

}
