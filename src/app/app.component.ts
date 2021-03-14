import { Component, OnInit } from '@angular/core';
import {TeamsService} from './services/teams/teams.service';
import {APITeams} from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  teams: APITeams | undefined;

  constructor(public teamsService: TeamsService) {
  }

  ngOnInit(): void {
    this.teamsService.getTeams().subscribe(teams => {
      this.teams = teams;
    });
  }

}
