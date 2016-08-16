import {Component, ViewChild } from '@angular/core';
import {NavController, Slides} from 'ionic-angular';

import {GeneralInfoPage} from '../general-info/general-info';
import {WaterPage} from '../water/water';
import {AboutPage} from '../about/about';


export class SlideOptions {
  constructor(
    public autoplay:	number = 3000, //	Delay between transitions (in ms). If this parameter is not passed, autoplay is disabled.
    public direction:	string =	'horizontal', //	Swipe direction: 'horizontal' or 'vertical'.
    public initialSlide:	number = 0, //	Index number of initial slide
    public loop:	boolean	= true, //	Whether to continuously loop from the last slide to the first slide.
    public pager:	boolean	= true, //	Show the pagination bullets.
    public speed:	number	= 300	// Duration of transition between slides (in ms).
  ) {}
} 

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [
    GeneralInfoPage, 
    WaterPage,
    AboutPage]
})
export class HomePage {
  @ViewChild('mainSlider') slider: Slides;

  private slideOptions = new SlideOptions(null);

  constructor(public navCtrl: NavController) {
      
  }
}
