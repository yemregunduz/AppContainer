import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../models/owner';
import { RepoModel } from '../models/repoModel';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  private baseUrl = "https://api.github.com/users/"
  private reposUrl = "/repos?sort=created&direction=desc&per_page=300"
  constructor(private httpClient:HttpClient) { }

  getAllRepositoriesOfUser(username:string){
    let newPath = this.baseUrl+username+this.reposUrl
    return this.httpClient.get<RepoModel[]>(newPath)
  }
  getUserInfo(username:string){
    let newPath = this.baseUrl+username
    return this.httpClient.get<Owner>(newPath)
  }
}
