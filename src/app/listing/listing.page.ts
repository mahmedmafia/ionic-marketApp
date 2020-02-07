import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  items=[
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'},
    {
      name:'fish',
      category:'2'
    },
    {name:'meat',category:'1'}
  ]
  constructor() { }

  ngOnInit() {
  }
  filtered=this.items.filter(item=> item.category == '1');
segmentChanged(e){
  console.log(e.target.value);
  this.filtered=this.items.filter(item=> item.category == e.target.value);
}

}
