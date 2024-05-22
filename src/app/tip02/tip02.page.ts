import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tip02',
  templateUrl: './tip02.page.html',
  styleUrls: ['./tip02.page.scss'],
})
export class Tip02Page implements OnInit {
  data: any[] = [];
  selectedItem: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any[]>('http://34.22.111.229/healthTip.php').subscribe(
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