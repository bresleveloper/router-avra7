import { Component, OnInit, DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-c5-child',
  templateUrl: './c5-child.component.html',
  styleUrls: ['./c5-child.component.css']
})
export class C5ChildComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, 
    AfterContentChecked, AfterContentInit, AfterViewChecked,
    OnDestroy
    {

    constructor() { 
    console.log('C5ChildComponent - constructor');

    }
    ngOnDestroy(): void {
    console.log('C5ChildComponent - ngOnDestroy');
    }

    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('C5ChildComponent - ngOnChanges');

    }

    ngDoCheck(): void {
    console.log('C5ChildComponent - ngDoCheck');
    }
    ngAfterViewInit(): void {
    console.log('C5ChildComponent - ngAfterViewInit');
    }
    ngAfterContentChecked(): void {
    console.log('C5ChildComponent - ngAfterContentChecked');
    }
    ngAfterContentInit(): void {
    console.log('C5ChildComponent - ngAfterContentInit');
    }
    ngAfterViewChecked(): void {
    console.log('C5ChildComponent - ngAfterViewChecked');
    }

    ngOnInit(): void {
    console.log('C5ChildComponent - ngOnInit');
    }

    }
