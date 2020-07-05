import { Component, OnInit, DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked, OnChanges, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-c3-value-changes',
  templateUrl: './c3-value-changes.component.html',
  styleUrls: ['./c3-value-changes.component.css']
})
export class C3ValueChangesComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, 
AfterContentChecked, AfterContentInit, AfterViewChecked,
OnDestroy {


  someValue = 0

  @ViewChild("muDiv") muDiv:ElementRef

  constructor() { 
    console.log('C3ValueChangesComponent - constructor', 
                  ++this.someValue,
                  'this.muDiv : ',
                  this.muDiv);
  }

  ngOnInit(): void {
    console.log('C3ValueChangesComponent - ngOnInit', 
                  ++this.someValue,
                  'this.muDiv : ',
                  this.muDiv);

  }


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('C3ValueChangesComponent - ngOnChanges', 
                  ++this.someValue,
                  this.muDiv.nativeElement.innerHTML);
  }
  ngDoCheck(): void {
    console.log('C3ValueChangesComponent - ngDoCheck', 
                  ++this.someValue,
                  'this.muDiv : ',
                  this.muDiv);  

    if (this.muDiv) {
      console.log('C3ValueChangesComponent - ngDoCheck', 
      'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);
    }  
  }


  ngAfterContentInit(): void {
    console.log('C3ValueChangesComponent - ngAfterContentInit', 
                  ++this.someValue,
                  'this.muDiv : ',
                  this.muDiv);  
  }
  
  ngAfterContentChecked(): void {
    console.log('C3ValueChangesComponent - ngAfterContentChecked', 
                  ++this.someValue,
                  'this.muDiv : ',
                  this.muDiv);  

    if (this.muDiv) {
      console.log('C3ValueChangesComponent - ngAfterContentChecked', 
      'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);
    }  
    
  }



  ngAfterViewInit(): void {
    //causes error
    //console.log('C3ValueChangesComponent - ngAfterViewInit',/* ++this.someValue*/);
    console.log('C3ValueChangesComponent - ngAfterViewInit', 
                  'this.someValue:: ' + this.someValue,
                  'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);
  }

  ngAfterViewChecked(): void {
    //causes error

    //console.log('C3ValueChangesComponent - ngAfterViewChecked', /*++this.someValue*/);
    console.log('C3ValueChangesComponent - ngAfterViewChecked', 
                    'this.someValue:: ' + this.someValue,
                    'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);

    
    if (this.muDiv) {
      console.log('C3ValueChangesComponent - ngAfterViewChecked', 
      'innerHTML:: ' + this.muDiv.nativeElement.innerHTML);
    } 
  }


  ngOnDestroy(): void {
    console.log('C3ValueChangesComponent - ngOnDestroy', 
                  ++this.someValue,
                  this.muDiv.nativeElement.innerHTML);
  }


}

