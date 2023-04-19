import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { expandUp, expandWidth, fadeIn } from 'src/app/animations';
import { StartService } from './start.service';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [
    fadeIn,
    expandUp,
    expandWidth
  ]
})
export class StartComponent implements OnInit{
  code!: string;
  state!: string;
  authToken: any;
  queryParams!: Params;

  constructor(private startService: StartService, private route: ActivatedRoute) {
    // parse the query parameters from the start url and store the code and state
    this.route.queryParams.subscribe(params => {
      this.queryParams = params;
    })
    this.code = this.queryParams['code'];
    this.state = this.queryParams['state'];
  }


  ngOnInit(): void {
    // send code and state parameters to complete spotify authorization and receive access token
    this.startService.getToken(this.code, this.state).subscribe(
      response => {
        this.authToken = response['token']
        console.log("Token received and stored: ", this.authToken)
      }
    )
  }

}
