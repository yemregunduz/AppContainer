import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Chart, registerables } from 'node_modules/chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables);
@Component({
  selector: 'app-chart-app',
  templateUrl: './chart-app.component.html',
  styleUrls: ['./chart-app.component.css'],
})
export class ChartAppComponent implements OnInit {
  chartInfoForm:FormGroup
  chartTypes: string[] = ['bar', 'radar', 'doughnut', 'pie', 'polarArea'];
  columns: any[] = [];
  data: any[];
  myChart: Chart;
  numberFormatter  = new Intl.NumberFormat();
  constructor(private formBuilder: FormBuilder,private toastrService:ToastrService) {}
  ngOnInit(): void {
    this.createChartInfoForm()
    console.log(this.numberFormatter.format(3500000))
  }

  createChartInfoForm(){
    this.chartInfoForm = this.formBuilder.group({
      labelProperty:["",Validators.required],
      dataProperty:["",Validators.required],
      chartTypeProperty:["",Validators.required],
      
    })
  }
  createDynamicChart(chartData:any[],chartLabels:any[],chartType:any,datasetLabel:any) {
    if (this.myChart != null) {
      this.myChart.destroy();
    }
    this.myChart = new Chart('myChart', {
      type: chartType,
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: datasetLabel,
            data: chartData,
            backgroundColor: this.createRandomColorsForChart(chartData.length,0.3),
            borderColor:this.createRandomColorsForChart(chartData.length,1),
            borderWidth: 1,
            
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins:{
          options:{
            anchor:'end'
          }
        }
        
      },
      plugins:[ChartDataLabels],


          
    });
  }
  submitForm(){
    if(this.chartInfoForm.valid){
      let chartData = this.data.map((val) => {
        return val[this.chartInfoForm.controls["dataProperty"].value] 
      });
      let chartLabels = this.data.map((val)=>{
        return val[this.chartInfoForm.controls["labelProperty"].value];
      })
      let chartType = this.chartInfoForm.controls["chartTypeProperty"].value
      this.createDynamicChart(chartData,chartLabels,chartType,this.chartInfoForm.controls["dataProperty"].value)
    }
    else{
      this.toastrService.error("Please select all features completely","Validation Error!")
    }
   
    
  }
  dataFromEventEmitter(data: any[]) {
    if(data){
      this.columns = Object.getOwnPropertyNames(data[0])
      //delete row information from column array 
      this.columns.shift()
      this.data = data;
    }
  }
  onInputChange(){
    if(this.myChart)
    this.myChart.destroy()
  }
  createRandomColorsForChart(colorCount:number,opacity:number):string[]{
    let colorArrayForLabels=[]
    
    for (let i = 0; i < colorCount; i++) {
      var num = Math.round(0xffffff*Math.random());
      var r = num >> 16;
      var g = num >> 8&255;
      var b = num & 255;
      colorArrayForLabels.push('rgb(' + r + ', ' + g + ', ' + b + ', '+opacity + ')')
    }
    return colorArrayForLabels;
  }
  downloadChart(){
    var canvas =  document.getElementById("myChart") as HTMLCanvasElement;
    if(this.myChart!=null){
      var img   = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.href = img;
      link.setAttribute('visibility','hidden');
      link.download = this.chartInfoForm.controls["dataProperty"].value
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  
  }
}
