import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routes';
import { AppComponent } from './app.component';
import { HeadbarComponent } from './shared/headbar/headbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { ColorsComponent } from './components/colors/colors.component';
import { BordersComponent } from './components/borders/borders.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { OtherComponent } from './components/other/other.component';
import { ErrorComponent } from './components/error/error.component';
import { PageComponent } from './components/page/page.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TablesComponent } from './components/tables/tables.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { LogoutmodalComponent } from './shared/logoutmodal/logoutmodal.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    SidebarComponent,
    DashboardComponent,
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OtherComponent,
    ErrorComponent,
    PageComponent,
    ChartsComponent,
    TablesComponent,
    LogoutComponent,
    LogoutmodalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, APP_ROUTING, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
