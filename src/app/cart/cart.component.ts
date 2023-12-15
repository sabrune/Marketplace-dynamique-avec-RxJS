import { Component } from '@angular/core';
import {MarketplaceItemType} from "../types/marketplace.type";
import {Subscription} from "rxjs";
import {CartService} from "../services/cart.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: { item: MarketplaceItemType, quantity: number }[] = [];
  cartItemsSub!: Subscription;

  constructor(
    public cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.cartItemsSub = this.cartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems;
      console.log(this.cartItems);
    });

  }
  // @ts-ignore
  // @ts-ignore
  _increamentQTY(id, quantity){
    const payload = {
      productId: id,
      quantity,
    };
    this.cartService.addItem(id, quantity).subscribe(()=>{
      let cartItems = this.cartItems;
    })

    };


}
