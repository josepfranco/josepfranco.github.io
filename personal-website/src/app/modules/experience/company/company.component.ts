import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  imageFile: string;

  @Output()
  selected = new EventEmitter<[string, boolean]>();

  isSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Select this specific company
   */
  select(): void {
    this.isSelected = true;
    this.emitSelectedEvent();
  }

  /**
   * Deselect this specific company
   */
  deselect(): void {
    this.isSelected = false;
    this.emitSelectedEvent();
  }

  private emitSelectedEvent(): void {
    this.selected.emit([this.name, this.isSelected]);
  }
}
