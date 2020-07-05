import { Component, OnInit, DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked, OnChanges, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-c2-show-child-ref',
  templateUrl: './c2-show-child-ref.component.html',
  styleUrls: ['./c2-show-child-ref.component.css']
})
export class C2ShowChildRefComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, 
AfterContentChecked, AfterContentInit, AfterViewChecked,
OnDestroy {


  someValue = 0

  @ViewChild("muDiv") muDiv:ElementRef

  constructor() { 
    console.log('C2ShowChildRefComponent - constructor', 
                  ++this.someValue,
                  'this.muDiv : ',
                  this.muDiv);
  }

  ngOnInit(): void {
    console.log('C2ShowChildRefComponent - ngOnInit', 
                  ++this.someValue,
                  'this.muDiv : ',
                  this.muDiv);

  }


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('C2ShowChildRefComponent - ngOnChanges', 
                  ++this.someValue,
                  this.muDiv.nativeElement.innerHTML);
  }
  ngDoCheck(): void {
    console.log('C2ShowChildRefComponent - ngDoCheck', 
                  ++this.someValue,
                  'this.muDiv : ',
                  this.muDiv);  
  }


  ngAfterContentInit(): void {
    console.log('C2ShowChildRefComponent - ngAfterContentInit', 
                  ++this.someValue,
                  'this.muDiv : ',
                  this.muDiv);  
  }
  
  ngAfterContentChecked(): void {
    console.log('C2ShowChildRefComponent - ngAfterContentChecked', 
                  ++this.someValue,
                  'this.muDiv : ',
                  this.muDiv);  
  }



  ngAfterViewInit(): void {
    //causes error
    //console.log('C2ShowChildRefComponent - ngAfterViewInit',/* ++this.someValue*/);
    console.log('C2ShowChildRefComponent - ngAfterViewInit', 
                  'this.someValue:: ' + this.someValue,
                  'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);
  }

  ngAfterViewChecked(): void {
    //causes error

    //console.log('C2ShowChildRefComponent - ngAfterViewChecked', /*++this.someValue*/);
    console.log('C2ShowChildRefComponent - ngAfterViewChecked', 
                    'this.someValue:: ' + this.someValue,
                    'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);
  }


  ngOnDestroy(): void {
    console.log('C2ShowChildRefComponent - ngOnDestroy', 
                  ++this.someValue,
                  this.muDiv.nativeElement.innerHTML);
  }


}
