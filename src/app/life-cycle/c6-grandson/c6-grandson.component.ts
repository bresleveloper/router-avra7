import { Component, OnInit, DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-c6-grandson',
  templateUrl: './c6-grandson.component.html',
  styleUrls: ['./c6-grandson.component.css']
})
export class C6GrandsonComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, 
AfterContentChecked, AfterContentInit, AfterViewChecked,
OnDestroy
{

  counter=5

constructor() { 
console.log('C6GrandsonComponent - constructor');

}
ngOnDestroy(): void {
console.log('C6GrandsonComponent - ngOnDestroy');
}

ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
console.log('C6GrandsonComponent - ngOnChanges');

}

ngDoCheck(): void {
console.log('C6GrandsonComponent - ngDoCheck');
}
ngAfterViewInit(): void {
console.log('C6GrandsonComponent - ngAfterViewInit');
}
ngAfterContentChecked(): void {
console.log('C6GrandsonComponent - ngAfterContentChecked');
}
ngAfterContentInit(): void {
console.log('C6GrandsonComponent - ngAfterContentInit');
}
ngAfterViewChecked(): void {
console.log('C6GrandsonComponent - ngAfterViewChecked');
}

ngOnInit(): void {
console.log('C6GrandsonComponent - ngOnInit');
}

}
