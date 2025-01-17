import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Router: Router) { }

  items: MegaMenuItem[] | undefined;
  
  ngOnInit() {
}
}
