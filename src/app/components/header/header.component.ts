import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataPortfolio:MainServiceService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData();
  }

}
