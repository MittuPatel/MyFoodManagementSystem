import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { sidebarMenuList } from "./sidebar/sidebar.component";
//import { RouterOutlet_1 as RouterOutlet } from "../../node_modules/@angular/router/router_module.d";
import {RouterModule} from '@angular/router';
import { MainbarComponent } from "./mainbar/mainbar.component";
import { SplitterModule } from 'primeng/splitter';


@Component({
  selector: 'app-root',

  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [HeaderComponent, FooterComponent, sidebarMenuList, MainbarComponent, SplitterModule],
})

export class App {
  protected readonly title = signal('MyFoodManagementSystem');
}
