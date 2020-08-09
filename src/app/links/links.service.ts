import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Link } from './link.model';

@Injectable()
export class LinksService {
  linksChanged = new Subject<Link[]>();

  private links: Link[] = [];

  constructor() { }

  setLinks(links: Link[]) {
    this.links = links;
    this.linksChanged.next(this.links.slice());
  }

  getLinks() {
    return this.links.slice();
  }

  getLink(index: number) {
    return this.links[index];
  }

  addLink(link: Link) {
    this.links.push(link);
    this.linksChanged.next(this.links.slice());
  }

  updateLink(index: number, newLink: Link) {
    this.links[index] = newLink;
    this.linksChanged.next(this.links.slice());
  }

  deleteLink(index: number) {
    this.links.splice(index, 1);
    this.linksChanged.next(this.links.slice());
  }
}
