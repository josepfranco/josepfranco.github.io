import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {EducationDataService} from '../../../services/data/education-data.service';
import {SchoolDto} from '../../../services/models/SchoolDto';
import {Subscription} from 'rxjs';
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

  dataList: SchoolDto[];

  private $dataSubscription: Subscription;

  constructor(private educationDataService: EducationDataService,
              private dateUtilService: DateUtilsService) {
    this.dataList = [];
  }

  ngOnInit(): void {
    this.$dataSubscription = this.educationDataService
      .getAll()
      .subscribe((list: SchoolDto[]) => {
        this.dataList = list.sort((a, b) => this.dateUtilService.compareDate(b.startDate, a.startDate));
      });
  }

  ngOnDestroy(): void {
    this.$dataSubscription.unsubscribe();
  }
}
