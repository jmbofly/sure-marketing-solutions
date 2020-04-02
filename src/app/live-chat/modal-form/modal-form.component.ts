import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'sms-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
  @ViewChild(ModalDirective, { static: false }) chatForm: ModalDirective;
  @ViewChild('userEmail', { static: false }) userEmail: any;
  @ViewChild('userName', { static: false }) userName: any;
  constructor(public modalService: BsModalService) { }

  ngOnInit(): void {
  }

}
