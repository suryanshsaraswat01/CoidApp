import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { GlobalDataSummary } from 'src/app/models/global-data';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalConfirmed=0;
  totalActive=0;
  totalDeaths=0;
  totalRecovered=0;
  globalData : GlobalDataSummary[] ;
  pieChart :  GoogleChartInterface = {
    chartType: 'PieChart'

  }
  columnChart :  GoogleChartInterface = {
    chartType: 'ColumnChart'

  }

  constructor(private dataService : DataServiceService) { }
  initChart(){

    let dataTable = [];
    dataTable.push(["Country","Cases"])
    this.globalData.forEach(cs=>{
      dataTable.push([
        cs.country,cs.confirmed
      ])
    })
    console.log(dataTable);
    this.pieChart = {
      chartType: 'PieChart',
      dataTable:dataTable,
      //firstRowIsData: true,
      options: {
        height: 350
      },
    };
    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable:dataTable,
      //firstRowIsData: true,
      options: {
        height: 350
      },
    };
  }

  ngOnInit(): void {
    this.dataService.getGLobalData()
    .subscribe(
      {
        next : (result)=>{
          console.log(result); 
          this.globalData= result;

          result.forEach(cs=>{
            if(!Number.isNaN(cs.confirmed)){
            this.totalActive+=cs.active;
            this.totalConfirmed += cs.confirmed;
            this.totalDeaths += cs.deaths;
            this.totalRecovered +=cs.recovered;
            }
          })
          this.initChart();
        }
      }
    )
  }

}
