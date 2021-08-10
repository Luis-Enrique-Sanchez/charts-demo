import { Component, OnInit } from '@angular/core';
import { ChartType, Row } from "angular-google-charts";

@Component({
  selector: 'app-universidades-pie-chart',
  templateUrl: './universidades-pie-chart.component.html',
  styleUrls: ['./universidades-pie-chart.component.css']
})
export class UniversidadesPieChartComponent implements OnInit {

  type = ChartType.PieChart

  title="Universidades"

  data = [
    ['Universidad 1', 8136000],
    ['Universidad 2', 8538000],
    ['Universidad 3', 2244000],
    ['Universidad 4', 3470000],
    ['Universidad 5', 19500000],
  ];
  constructor() { }

  ngOnInit(): void {
  }


}
