import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DbWrapperComponent } from './nav-comps/db-wrapper/db-wrapper.component';
import { PersonsListComponent } from './nav-comps/persons-list/persons-list.component';
import { StarListComponent } from './nav-comps/star-list/star-list.component';
import { OtherC1Component } from './nav-comps/other-c1/other-c1.component';
import { OtherC2Component } from './nav-comps/other-c2/other-c2.component';
import { OtherC3Component } from './nav-comps/other-c3/other-c3.component';
import { OtherWrapperComponent } from './nav-comps/other-wrapper/other-wrapper.component';
import { HomeComponent } from './fix-img-comps/home/home.component';
import { AComponent } from './fix-img-comps/a/a.component';
import { BComponent } from './fix-img-comps/b/b.component';
import { CComponent } from './fix-img-comps/c/c.component';
import { C1ShowInterfacesComponent } from './life-cycle/c1-show-interfaces/c1-show-interfaces.component';
import { C2ShowChildRefComponent } from './life-cycle/c2-show-child-ref/c2-show-child-ref.component';
import { C3ValueChangesComponent } from './life-cycle/c3-value-changes/c3-value-changes.component';
import { C4ParentComponent } from './life-cycle/c4-parent/c4-parent.component';
import { PipeCompComponent } from './pipes/pipe-comp/pipe-comp.component';


const routes: Routes = [  
  { path:'db', component:DbWrapperComponent ,
      children:[
        { path:'persons',   component:PersonsListComponent},
        { path:'stars',     component:StarListComponent},
        { path:'',          redirectTo:'persons', pathMatch: 'full'},
        { path:'**',        redirectTo:'persons', pathMatch: 'full'},
    ],
  },

  { path:'fix-img', component:HomeComponent ,
    children:[
      { path:'a',     component:AComponent, data : {pcontent:'contnet of a', shuki:'muki'} },
      { path:'b',     component:BComponent, data : {pcontent:''} },
      { path:'c',     component:CComponent, data : {pcontent:'contnet of c'} },
    ],
  },



  { path:'other', component:OtherWrapperComponent ,
    children:[
        { path:'c1',      component:OtherC1Component},
        { path:'c2',     component:OtherC2Component},
        { path:'c3',     component:OtherC3Component},
        { path:'',          redirectTo:'c1', pathMatch: 'full'},
    ],
  },

  
  { path:'life-cycle', component:OtherWrapperComponent ,
    children:[
        { path:'interfaces',      component:C1ShowInterfacesComponent},
        { path:'child-ref',     component:C2ShowChildRefComponent},
        { path:'change-value',     component:C3ValueChangesComponent},
        { path:'parent-child-GS',     component:C4ParentComponent},
        { path:'',          redirectTo:'interfaces', pathMatch: 'full'},
    ],
  },

  { path:'pipes', component:PipeCompComponent },



  { path:'', redirectTo:'db', pathMatch: 'full'},
  { path:'**', redirectTo:'db', pathMatch: 'full'},

 /* { path:'home',      component:HomeComponent},
  { path:'',          redirectTo:'/home',  pathMatch: 'full'},
  { path:'**',        component:NotFoundComponent},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

