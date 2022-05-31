import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'Angular';
  imageObject = [{
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/69/IndiGo_Airlines_logo.svg',
      thumbImage: 'https://upload.wikimedia.org/wikipedia/commons/6/69/IndiGo_Airlines_logo.svg',
      title: 'Indico'
  }, 
  {
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/VT-MXX_-_Boeing_737_MAX_8_-_SpiceJet_-_MSN_60184_-_VGHS.jpg',
      thumbImage: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/VT-MXX_-_Boeing_737_MAX_8_-_SpiceJet_-_MSN_60184_-_VGHS.jpg',
      title: 'SpiceJet'
  }, {
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/JetAirways_-_Sunrise.jpg',
      thumbImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/JetAirways_-_Sunrise.jpg',
      title: 'Jet Airways.'
  }, {
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Emirates_Airbus_A380-861_A6-EER_MUC_2015_04.jpg',
      thumbImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Emirates_Airbus_A380-861_A6-EER_MUC_2015_04.jpg',
      title: 'Emirates.'
  }, {
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Kingfisher_Airlines_Airbus_A320-200.jpg',
      thumbImage: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Kingfisher_Airlines_Airbus_A320-200.jpg',
      title: 'KingFisher'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Nepal_Airlines_logo.png',
    thumbImage: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Nepal_Airlines_logo.png',
    title: 'Nepal'
}
];
  constructor() { }

  ngOnInit(): void {
  }

}
