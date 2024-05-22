import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tip03',
  templateUrl: './tip03.page.html',
  styleUrls: ['./tip03.page.scss'],
})
export class Tip03Page implements OnInit {

  data: any[] = [];
  selectedItem: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any[]>('http://34.22.111.229/moneyTip.php').subscribe(
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