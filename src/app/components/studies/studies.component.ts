import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  educationList:any;
  constructor(private datosPortafolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      this.educationList = data.education;
    });
  }
}
