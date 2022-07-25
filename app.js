// https://calculator.swiftutors.com/dividends-per-share-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const dividendsPerShareRadio = document.getElementById('dividendsPerShareRadio');
const dividendsRadio = document.getElementById('dividendsRadio');
const numberofSharesRadio = document.getElementById('numberofSharesRadio');

let dividendsPerShare;
let dividends = v1;
let numberofShares = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

dividendsPerShareRadio.addEventListener('click', function() {
  variable1.textContent = 'Dividends';
  variable2.textContent = 'Number of Shares';
  dividends = v1;
  numberofShares = v2;
});

dividendsRadio.addEventListener('click', function() {
  variable1.textContent = 'Dividends Per Share ($)';
  variable2.textContent = 'Number of Shares';
  dividendsPerShare = v1;
  numberofShares = v2;
});

numberofSharesRadio.addEventListener('click', function() {
  variable1.textContent = 'Dividends Per Share ($)';
  variable2.textContent = 'Dividends';
  dividendsPerShare = v1;
  dividends = v2;
});

btn.addEventListener('click', function() {
  
  if(dividendsPerShareRadio.checked)
    result.textContent = `Dividends Per Share = ${computeDividendsPerShare().toFixed(2)}$`;

  else if(dividendsRadio.checked)
    result.textContent = `Dividends = ${computeDividends().toFixed(2)}`;

  else if(numberofSharesRadio.checked)
    result.textContent = `Number of Shares = ${computeNumberofShares().toFixed(2)}`;
})

// calculation

function computeDividendsPerShare() {
  return Number(dividends.value) / Number(numberofShares.value);
}

function computeDividends() {
  return Number(dividendsPerShare.value) * Number(numberofShares.value);
}

function computeNumberofShares() {
  return Number(dividends.value) / Number(dividendsPerShare.value);
}