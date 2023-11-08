import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Root } from 'src/app/models/github.root';

@Component({
  selector: 'app-containerbox',
  templateUrl: './containerbox.component.html',
  styleUrls: ['./containerbox.component.scss']
})
export class ContainerboxComponent implements OnInit {
  constructor(
    private apiService: ApiService
  ) {}

  @Input() githubUsername:string="";
  @Input() token:string="";

  list: Root[] = []
  repoList?:any[]
  p: number = 1
  name:string="";
  description: string=""
  languages:any[]=[]
  isLoadingRepo: boolean=true
  fixedList = new Array(10).fill(null);

  ngOnInit(): void {
      this.loadUserRepositories();
  }

  loadUserRepositories() {
    this.apiService.getReposWithLanguages(this.githubUsername, this.token).subscribe((ntt) => {
      setTimeout(() => {
        this.list = ntt;
      }, 2000)
      setTimeout(() => {
        this.isLoadingRepo = false;
      }, 2500);
    });
  }
  
}
