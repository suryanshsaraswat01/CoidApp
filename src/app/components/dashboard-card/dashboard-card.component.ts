import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @Input ('totalConfirmed')
  totalConfirmed;
  @Input ('totalRecovered')
  totalRecovered;
  @Input ('totalActive')
  totalActive;
  @Input ('totalDeaths')
  totalDeaths;
  
  constructor() { }

  ngOnInit(): void {
  }

}
