import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetUserDetails } from '../../state-management/user/user.state';

@Component({
   selector: 'page-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
   constructor(private readonly activatedRoute: ActivatedRoute, private readonly store: Store) {}

   ngOnInit(): void {
      this.activatedRoute.data.subscribe(({ user }) => {
         this.store.dispatch(new SetUserDetails(user));
      });
   }
}
