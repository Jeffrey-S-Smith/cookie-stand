'use strict';
let hours = ['6 a.m.', '7 a.m.',  '8a.m.', '9a.m.', '10a.m.', '11a.m.', '12p.m.', '1p.m.', '2p.m.', '3p.m', '4p.m.', '5p.m.', '6p.m.', '7p.m.'];
let seattle = {
  name:'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookieStoreEachHour: [],
  currentTotal: 0,
    
  getRandomCustomers: function(){
  return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  calcCookiesPerHour: function(){
    console.log(this.cookieStoreEachHour);
    for (let i = 0; i < hours.length; i++){
      let customerThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
      this.cookieStoreEachHour.push(cookiesSoldThisHour);
      this.currentTotal += cookiesSoldThisHour;
    }
  },

  render: function(){
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
 
seattle.render();

let tokyo = {
  name:'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookieStoreEachHour: [],
  currentTotal: 0,
    
  getRandomCustomers: function(){
  return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  calcCookiesPerHour: function(){
    console.log(this.cookieStoreEachHour);
    for (let i = 0; i < hours.length; i++){
      let customerThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
      this.cookieStoreEachHour.push(cookiesSoldThisHour);
      this.currentTotal += cookiesSoldThisHour;
    }
  },

  render: function(){
  this.calcCookiesPerHour();
  let list = document.getElementById('tokyo');
  
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
 
  tokyo.render();



  let dubai = {
    name:'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    cookieStoreEachHour: [],
    currentTotal: 0,
      
    getRandomCustomers: function(){
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
    },
    calcCookiesPerHour: function(){
      console.log(this.cookieStoreEachHour);
      for (let i = 0; i < hours.length; i++){
        let customerThisHour = this.getRandomCustomers();
        let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
        this.cookieStoreEachHour.push(cookiesSoldThisHour);
        this.currentTotal += cookiesSoldThisHour;
      }
    },
  
    render: function(){
    this.calcCookiesPerHour();
    let list = document.getElementById('dubai');
    
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
   
    dubai.render();
  

    let paris = {
      name:'Paris',
      min: 20,
      max: 38,
      avg: 2.3,
      cookieStoreEachHour: [],
      currentTotal: 0,
        
      getRandomCustomers: function(){
      return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
      },
      calcCookiesPerHour: function(){
        console.log(this.cookieStoreEachHour);
        for (let i = 0; i < hours.length; i++){
          let customerThisHour = this.getRandomCustomers();
          let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
          this.cookieStoreEachHour.push(cookiesSoldThisHour);
          this.currentTotal += cookiesSoldThisHour;
        }
      },
    
      render: function(){
      this.calcCookiesPerHour();
      let list = document.getElementById('paris');
      
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
     
      paris.render();


      let lima = {
        name:'Lima',
        min: 2,
        max: 16,
        avg: 4.6,
        cookieStoreEachHour: [],
        currentTotal: 0,
          
        getRandomCustomers: function(){
        return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
        },
        calcCookiesPerHour: function(){
          console.log(this.cookieStoreEachHour);
          for (let i = 0; i < hours.length; i++){
            let customerThisHour = this.getRandomCustomers();
            let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
            this.cookieStoreEachHour.push(cookiesSoldThisHour);
            this.currentTotal += cookiesSoldThisHour;
          }
        },
      
        render: function(){
        this.calcCookiesPerHour();
        let list = document.getElementById('lima');
        
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
       
        lima.render();




