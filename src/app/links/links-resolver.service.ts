import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Link } from './link.model';
import { DataStorageService } from '../shared/data-storage.service';
import { LinksService } from './links.service';

@Injectable({ providedIn: 'root' })
export class LinksResolverService implements Resolve<Link[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private linksService: LinksService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const links = this.linksService.getLinks();

    if (links.length === 0) {
      return this.dataStorageService.fetchLinks();
    } else {
      return links;
    }
  }
}
