import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs';
import { Root, User } from '../models/github.root';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  constructor(
    private httpClient: HttpClient
  ) { }


  getUser(githubUsername: string, token: string) {
    token = localStorage.getItem('api') || token;
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `token ${token}`,
      });
      return this.httpClient.get<User>(`https://api.github.com/users/${githubUsername}`, {headers});
    }
    return this.httpClient.get<User>(`https://api.github.com/users/${githubUsername}`);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
  getReposWithLanguages(githubUsername: string, token: string) {
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `token ${token}`,
      });
      return this.httpClient.get<Root[]>(`https://api.github.com/users/${githubUsername}/repos`, {headers}).pipe(
        switchMap((repos) => {
          const observables = repos.map((repo) => {
            const languagesUrl = `${repo.languages_url}`
            return this.httpClient.get(languagesUrl, {headers}).pipe(
              map((languages) => {
                const languagesArray = Object.entries(languages).map(([key, value]) => ({language: key, value}));
                return {...repo, languages: languagesArray}
              })
            );
          });
  
          return combineLatest(observables);
        })
      )
    } else {
      return this.httpClient.get<Root[]>(`https://api.github.com/users/${githubUsername}/repos`).pipe(
        switchMap((repos) => {
          const observables = repos.map((repo) => {
            const languagesUrl = `${repo.languages_url}`
            return this.httpClient.get(languagesUrl).pipe(
              map((languages) => {
                const languagesArray = Object.entries(languages).map(([key, value]) => ({language: key, value}));
                return {...repo, languages: languagesArray}
              })
            );
          });
  
          return combineLatest(observables);
        })
      )
    }
  }
}
