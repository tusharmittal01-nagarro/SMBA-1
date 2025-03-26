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
      name: 'Harmony Balance Oil',
      category: 'Massage Oils',
      image: 'assets/images/product-1.jpg',
      description: 'A rejuvenating blend of sesame oil, brahmi, and ashwagandha to balance the doshas and promote relaxation.'
    },
    {
      id: 2,
      name: 'Digestive Support Formula',
      category: 'Supplements',
      image: 'assets/images/product-2.jpg',
      description: 'Traditional herbs like triphala, fennel, and ginger combined to support healthy digestion and metabolism.'
    },
    {
      id: 3,
      name: 'Tranquil Mind Tea',
      category: 'Herbal Teas',
      image: 'assets/images/product-3.jpg',
      description: 'A calming blend of brahmi, chamomile, and lemon balm to promote mental clarity and reduce stress.'
    },
    {
      id: 4,
      name: 'Radiant Skin Cream',
      category: 'Skincare',
      image: 'assets/images/product-4.jpg',
      description: 'Nourishing cream with turmeric, saffron, and aloe vera to promote naturally glowing and healthy skin.'
    }
  ];
}