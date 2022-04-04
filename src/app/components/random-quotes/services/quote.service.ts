import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { QuateModel } from '../models/quoteModel';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiUrl="https://type.fit/api/quotes"
  constructor(private httpClient:HttpClient) { }
  
  getAllQuotes(){
    let newPath = this.apiUrl;
    return this.httpClient.get<QuateModel[]>(newPath);
  }
} 
