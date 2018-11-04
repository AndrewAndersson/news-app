import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mArticles: Array<any>;
  mSources: Array<any>;
  constructor(
    private newsApi: NewsApiService
  ) { }

  ngOnInit() {
    // Init Articles
    this.newsApi.initArticles().subscribe(data => {
      this.mArticles = data['articles'];
    });
    // Init Sources
    this.newsApi.initSources().subscribe(data => {
      this.mSources = data['sources'];
    });
  }

  searchArticles (id: string) {
    this.newsApi.getArticlesByID(id).subscribe(data => {
      this.mArticles = data['articles'];
    });
  }

}
