import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { MarketplaceItemType } from '../types/marketplace.type';
import { Subscription } from 'rxjs';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {

  cartItems: { item: MarketplaceItemType, quantity: number }[] = [];
  cartItemsSub!: Subscription;

  constructor(
    public cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.cartItemsSub = this.cartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems;
    });
  }

  ngOnDestroy(): void {
    this.cartItemsSub.unsubscribe();
  }
}

