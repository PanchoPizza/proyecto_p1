import {RouterModule, Routes} from '@angular/router';
import { AnimationsComponent } from './components/animations/animations.component';
import { BordersComponent } from './components/borders/borders.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ColorsComponent } from './components/colors/colors.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { OtherComponent } from './components/other/other.component';
import { PageComponent } from './components/page/page.component';
import { TablesComponent } from './components/tables/tables.component';
const APP_ROUTES: Routes = [
    {path: 'animations', component: AnimationsComponent},
    {path: 'borders', component: BordersComponent},
    {path: 'buttons', component: ButtonsComponent},
    {path: 'cards', component: CardsComponent},
    {path: 'charts', component: ChartsComponent},
    {path: 'colors', component: ColorsComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'error 404', component: ErrorComponent},
    {path: 'other', component: OtherComponent},
    {path: 'blank page', component: PageComponent},
    {path: 'tables', component: TablesComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'dashboard'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);