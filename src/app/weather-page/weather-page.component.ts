import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {
  temp = 0;
  city = '';
  summary;
  loading = false;
  displayCity;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  send(){
    this.loading = true;
    if(this.city.length !== 0)
    this.http.post('https://weatherscript93.herokuapp.com/post', {
         "city": this.city
        }).subscribe(data => {
          console.log(data)
          this.temp = data['city'];
          this.summary = data['summary'];
          this.loading = false;
          this.displayCity = this.city;
          this.city = '';
        })
    else{
      this.city = '';
    }
  }
}
