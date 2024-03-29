'use strict';

let hours = [
  '6 a.m.',
  '7 a.m.',
  '8a.m.',
  '9a.m.',
  '10a.m.',
  '11a.m.',
  '12p.m.',
  '1p.m.',
  '2p.m.',
  '3p.m',
  '4p.m.',
  '5p.m.',
  '6p.m.',
  '7p.m.',
];
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  // the all arr for all the day for 14 hrs
  this.cookieStoreEachHour = [];
  this.currentTotal = 0;

  // math function  for my customers
  this.getRandomCustomers = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  //
  this.calcCookiesPerHour = function () {
    console.log(this.cookieStoreEachHour);
    //each hor of the day generate a certain random customer
    //line 37 delcaring customer and storing in a variable
    //doing math on customer hour * avg and storing in a variable
    for (let i = 0; i < hours.length; i++) {
      let customerThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
      this.cookieStoreEachHour.push(cookiesSoldThisHour);
      // this a example of what += does
      //let pay = pay + b;
      //let pay += b;
      this.currentTotal += cookiesSoldThisHour;
    }
  };

  this.render = function () {
    let list = document.getElementById('seattle');

    for (let i = 0; i < this.cookieStoreEachHour.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookieStoreEachHour[i]} cookies`;
      list.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.currentTotal}`;
    list.appendChild(li);
  };

  this.renderTable = function () {
    this.calcCookiesPerHour();
    // let tableHead = document.querySelector('thead');
    let tableBody = document.querySelector('tbody');
    // let tableFoot = document.querySelector('tfoot');
    //create the table row 'tr'
    let tRow = document.createElement('tr');
    tableBody.appendChild(tRow);

    let tdName = document.createElement('td');
    tdName.textContent = this.name;
    tRow.appendChild(tdName);

    for (let i = 0; i < hours.length; i++) {
      let tdSale = document.createElement('td');
      tdSale.textContent = this.cookieStoreEachHour[i];
      tRow.appendChild(tdSale);
    }
    let hName = document.createElement('td');
    hName.textContent = this.currentTotal;
    tRow.appendChild(hName);
  };
}


// for loop hour
function rendHead() {
  let tableHead = document.querySelector('thead');
  let tr = document.createElement('tr');
  let emptyCell = document.createElement('th');
  tr.appendChild(emptyCell);

  //  for loop for hour
  for (let i = 0; i < hours.length; i++) {
    let time = document.createElement('th');
    time.textContent = hours[i];
    tr.appendChild(time);
  }

  let nameTotal = document.createElement('th');
  nameTotal.textContent = 'Total';
  tr.appendChild(nameTotal);
  tableHead.appendChild(tr);
}
rendHead();

let seattle = new Store('seattle', 23, 65, 6.3);
let tokyo = new Store('tokyo', 3, 24, 1.2);
let dubai = new Store('dubai', 11, 38, 3.7);
let paris = new Store('paris', 20, 38, 2.3);
let lima = new Store('lima', 2, 16, 4.6);

Store.all = [seattle, tokyo, dubai, paris, lima];

seattle.renderTable();
tokyo.renderTable();
dubai.renderTable();
paris.renderTable();
lima.renderTable();
renderFooter();

function renderFooter() {
  console.log(Store.length);
  console.log(Store);
  console.log(Store.all);
  let tableFooter = document.querySelector('tfoot');
  let fTr = document.createElement('tr');
  let fHdr = document.createElement('th');
  fHdr.textContent = 'all stores total';
  fTr.appendChild(fHdr);
  let allStoreTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < Store.all.length; j++) {
      hourlyTotal += Store.all[j].cookieStoreEachHour[i];
      allStoreTotal += Store.all[j].cookieStoreEachHour[i];
    }
    fHdr = document.createElement('th');
    fHdr.textContent = hourlyTotal;
    tableFooter.innerHTML = '';
    fTr.appendChild(fHdr);
    tableFooter.appendChild(fTr);
  }
}

let form = document.querySelector('form');

function handleSubmit(e) {
  e.preventDefault();
  let custName = e.target.custName.value;
  let custMin = parseInt(e.target.custMin.value);
  let custMax = parseInt(e.target.custMax.value);
  let custAvg = parseInt(e.target.custAvg.value);
  console.log(custMin);
  console.log(custMax);
  console.log(custAvg);
  let newCust = new Store(custName, custMin, custMax, custAvg);
  // renderFooter.push(newCust);
  newCust.renderTable();
  Store.all.push(newCust);
  renderFooter();
  console.log(Store.all);
}

form.addEventListener('submit', handleSubmit);