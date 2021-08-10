import { Component, OnInit } from '@angular/core';
import { ChartType } from "angular-google-charts";

@Component({
  selector: 'app-personas-chart',
  templateUrl: './personas-chart.component.html',
  styleUrls: ['./personas-chart.component.css']
})
export class PersonasChartComponent implements OnInit {

  
  type = ChartType.BarChart

  title="Personas"

  data = [
    ['Persona 1', 8136000],
    ['Persona 2', 8538000],
    ['Persona 3', 2244000],
    ['Persona 4', 3470000],
    ['Persona 5', 19500000],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
