import {MediaMatcher} from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav=[
    {name:"Home", route:"", icon:"home"},
    {name:"Inicio Brigadas", route:"inicioBrigada", icon:"school"},
    {name:"1ro", route:"1ro", icon:"school"},
    {name:"2do", route:"2do", icon:"school"},
    {name:"3ro", route:"3ro", icon:"school"},
    {name:"Ejes Mensuales", route:"ejes_mensuales", icon:"school"},
    {name:"Ejes Diarios", route:"ejes_diarios", icon:"school"}
  ]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
  //[/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  ngOnInit() {
  }

}
