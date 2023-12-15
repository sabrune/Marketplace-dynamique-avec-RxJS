import { Routes } from '@angular/router';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import {CartComponent} from "./cart/cart.component";

export const routes: Routes = [
    { path: "", component: MarketplaceComponent },
    { path: "cart", component: CartComponent },
];
