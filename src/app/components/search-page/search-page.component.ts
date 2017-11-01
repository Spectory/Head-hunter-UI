import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataSource } from '@angular/cdk/collections';
import { MatTableModule } from '@angular/material';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  test: any
  search_text: any
  candidate_data: any

  constructor(private dataService: DataService) {
    
  }

  ngOnInit() {
    
  }

  getCandidate = (search_data: any) => {
    this.dataService.getCandidate({search: search_data}, (result_data) => this.onSuccessGetCandidate(result_data));
  }

  onSuccessGetCandidate = (result_data: any) => {
    console.log('result_data ? ', result_data);
    this.candidate_data = result_data;
  }

  searchCandidate =  () => {
    console.log('this.search_text = ', this.search_text);
    let params = {search_text: this.search_text};
    this.getCandidate(params);
  }

}
