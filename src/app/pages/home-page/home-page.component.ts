import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  
  available = [
    {name:"Mpho"},
    {name:"Edson"},
    {name:"Kefilwe"},
    {name:"Mpho"},
    {name:"Edson"},
    {name:"Kefilwe"},
  ]

  shortlisted = [
    {name:"Samke"},
    {name:"Dudu"},
    {name:"Kwazi"},
    {name:"Mike"},
    {name:"Zee"},
  ]

}