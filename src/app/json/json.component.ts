import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent {
  [x: string]: any;
  title = 'JSON to Table Example';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 
  constructor (private httpService: HttpClient) { }
  arrTopics: string [];
  endpoint = 'http://172.17.12.61:8900/crud/insert';
  ngOnInit () {
    this.httpService.get('./assets/topics.json').subscribe(
      data => {
        this.arrTopics = data as string [];	
      }
    );
    this.httpService.post<any>(this.endpoint,
      {
        "id":"saaa",
        "name":"sa",
        "age":"20"
      }
      ).subscribe(
      data => {
          console.log(data);
      }
    ); 
  }
}
