import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  total = 100;
  curPage = 1;
  pageSize = {
    size: 10,
    options: [10, 20, 50, 100],
  };

  list: any[] = [];
  displayed: any[] = [];

  get totalPages(): number {
    return Math.ceil(this.total / this.pageSize.size);
  }

  ngOnInit(): void {
    this.list = new Array(this.total)
      .fill(0)
      .map((item, index) => `Index: ${index + 1}`);
    console.log('list:', this.list);
  }

  prePage() {
    this.curPage--;
  }

  nextPage() {
    this.curPage++;
  }

  jumpToPage() {
    if (this.curPage < 1 || this.curPage > this.totalPages) return;
    console.log('jumpToPage:', this.curPage);
  }
}
