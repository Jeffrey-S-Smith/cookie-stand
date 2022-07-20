'use strict';
let hours = ['6 a.m.', '7 a.m.',  '8a.m.', '9a.m.', '10a.m.', '11a.m.', '12p.m.', '1p.m.', '2p.m.', '3p.m', '4p.m.', '5p.m.', '6p.m.', '7p.m.'];
function Store(name,min,max,avg) {
  this.name=name;
  this.min =min;
  this.max= max;
  this.avg= avg;
  this.cookieStoreEachHour = [];
  this.currentTotal= 0;
    
  this.getRandomCustomers = function(){
  return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  };
  this.calcCookiesPerHour= function(){
    console.log(this.cookieStoreEachHour);
    for (let i = 0; i < hours.length; i++){
      let customerThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
      this.cookieStoreEachHour.push(cookiesSoldThisHour);
      this.currentTotal += cookiesSoldThisHour;
    }
  };

  this.render= function(){
  this.calcCookiesPerHour();
  let list = document.getElementById('seattle');
  
  for (let i = 0; i < this.cookieStoreEachHour.length; i++) {
    let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookieStoreEachHour[i]} cookies`;
      list.appendChild(li);
  }
  let li = document.createElement('li');
    li.textContent = `Total: ${this.currentTotal}`;
    list.appendChild(li);

   
}
 
  }
 let seattle = new Store('seatle',23,65,6.3);
 let tokyo = new Store('seatle',23,65,6.3);
 let dubai = new Store('seatle',23,65,6.3);
 let paris = new Store('seatle',23,65,6.3);
 let lima = new Store('seatle',23,65,6.3);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


/*
let tokyo = {
  name:'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
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
  },
  render: function(){
    this.calcCookiesPerHour();
    let list = document.getElementById('Tokyo');
    for (let i = 0; i < this.cookieStoreEachHour.length; i++) {
      let li = document.createElement('li');
        li.textContent = `${this.calcCookiesPerHour[i]}: ${this.cookieStoreEachHour[i]} cookies`;
        list.appendChild(li);
    }
    let li = document.createElement('li');
      li.textContent = `Total: ${this.currentTotal}`;
      list.appendChild(li);
 
  }

tokyo.calcCookiesPerHour();
tokyo.render();

let Dubai = {
  name:'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
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
    },

    render: function(){
      this.calcCookiesPerHour();
      let list = document.getElementById('dubai');
      for (let i = 0; i < this.cookieStoreEachHour.length; i++) {
        let li = document.createElement('li');
          li.textContent = `${this.calcCookiesPerHour[i]}: ${this.cookieStoreEachHour[i]} cookies`;
          list.appendChild(li);
      }
      let li = document.createElement('li');
        li.textContent = `Total: ${this.currentTotal}`;
        list.appendChild(li);
    }
   
    }
Dubai.calcCookiesPerHour();
Dubai.render();

let paris = {
  name:'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
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
   
    },
paris.calcCookiesPerHour();
paris.render();

let lima = {
  name:'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
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
  },
 
  }
lima.calcCookiesPerHour();
lima.render();
*/

