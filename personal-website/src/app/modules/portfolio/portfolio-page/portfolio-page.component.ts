import {Component, HostBinding, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DateUtilsService} from '../../../services/utils/date-utils.service';
import {ProjectDto} from '../../../services/models/dtos/ProjectDto';
import {PortfolioDataService} from '../../../services/data/portfolio-data.service';

@Component({
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
})
export class PortfolioPageComponent implements OnInit {

  @HostBinding('style.width')
  parentWidth = '100%';

  @HostBinding('style.height')
  parentHeight = '100%';

  projectList: ProjectDto[];

  private $dataSubscription: Subscription;

  constructor(private portfolioDataService: PortfolioDataService,
              private dateUtilService: DateUtilsService) {
    this.projectList = [];
  }

  ngOnInit(): void {
    this.$dataSubscription = this.portfolioDataService
      .getAll()
      .subscribe((list: ProjectDto[]) => {
        if (list == null) {
          this.projectList = [];
        }
        this.projectList = list.sort((a, b) => this.dateUtilService.compareDate(b.date, a.date));
      });
  }
}
