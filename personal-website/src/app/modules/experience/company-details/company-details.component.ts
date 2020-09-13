import {Component, Input, OnInit} from '@angular/core';
import {CompanyDto} from '../../../services/models/CompanyDto';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  @Input()
  company: CompanyDto;

  constructor() { }

  ngOnInit(): void {
  }

}
