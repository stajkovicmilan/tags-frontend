import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { LinksService } from '../links/links.service';
import { Link } from '../links/link.model';


@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private linkService: LinksService
  ) { }

  // storeLinks() {
  //   const links = this.linkService.getLinks();
  //   this.http
  //     .post(
  //       'http://localhost:8080/links',
  //       links
  //     )
  //     .subscribe(response => {
  //       console.log(response);
  //     });
  // }

  fetchLinks() {
    return this.http
      .get<Link[]>(
        'http://localhost:8080/links'
      )
      .pipe(
        map(links => {
          return links.map(link => {
            return {
              ...link,
              domain: link.domain ? link.domain : null
            };
          });
        }),
        tap(links => {
          this.linkService.setLinks(links);
        })
      );
  }
}
