import { Service, inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  error?: string;
}

@Service()
export class ContactService {
    private http = inject(HttpClient);

    private endpoint = 'https://anne-manthey.de/contact.php';

    send(payload: ContactPayload): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.endpoint, payload);
  }
}
