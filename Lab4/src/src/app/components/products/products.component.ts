import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  description: string;
  rating: number;
  link: string;
  images: string[]; 
  showGallery: boolean;
}

@Component({
  selector: 'app-products',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent {

  shareToTelegram(link: string) {
    window.open(`https://web.telegram.org/a/#840009960`, '_blank');
  }

  
  
  
  products: Product[] = [
    {
      images : [
            'https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h3c/h66/87295491768350.png?format=gallery-medium'
      ],
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
      showGallery: false
    },
      
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h39/h94/86223761309726.png?format=gallery-medium'],
      name: 'Ноутбук Apple MacBook Air 13 2024 13.6" / 16 Гб / SSD 512 Гб / macOS / MXCU3',
      description: 'Легкий и мощный ноутбук для работы',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-512-gb-macos-mxcu3-120179654/?c=750000000',
      showGallery: false
    },

    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium'],
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63',
      description: 'Легкий и мощный ноутбук для работы',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?c=750000000',
      showGallery: false
    },

    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h4b/hd8/87059455311902.png?format=gallery-medium'],
      name: 'Кабель Apple Lightning (M), USB TypeC (M) белый',
      description: 'Кабель Apple USB Type-C - Lightning длиной 1 м удобен для подключения iPhone, iPad или iPod с разъёмом Lightning к устройствам с портом USB Type-C или Thunderbolt 3 для синхронизации и подзарядки, либо к сетевому адаптеру питания Apple USB Type-C мощностью 18 Вт, 20 Вт, 29 Вт, 30 Вт, 61 Вт, 87 Вт или 96 Вт.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000',
      showGallery: false
    },

    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hbc/h31/87295483445278.png?format=gallery-medium'],
      name: 'Смартфон Apple iPhone 16 Pro 256Gb черный',
      description: 'iPhone 16 Pro – это уникальный смартфон от Apple. Он создан на основе инноваций, отличается безукоризненным дизайном и потрясающей производительностью.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000',
      showGallery: false
    },

    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h33/haf/65966324580382.jpg?format=gallery-medium'],
      name: 'Подставка Afkas-nova AK-37 черный',
      description: 'Afkas-nova AK-37 настольный держатель для смартфона. Он изготовлен из алюминия и пластика. Этот аксессуар облегчает использование телефонов, планшетов и электронных книг, особенно когда руки заняты.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/podstavka-afkas-nova-ak-37-chernyi-107656268/?c=750000000',
      showGallery: false
    },

    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium'],
      name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
      description: 'Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
      showGallery: false
    },

    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h34/h07/63928978014238.jpg?format=gallery-medium'],
      name: 'Внешний аккумулятор Xiaomi Redmi Power Bank 20000 мАч черный',
      description: 'Xiaomi Redmi Power Bank 20000 мАч выполнен в прочном пластиковом корпусе прямоугольной формы и отличается компактными размерами.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-power-bank-20000-mach-chernyi-100322086/?c=750000000',
      showGallery: false
    },


    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=gallery-medium'],
      name: 'Наушники OEM P9 серебристый',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/oem-p9-serebristyi-116112464/?c=750000000',
      description: '',
      showGallery: false
    },

    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p16/pde/13852311.jpg?format=gallery-medium'],
      name: 'Проектор MAGCUBIC HY320',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/magcubic-hy320-118628461/?c=750000000',
      description: '',
      showGallery: false
    },

    
  ];

  toggleGallery(product: Product) {
    product.showGallery = !product.showGallery; 
  }

  
  
  
  
}
