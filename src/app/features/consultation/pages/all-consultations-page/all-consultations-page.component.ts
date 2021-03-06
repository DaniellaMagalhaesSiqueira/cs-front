import { Component, OnInit } from '@angular/core';
import { Consultation } from '../../models/consultation.model';
import { ConsultationService } from '../../services/consultation.service';

@Component({
  templateUrl: './all-consultations-page.component.html',
  styleUrls: ['./all-consultations-page.component.scss']
})
export class AllConsultationsPageComponent implements OnInit {

  consultations: Array<Consultation> = this.consultationService.getConsultations();;

  constructor(private consultationService: ConsultationService) { }

  ngOnInit(): void {
  
  }

}
