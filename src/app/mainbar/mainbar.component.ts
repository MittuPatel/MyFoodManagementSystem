import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { value } from '@primeuix/themes/aura/knob';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.css'],
  imports : [ CommonModule,TabsModule, BadgeModule, AvatarModule, CardModule, ButtonModule]
})
export class MainbarComponent implements OnInit {
   ngOnInit(): void {
     throw new Error('Method not implemented.');
   }

   tabs = [
        { type: 'Breakfast', label: 'Dashboard' , tvalue: 0},
        { type: 'Lunch', label: 'Transactions',tvalue: 1},
        { type: 'Sandwitch', label: 'Products',tvalue: 2},
        { type: 'Caramel Rolls', label: 'Messages', tvalue: 3},
         { type: 'Apetizer', label: 'Messages', tvalue: 4},
          { type: 'Main Course', label: 'Messages', tvalue: 5}
    ];

    Breakfasts = [
  { Name: 'Breakfast 1' , bvalue: 0},
 { Name: 'Breakfast 2' , bvalue: 1},
 { Name: 'Breakfast 3' , bvalue: 2},
 { Name: 'Breakfast 4' , bvalue: 3},
 { Name: 'Breakfast 5' , bvalue: 4},
 { Name: 'Breakfast 6' , bvalue: 5},
 { Name: 'Breakfast 7' , bvalue: 6},
    ];


  Lunchs = [

 { Name: 'Lunch 1' , value: 0},
 { Name: 'Lunch 2' , value: 1},
  { Name: 'Lunch 3' , value: 2},
   { Name: 'Lunch 4' , value: 3},
    { Name: 'Lunch 5' , value: 4},
  ];
}
