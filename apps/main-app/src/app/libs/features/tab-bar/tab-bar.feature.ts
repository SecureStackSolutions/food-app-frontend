import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonTabs } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { SetUserDetails } from '../../state-management';

@Component({
   selector: 'feature-tab-bar',
   templateUrl: 'tab-bar.feature.html',
   styleUrls: ['tab-bar.feature.scss'],
})
export class TabBarFeature implements OnInit {
   @ViewChild(IonTabs, { static: false }) tabs!: IonTabs;
   selectedTabName?: string;
   constructor(private readonly activatedRoute: ActivatedRoute, private readonly store: Store) {}

   ngOnInit(): void {
      this.activatedRoute.data.subscribe(({ user }) => {
         this.store.dispatch(new SetUserDetails(user));
      });
   }

   tabsChanged({ tab: tabName }: TabsDidChange) {
      this.selectedTabName = tabName;
   }
}

interface TabsDidChange {
   tab: string;
}
