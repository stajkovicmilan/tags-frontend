import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LinksService } from '../links.service';
import { Link } from '../link.model';


@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css']
})
export class LinksListComponent implements OnInit, OnDestroy {
  links: Link[];
  subscription: Subscription;

  constructor(private linksService: LinksService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.linksService.linksChanged
      .subscribe(
        (links: Link[]) => {
          this.links = links;
        }
      );
    this.links = this.linksService.getLinks();
  }

  onNewLink() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
