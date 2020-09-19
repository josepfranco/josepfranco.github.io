import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioDataService} from '../../../services/data/portfolio-data.service';
import {ProjectDto} from '../../../services/models/dtos/ProjectDto';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit, OnDestroy {

  project: ProjectDto;

  private $portfolioDataServiceSubscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private portfolioDataService: PortfolioDataService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.$portfolioDataServiceSubscription = this.portfolioDataService
      .get(id)
      .subscribe(
        (p) => this.project = p,
        () => this.router.navigate(['/portfolio']));
  }

  ngOnDestroy(): void {
    this.$portfolioDataServiceSubscription.unsubscribe();
  }
}
