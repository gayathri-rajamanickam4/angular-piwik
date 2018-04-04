import { Angulartics2Piwik } from 'angulartics2/piwik';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private angulartics2Piwik: Angulartics2Piwik){
    
  }
}
