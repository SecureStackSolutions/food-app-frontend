import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'page-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
   constructor(private readonly activatedRoute: ActivatedRoute) {}

   ngOnInit(): void {}
}
