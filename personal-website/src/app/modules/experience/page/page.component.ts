import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ExperienceDataService} from '../../../services/data/experience-data.service';
import {CompanyDto} from '../../../services/models/dtos/CompanyDto';
import {DateUtilsService} from '../../../services/utils/date-utils.service';

@Component({
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

  @HostBinding('style.width')
  parentWidth = '100%';

  @HostBinding('style.height')
  parentHeight = '100%';

  companyList: CompanyDto[];
  selectedCompany: CompanyDto;

  private $dataSubscription: Subscription;

  constructor(private experienceDataService: ExperienceDataService,
              private dateUtilService: DateUtilsService) {
    this.companyList = [];
  }

  ngOnInit(): void {
    this.$dataSubscription = this.experienceDataService
      .getAll()
      .subscribe((list: CompanyDto[]) => {
        if (list == null) {
          this.companyList = [];
        }
        this.companyList = list.sort((a, b) => this.dateUtilService.compareDate(b.duration.start, a.duration.start));
        this.selectedCompany = this.companyList[0];
      });
  }

  ngOnDestroy(): void {
    this.$dataSubscription.unsubscribe();
  }

  onSelected(event: CompanyDto): void {
    if (event == null) { return; }
    this.selectedCompany = event;
  }
}
