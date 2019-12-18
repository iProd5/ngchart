import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-barchart",
  templateUrl: "./barchart.component.html",
  styleUrls: ["./barchart.component.css"]
})
export class BarchartComponent implements OnInit {
  // specifics n feeding
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType = "line";
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "rainfall" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "crops produced" },
    { data: [20, 18, 50, 119, 6, 7, 9], label: "purchase" }
  ];
  // end

  constructor() {}

  ngOnInit() {}
}
