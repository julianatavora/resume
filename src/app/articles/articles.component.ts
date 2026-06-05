import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { Article, YearGroup } from '../models/article';

@Component({
  selector: 'app-articles',
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  private http = inject(HttpClient);

  public groupedYearArticles = toSignal(
    this.http.get<Article[]>('data/articles.json').pipe(
      map(articles => {
        const sorted = [...articles].sort((a, b) => +b.year - +a.year);
        const yearMap = new Map<string, Article[]>();
        for (const article of sorted) {
          if (!yearMap.has(article.year)) yearMap.set(article.year, []);
          yearMap.get(article.year)!.push(article);
        }
        return Array.from(yearMap.entries()).map(([year, arts]): YearGroup => ({ year, articles: arts }));
      })
    ),
    { initialValue: [] as YearGroup[] }
  );
}
