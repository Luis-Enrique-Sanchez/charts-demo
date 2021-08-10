import { Component, OnInit } from '@angular/core';




export interface Group {
  name: string;
  position: number;
  fecha_examen: string;
  n_preguntas: number;
}

const GROUP_DATA: Group[]=[
  {position:1, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30},
  {position:2, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30},
  {position:3, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30},
  {position:4, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30},
  {position:5, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30},
  {position:6, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30},
  {position:3, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30},
  {position:4, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30},
  {position:5, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30},
  {position:6, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30},
  {position:3, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30},
  {position:4, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30},
  {position:5, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30},
  {position:6, name:"Grupo 1",fecha_examen:"01/01/01",n_preguntas:30}
]

@Component({
  selector: 'app-groups-table',
  templateUrl: './groups-table.component.html',
  styleUrls: ['./groups-table.component.css']
})
export class GroupsTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'fecha_examen', 'n_preguntas'];
  dataSource = GROUP_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
