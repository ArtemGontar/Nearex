import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SwapComponent } from './swap/swap.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'swap', component: SwapComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
