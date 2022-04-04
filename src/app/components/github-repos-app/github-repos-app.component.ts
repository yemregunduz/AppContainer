import { Component, OnInit } from '@angular/core';
import { Owner } from './models/owner';
import { RepoModel } from './models/repoModel';
import { RepoService } from './services/repo.service';

@Component({
  selector: 'app-github-repos-app',
  templateUrl: './github-repos-app.component.html',
  styleUrls: ['./github-repos-app.component.css']
})
export class GithubReposAppComponent implements OnInit {

  username:string
  owner:Owner = new Owner();
  repos:RepoModel[]=[];
  isRepositoryFound:boolean
  isUserFound:boolean
  constructor(private repoService:RepoService) { }

  ngOnInit(): void {
    this.getAllRepositoriesOfUser("yemregunduz")
    this.getUserInfo("yemregunduz")
  }
  getAllRepositoriesOfUser(username:string){
    this.isRepositoryFound=false
    if(username.length>0){
      username.trim();
      this.repoService.getAllRepositoriesOfUser(username).subscribe(response=>{
         this.repos = response;
         if(response.length>0){
          this.isRepositoryFound=true;
         }
      },(error)=>{
        this.isRepositoryFound=false
      }
      )
    }
  }
  getUserInfo(username:string){
    if(username.length>0){
      username.trim();
      this.repoService.getUserInfo(username).subscribe(response=>{
          this.owner = response
          this.isUserFound=true
      },(error)=>{
        this.isUserFound=false
      })
    }
    
  }

}
