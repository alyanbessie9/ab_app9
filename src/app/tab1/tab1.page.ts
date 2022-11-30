import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Import Add (before/after import please installation axios from cmd)
import axios from 'axios';

@Component({
  selector: 'app-tabx1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // Variabel GetData for array
  public allData:any = [];
  constructor() {
        // Form Load GetData
        this.GetData();
  }
  // Function GetData from API ---------------------------------------------------------------------------
  async GetData(){
    const res:any = await axios.get('http://localhost/api/get_datatab1.php');
 
    console.log(res.data);
    this.allData = res.data.result;
  }
  // Function getData ---------------------------------------------------------------------------
}