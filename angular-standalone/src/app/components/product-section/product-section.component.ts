import { Component } from '@angular/core';
import { PRODUCTS } from '../../data/constants';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent {
  products: Product[] = PRODUCTS;
}