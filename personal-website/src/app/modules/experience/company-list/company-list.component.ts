import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CompanyDto} from '../../../services/models/dtos/CompanyDto';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  @Input()
  companyList: CompanyDto[];

  @Output()
  selected = new EventEmitter<CompanyDto>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(event: [string, boolean]): void {
    const [key, selected] = event;
    const company = selected
      ? this.companyList.find(x => x.name === key)
      : null;

    // emit event
    this.selected.emit(company);
  }
}
