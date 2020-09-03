import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Expands the side bar
   */
  expandSidebar(): void {
    this.isExpanded = true;
  }

  /**
   * Collapses the side bar
   */
  collapseSidebar(): void {
    this.isExpanded = false;
  }
}
