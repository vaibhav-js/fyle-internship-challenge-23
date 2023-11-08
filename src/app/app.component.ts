import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Root } from './models/github.root';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  githubUsername: string=""
  token: string=""
  usernameEntered: boolean=false;
  isLoadingRepo: boolean=true;
  disableButton: boolean=false;
  
  constructor(
    private apiService: ApiService
  ) {}

  list: Root[] = []
  p: number = 1

  ngOnInit() {
    // this.apiService.getUser('vaibhav-js').subscribe(console.log);
  }

  fetchRepos() {
    localStorage.setItem('api', this.token);
    this.disableButton = true;
    if(!this.githubUsername) {
      alert("enter username");
      this.disableButton = false;
      return;
    }

    this.apiService.getUser(this.githubUsername, this.token).pipe(
      catchError((error) => {
        alert('User Not found');
        this.disableButton = false;
        return of(null);
      })
    ).subscribe((data) => {
      if (data) {
        this.usernameEntered = true;
        setTimeout(() => {
          this.disableButton = false;
        }, 4000)
      }
    });
    
  }

  searchOtherUser() {
    window.location.reload();
    this.usernameEntered = false;
  }
}
