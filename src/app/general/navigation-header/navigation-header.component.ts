import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css']
})
export class NavigationHeaderComponent implements OnInit {

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
  }

  NavigateToDestiny(string: string){
    this.generalService.navegar(string);
  }
}
