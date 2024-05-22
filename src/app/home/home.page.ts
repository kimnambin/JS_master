import { Component, AfterViewInit, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { SearchModalPage } from '../search-modal/search-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChildren('aniItem') aniItems!: QueryList<any>;
  currentIndex: number = 0;
  totalItems: number = 0;
  searchResults: any[] = [];
  searchInputValue: string = '';

  constructor(private renderer: Renderer2, private http: HttpClient, private modalController: ModalController) {}

  ngAfterViewInit() {
    this.totalItems = this.aniItems.length;
    setInterval(() => this.rotateImages(), 2000); // 이미지를 변경하는 간격 (밀리초)
  }

  rotateImages() {
    if (this.aniItems) {
      const itemsArray = this.aniItems.toArray();
      if (itemsArray[this.currentIndex]) {
        this.renderer.setStyle(itemsArray[this.currentIndex].nativeElement, 'transform', 'translateX(-100%)');
      }
      const nextIndex = (this.currentIndex + 1) % this.totalItems;
      if (itemsArray[nextIndex]) {
        this.renderer.setStyle(itemsArray[nextIndex].nativeElement, 'transform', 'translateX(0)');
      }
      this.currentIndex = nextIndex;
    }
  }

  async performSearch() {
    if (!this.searchInputValue) {
      console.error('검색어가 입력되지 않았습니다.');
      return;
    }

    console.log('입력한 검색어:', this.searchInputValue); // 검색어를 콘솔에 출력

    try {
      const searchResults = await this.fetchSearchResults(this.searchInputValue);

      console.log('검색 결과:', searchResults); // 검색 결과를 콘솔에 출력

      // 검색 결과를 모달로 표시
      const modal = await this.modalController.create({
        component: SearchModalPage,
        componentProps: {
          searchResults: searchResults.search_results // 검색 결과 배열을 전달
        },
        cssClass: 'custom-modal-class2' 
      });
      await modal.present();
    } catch (error) {
      console.error('검색 중 오류 발생', error);
    }
  }

  async fetchSearchResults(query: string): Promise<any> {
    try {
      const url = 'http://34.22.111.229/search.php'; // 서버의 검색 API 주소
      const response = await this.http.post<any>(url, { query: query }).toPromise();
      return response || { search_results: [] }; // 기본적으로 빈 검색 결과를 반환
    } catch (error) {
      console.error('검색 결과를 가져오는 중 오류 발생:', error);
      throw new Error('검색 결과를 가져오는 중 오류가 발생했습니다.');
    }
  }
}
