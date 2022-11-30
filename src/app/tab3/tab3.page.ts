import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Import Add (before/after import please installation axios from cmd)
import axios from 'axios';

@Component({
  selector: 'app-tabx3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // Variabel GetData for array
  public allData:any = [];
  constructor() {
        // Form Load GetData
        this.GetData();
  }
  // Function GetData from API ---------------------------------------------------------------------------
  async GetData(){
    const res:any = await axios.get('http://localhost/api/get_datatab3.php');
 
    console.log(res.data);
    this.allData = res.data.result;
  }
  // Function getData ---------------------------------------------------------------------------
}