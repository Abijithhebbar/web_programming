import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import { CartComponent} from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductpageComponent} from './productpage/productpage.component';
const routes: Routes = [
  {path:"", component:HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "cart", component: CartComponent},
  {path: "contactus", component: ContactusComponent},
  {path: "productpage", component: ProductpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
