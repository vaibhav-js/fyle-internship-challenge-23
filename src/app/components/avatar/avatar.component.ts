import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit{
  constructor(
    private apiService: ApiService
  ) {}

  @Input() githubUsername: string=""
  @Input() token: string=""
  @Input() usernameEntered: boolean=false

  isLoadingProfile: boolean=true
  name: string=""
  bio: string=""
  twitter_username: string=""
  avatarUsername: string=""
  location: string=""


  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.apiService.getUser(this.githubUsername, this.token).pipe(
      catchError((error) => {
        console.error(error);
        alert('User Not found');
        return of(null);
      })
    ).subscribe((data) => {
      if (data) {
        this.usernameEntered = true;
        setTimeout(() => {
          this.bio = data.bio;
          this.name = data.name;
          this.twitter_username = data.twitter_username;
          this.location = data.location;
          this.avatarUsername = data.login;
        }, 2000);
        setTimeout(() => {
          this.isLoadingProfile = false;
        }, 2000);
      }
    });
  }

}