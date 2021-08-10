import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import { MatSliderModule } from '@angular/material/slider';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GroupsTableComponent } from './components/groups-table/groups-table.component';
import {MatTableModule} from '@angular/material/table';
import { GoogleChartsModule } from 'angular-google-charts';
import { UniversidadesPieChartComponent } from './components/universidades-pie-chart/universidades-pie-chart.component';
import { PersonasChartComponent } from './components/personas-chart/personas-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GroupsTableComponent,
    UniversidadesPieChartComponent,
    PersonasChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
