import { Component } from '@angular/core';

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
  products: Product[] = [
    {
      id: 1,
      name: 'Ashwagandha Supplement',
      category: 'Supplements',
      image: 'assets/images/product1.jpg',
      description: 'A powerful adaptogen that helps the body manage stress and promotes overall wellbeing.'
    },
    {
      id: 2,
      name: 'Triphala Formula',
      category: 'Herbs',
      image: 'assets/images/product2.jpg',
      description: 'Traditional Ayurvedic blend supporting digestive health and gentle detoxification.'
    },
    {
      id: 3,
      name: 'Brahmi Brain Boost',
      category: 'Herbs',
      image: 'assets/images/product3.jpg',
      description: 'Supports mental clarity, focus and cognitive function with ancient herbs.'
    },
    {
      id: 4,
      name: 'Neem Purifying Face Wash',
      category: 'Skincare',
      image: 'assets/images/product4.jpg',
      description: 'Natural face cleanser with antibacterial neem to purify and balance skin.'
    }
  ];
}