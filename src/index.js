// import { Component, AfterViewInit, ViewChildren, QueryList, Renderer2 } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage implements AfterViewInit {
//   @ViewChildren('aniItem')
//   aniItems!: QueryList<any>;
//   currentIndex: number = 0;
//   totalItems: number = 0;

//   constructor(private renderer: Renderer2) {}

//   ngAfterViewInit() {
//     this.totalItems = this.aniItems.length;
//     setInterval(() => this.rotateImages(), 2000); // 이미지를 변경하는 간격 (밀리초)
//   }

//   rotateImages() {
//     if (this.aniItems) {
//       const itemsArray = this.aniItems.toArray();
//       if (itemsArray[this.currentIndex]) {
//         this.renderer.setStyle(itemsArray[this.currentIndex].nativeElement, 'transform', 'translateX(-100%)');
//       }
//       const nextIndex = (this.currentIndex + 1) % this.totalItems;
//       if (itemsArray[nextIndex]) {
//         this.renderer.setStyle(itemsArray[nextIndex].nativeElement, 'transform', 'translateX(0)');
//       }
//       this.currentIndex = nextIndex;
//     }
//   }
// }
