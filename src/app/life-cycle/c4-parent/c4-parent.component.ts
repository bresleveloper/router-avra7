import { Component, OnInit, DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-c4-parent',
  templateUrl: './c4-parent.component.html',
  styleUrls: ['./c4-parent.component.css']
})
export class C4ParentComponent 
implements OnInit, OnChanges, DoCheck, AfterViewInit, 
          AfterContentChecked, AfterContentInit, AfterViewChecked,
          OnDestroy
{

constructor() { 
  console.log('C4ParentComponent - constructor');
  
}
ngOnDestroy(): void {
  console.log('C4ParentComponent - ngOnDestroy');
}

ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
  console.log('C4ParentComponent - ngOnChanges');

}

ngDoCheck(): void {
  console.log('C4ParentComponent - ngDoCheck');
}
ngAfterViewInit(): void {
  console.log('C4ParentComponent - ngAfterViewInit');
}
ngAfterContentChecked(): void {
  console.log('C4ParentComponent - ngAfterContentChecked');
}
ngAfterContentInit(): void {
  console.log('C4ParentComponent - ngAfterContentInit');
}
ngAfterViewChecked(): void {
  console.log('C4ParentComponent - ngAfterViewChecked');
}

ngOnInit(): void {
  console.log('C4ParentComponent - ngOnInit');
}

}
