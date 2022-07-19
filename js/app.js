'use strict';
let seattle = {
  name:'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookieStoreEachHour: [],
  getRandomCustomers: function(){
  return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  calcCookiesPerHour: function(){
    console.log(this.cookieStoreEachHour);
    for (let i = 0; i < 14; i++){
      let customerThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
      this.cookieStoreEachHour.push(cookiesSoldThisHour);
   
    }
  }
 
  }
 
seattle.calcCookiesPerHour();

render: function(){
  this.calcCookiesPerHour();
  let list = document.getElementById('seattle');
  for (let i=0; i < cookieStoreEachHour.length; i++) {
    let li = document.createElement('li');
      li.textContent = `${cookieStoreEachHour[i]}: ${this.calcCookiesPerHour[i]}`;
      list.appendChild(li);
  }
  let li = document.createElement('li');
    li.textContent = `Total: ${this.currentTotal}`;
    list.appendChild(li);
}

/*
let tokyo = {
  name:'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  
  getRandomCustomers: function(){
  return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  calcCookiesPerHour: function(){
    let customerThisHour = this.getRandomCustomers();
    let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
    console.log(cookiesSoldThisHour);
  }
}
tokyo.calcCookiesPerHour();


let Dubai = {
  name:'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
  
  getRandomCustomers: function(){
  return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  calcCookiesPerHour: function(){
    let customerThisHour = this.getRandomCustomers();
    let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
    console.log(cookiesSoldThisHour);
  }
}
Dubai.calcCookiesPerHour();

let paris = {
  name:'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
  
  getRandomCustomers: function(){
  return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  calcCookiesPerHour: function(){
    let customerThisHour = this.getRandomCustomers();
    let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
    console.log(cookiesSoldThisHour);
  }
}
paris.calcCookiesPerHour();

let lima = {
  name:'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  
  getRandomCustomers: function(){
  return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  calcCookiesPerHour: function(){
    let customerThisHour = this.getRandomCustomers();
    let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
    console.log(cookiesSoldThisHour);
  }
}
lima.calcCookiesPerHour();*/




