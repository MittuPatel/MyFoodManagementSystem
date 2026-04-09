import { Component } from '@angular/core';
import { Items } from '../models/itemlist';
import { CommonModule } from '@angular/common';
import { value } from '@primeuix/themes/aura/knob';
import { DatePickerModule } from 'primeng/datepicker';
  import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FormsModule, DatePickerModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class sidebarMenuList {
  date: Date[] | undefined;
  MenuLists: string[] = [
    'Breakfast',
    'Lunch',
    'Apetizer',
    'Homemade Subway',
    'Burgers',
    'Muffins/Caramel Rolls',
  ];
availableItem :number= 0
  Name = '';

  Oninput(event: any) {
    this.Name = event.target.value;
  }

OnIncrement(){
 this.availableItem++;

}
OnDecrement(){
  if (this.availableItem > 0)
   {this.availableItem--;}

}

}
