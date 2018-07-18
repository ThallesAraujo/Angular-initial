import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lorem',
  templateUrl: './lorem.component.html',
  styleUrls: ['./lorem.component.css']
})
export class LoremComponent implements OnInit {

  ipsum = 'Lorem ipsum cursus vivamus auctor praesent id lorem nisi adipiscing arcu, porttitor nisl etiam taciti in lacus habitant tempus ullamcorper nam, mattis vestibulum condimentum mi fringilla ante nulla mollis placerat. morbi netus etiam massa luctus rhoncus euismod nam nostra nibh';

  constructor() { }

  ngOnInit() {
  }

}
