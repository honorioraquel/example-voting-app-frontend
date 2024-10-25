import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { VoteOption } from './vote-option';
import { ResultDto } from './result-dto';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private apiUrl = environment.apiUrl; 

  constructor(
    private http: HttpClient
  ) { }

  getResult(): Observable<ResultDto> {
    const url = `${this.apiUrl}/vote`;
    return this.http.get<ResultDto>(url); // Especificando a interface VoteResult
  }

  sendVote(voteOption: VoteOption): Observable<any> {
    // Corpo da requisição
    const body = { voteOption: voteOption };
    const url = `${this.apiUrl}/vote`;
    // Cabeçalhos, caso necessário
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Enviando a requisição POST
    return this.http.post(url, body, { headers });
  }
}
