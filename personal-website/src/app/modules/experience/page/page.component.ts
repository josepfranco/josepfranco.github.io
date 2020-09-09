import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ExperienceDataService} from '../../../services/data/experience-data.service';
import {CompanyDto} from '../../../services/models/CompanyDto';
import {DateUtilsService} from '../../../services/utils/date.service';

@Component({
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

  @HostBinding('style.width')
  parentWidth = '100%';

  @HostBinding('style.height')
  parentHeight = '100%';

  dataList: CompanyDto[];

  private $dataSubscription: Subscription;

  constructor(private experienceDataService: ExperienceDataService,
              private dateUtilService: DateUtilsService) {
    this.dataList = [];
  }

  ngOnInit(): void {
    this.$dataSubscription = this.experienceDataService
      .getAll()
      .subscribe((list: CompanyDto[]) => {
        this.dataList = list.sort((a, b) => this.dateUtilService.compareDate(b.startDate, a.startDate));
      });
  }

  ngOnDestroy(): void {
    this.$dataSubscription.unsubscribe();
  }
}
