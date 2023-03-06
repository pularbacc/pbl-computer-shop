import { Component, ViewChild ,OnInit} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-top-sell',
  templateUrl: './top-sell.component.html',
  styleUrls: ['./top-sell.component.css']
})
export class TopSellComponent implements OnInit {

  constructor(
  ) {
  }
  ngOnInit(): void {
  }


  ctx: any;
  chart:any;
  check:boolean;
  type:string;
  xValues = ["Asus spring5", "Dell xsMax", "Macbook pro", "LenovoA9", "Dell Gaming"];
  yValues = [24,14,52,12,30];
  barColors= ["#b91d47","#00aba9","#2b5797","#e8c3b9","#1e7145"];

  @ViewChild('chartBar') chartBar: any;

  ngAfterViewInit() {

    this.type = 'doughnut';
    this.funcChart();
  }

  funcChart() {
    if(this.chart != null){
      this.chart.destroy();
    }
    this.ctx = this.chartBar.nativeElement.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: this.type,
      data: {
        datasets: [{
          label: 'buy',
          data: this.yValues,
          backgroundColor: this.barColors,
        }],
        labels: this.xValues
      },
    });
  }

  line(){
    this.type = 'line';
    this.funcChart();
  }
  doughnut(){
    this.type = 'doughnut';
    this.funcChart();
  }
  bar(){
    this.type = 'bar';
    this.funcChart();
  }
  
  
}
