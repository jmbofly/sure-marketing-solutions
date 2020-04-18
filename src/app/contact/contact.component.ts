import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../core/data.service';
import { MapMarker, MapInfoWindow, GoogleMap } from '@angular/google-maps';
export interface Contact {
  name: string,
  email: string,
  subject: string,
  message: string
}

@Component({
  selector: 'sms-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  infoContent = '';
  mapOptions: google.maps.MapOptions = {}
  markers = [];
  center: google.maps.LatLngLiteral = {
    lat: 40.051550,
    lng: -82.433920
  };
  contactModel: Contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.addMarker()
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

  async addNewContact(data) {
    await this.dataService.addToCollection('contacts', data).then(res => console.log('contact added', res))
  }

  mapClicked(e: Event) {
    console.log(e)
  }


}
