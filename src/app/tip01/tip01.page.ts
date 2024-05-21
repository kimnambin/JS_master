import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tip01',
  templateUrl: './tip01.page.html',
  styleUrls: ['./tip01.page.scss'],
})
export class Tip01Page implements OnInit {
  data: any[] = [];
  selectedItem: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any[]>('http://34.22.111.229/lifeTip.php').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showDetails(item: any) {
    this.selectedItem = item;
  }
}
