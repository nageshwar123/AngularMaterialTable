import {Component} from '@angular/core';

/**
 * @title Basic table
 */
@Component({
  selector: 'nagesh',
  styleUrls: ['nagesh.component.css'],
  templateUrl: 'nagesh.component.html',
})
export class NageshComponent {
  displayedColumns = ['ID', 'name', 'age', 'city'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  ID: number;
  age: number;
  city: string;
}

const ELEMENT_DATA: Element[] = [
  {ID: 456, name: 'Nageshwar', age: 25 , city:'Hyderabaad'},
  {ID: 869, name: 'John', age: 32, city:'NewYork'},
  {ID: 5679, name: 'Bella', age: 24, city:'Newburgh'},
  {ID: 6107 , name: 'Brian', age: 34, city:'Dallas'},
  {ID: 246 , name: 'Chad', age: 34, city:'Chicago'},
  {ID: 294, name: 'Alicia', age: 23, city:'DesMoines'},

];