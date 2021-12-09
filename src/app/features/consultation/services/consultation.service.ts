import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consultation } from '../models/consultation.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

    private urlBackend = `${environment.urlBack}/consultations`;
    private headers = {
      'Content-type': 'application/json'
    };
    private consultations = new BehaviorSubject<Consultation[]>([]);

  constructor(
    private httpClient: HttpClient,
  ) { }

  getDefaultConsultation(): Consultation {
    return {
      id: "",
      isUser: false,
      professional: '',
      theme: '',
      description: '',
      price: 0,
      contact: '',
      imageUrl: '',
    }
  }

  createConsultation(consultation: Consultation){
    const body = JSON.stringify(consultation);
    this.httpClient.post<Consultation>(`${this.urlBackend}/create`, body, {headers: this.headers}).subscribe((consultation) =>{
      this.getConsultations().push(consultation);
      this.consultations.next(this.getConsultations());
    });
  }

  getConsultations(){
    this.httpClient.get<Consultation[]>(`${this.urlBackend}`).subscribe((consultations) =>{
      this.consultations.next(consultations);
    });
    return this.consultations.getValue();
  }
  getConsultationsStream(){
    return this.consultations.asObservable();
  }

  getConsultationById(id: string){
    return this.getConsultations().find((consultation) => consultation.id === id);
  }


}
