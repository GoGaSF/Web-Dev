import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  categories = ['iphone 11', 'iphone 13', 'iphone 14', 'iphone 15'];
  selected = 'iphone 11';

  products = [
    {
      id : 1,
      category : 'iphone 13',
      name: 'Чехол для Iphone 13',
      description: 'Прочный и стильный чехол.',
      rating: 4.9,
      likes : 0,
      image: './images_for_product/iphone13.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      id : 2,
      category : 'iphone 14',
      name: 'Чехол для Iphone 14',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.9,
      likes : 0,
      image: './images_for_product/iphone14.jpg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000',
    },
    {
      id : 3,
      category : 'iphone 15',
      name: 'Чехол для Iphone 15',
      description: 'Тонкий силиконовый чехол.',
      rating: 4.9,
      likes : 0,
      image: './images_for_product/iphone15.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000',
    },
    {
      id : 4,
      category : 'iphone 11',
      name: 'Чехол для iPhone 11',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.9,
      likes : 0,
      image: './images_for_product/iphone11.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000',
    },
    {
      id : 5,
      category : 'iphone 13',
      name: 'Чехол для Iphone 13',
      description: 'Прочный и стильный чехол.',
      rating: 4.9,
      likes : 0,
      image: './images_for_product/iphone13.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      id : 6,
      category : 'iphone 14',
      name: 'Чехол для Iphone 14',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.9,
      likes : 0,
      image: './images_for_product/iphone14.jpg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000',
    },
    {
      id : 7,
      category : 'iphone 15',
      name: 'Чехол для Iphone 15',
      description: 'Тонкий силиконовый чехол.',
      rating: 4.9,
      likes : 0,
      image: './images_for_product/iphone15.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000',
    },
    {
      id : 8,
      category : 'iphone 11',
      name: 'Чехол для iPhone 11',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.9,
      likes : 0,
      image: './images_for_product/iphone11.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000',
    },
    {
      id : 9,
      category : 'iphone 13',
      name: 'Чехол для Iphone 13',
      description: 'Прочный и стильный чехол.',
      rating: 4.9,
      likes : 0,
      image: './images_for_product/iphone13.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      id : 10,
      category : 'iphone 14',
      name: 'Чехол для Iphone 14',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.9,
      likes : 0,
      image: './images_for_product/iphone14.jpg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000',
    },
  ];

  getfilteredProducts(){

    var filtered = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].category === this.selected){
        filtered.push(this.products[i]);
      }
    } 
    return filtered;
  }

  selectCategory(event : any){
    this.selected = event.target.value;
  }

  removeProduct(id : number){
    var newProducts = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id !== id){
        newProducts.push(this.products[i]);
      }
    }
    this.products = newProducts;
  }

  likeProduct(id : number){
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id === id){
        this.products[i].likes += 1;
      }
    }
  }

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://www.whatsapp.com/download/`;
    } else if (platform === 'telegram') {
      shareUrl = `https://telegram.org/`;
    }
    window.open(shareUrl, '_self');
  }
}
