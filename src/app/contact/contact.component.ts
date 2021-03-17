import { Component, OnInit, ViewChild } from '@angular/core';
import { MapMarker, MapInfoWindow, GoogleMap } from '@angular/google-maps';
import { Contact, TOPICS } from '../shared/meta/contact';
import { DataService } from '../core/data.service';


@Component({
  selector: 'sms-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  infoContent = '';
  canCall = true;
  mapOptions: google.maps.MapOptions = {};
  contactTopics = TOPICS;
  markers = [];
  center: google.maps.LatLngLiteral = {
    lat: 40.051550,
    lng: -82.433920
  };
  contactModel: Contact = {
    firstName: '',
    lastName: '',
    phone: '',
    canCall: true,
    email: '',
    subject: '',
    message: '',
    topic: 'website'
  }
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.addMarker();
    // navigator.geolocation.getCurrentPosition(position => {
      //   this.center = {
        //     lat: position.coords.latitude,
        //     lng: position.coords.longitude,
        //   }
        // })
  }
  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat,
        lng: this.center.lng,
      },
      label: {
        color: 'white',
        text: 'Sure Marketing Solutions',
      },
      title: 'SURE MARKETING SOLUTIONS | Digital Marketing Agency',
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
      },
    })
  }
  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.infoWindow.open(marker)
  }

  toggleCanCall() {
    this.canCall = !this.canCall;
  }

  async addNewContact(data) {
    await this.dataService.addToCollection('contacts', data)
    this.contactModel = {
      firstName: '',
      lastName: '',
      phone: '',
      canCall: true,
      email: '',
      subject: '',
      message: '',
      topic: 'website'
    };
  }

  mapClicked(e: Event) {
    console.log(e)
  }


}
