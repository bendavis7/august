let items = [];

var logs = localStorage.getItem('banklogs');
var theLogo = document.getElementById('logo');

var table1 = jQuery('#example1').DataTable();
var cartLen = document.getElementById('cartlength');

var theTh = document.getElementById('th-id');
var thetotS = document.getElementById('thetot');

var jinaHolders2 = document.getElementById('jinaHolder2');

const vpnButn = document.getElementById('vpn');
const vpnButn1 = document.getElementById('vpn1');

const login = firebase.auth(); 

if(localStorage.getItem('banklogs')){
    if((JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
        items = JSON.parse(localStorage.getItem('banklogs'));
        document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);


        for(var i = 0; i < items.length; i++) {
            if((items[i].account).includes('CHECKING') || (items[i].account).includes('SPENDING') || (items[i].account).includes('CHEQUING') || (items[i].account).includes('CURRENT')){
                var cartRow3 = document.createElement('div');
                cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-4', 'col-6');
                var balance2 = items[i].balance;
                var price2 = items[i].price;
                var balance3 = balance2.replace('Balance: ', '');
                var price3 = price2.replace('Price: ', 'Cart: ');
                var cartItems3 = document.getElementsByClassName('xenon4')[0];
                var cartRowContents3 = `
                    <div class="pricing-list highlight" id="the-logs">
                        <div class="pricing-list-price">
                            <h2 class="text-white">${balance3}</h2>
                            <img src=${items[i].image} class="borderp">
                        </div>
                        <ul>
                            <li class="text-white">${items[i].website} </li>
                            <li class="text-white">${items[i].info1} </li>
                            <li class="text-white">${items[i].info2} </li>
                            <li class="text-white">${items[i].info3} </li>
                            <li class="text-white">${items[i].info4} </li>
                            <li class="text-white">${(items[i].account).replace('[','<br>[').replace(']',' ACCOUNT]')}</li>
                            <button type="submit" class="butn white" id="modem" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                ${price3} <i class="fas fa-angle-down"></i>
                            </button>
                        </ul>
                    </div>
                `;
                cartRow3.innerHTML = cartRowContents3;
                cartItems3.prepend(cartRow3);
            } else {
                var cartRow3 = document.createElement('div');
                cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-4', 'col-6');
                var balance2 = items[i].balance;
                var price2 = items[i].price;
                var balance3 = balance2.replace('Balance: ', '');
                var price3 = price2.replace('Price: ', 'Cart: ');
                var cartItems3 = document.getElementsByClassName('xenon4')[0];
                var cartRowContents3 = `
                    <div class="pricing-list" id="the-logs">
                        <div class="pricing-list-price">
                            <h2>${balance3}</h2>
                            <img src=${items[i].image} class="borderp">
                        </div>
                        <ul>
                            <li>${items[i].website} </li>
                            <li>${items[i].info1} </li>
                            <li>${items[i].info2} </li>
                            <li>${items[i].info3} </li>
                            <li>${items[i].info4} </li>
                            <li>${(items[i].account).replace('[','<br>[').replace(']',' ACCOUNT]')}</li>
                            <button type="submit" class="butn" id="modem" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                ${price3} <i class="fas fa-angle-down"></i>
                            </button>
                        </ul>
                    </div>
                `;
                cartRow3.innerHTML = cartRowContents3;
                cartItems3.prepend(cartRow3);
            }    
        }

        for(var i = 0; i < items.length; i++) {
            var cartRow = document.createElement('tr');
            var cartRow2 = document.createElement('li');
            cartRow.classList.add('table-warning');
            cartRow2.classList.add('total','bg-black');
            var cartItems =  document.getElementsByClassName('champez3')[0];
    
            var cartRowContents = `
                <td><img src=${items[i].image}></td>       
                <td>
                    WAIT
                    <i class="fas fa-spin fa-sync-alt spinner-bordez"></i>
                    <hr id="hr-pend">
                    <span>${(items[i].balance).replace('Balance: ','')}</span> 
                </td>
                <td>${items[i].account}</td>
                <td id=${'table-id' + items.indexOf(items[i])} style="filter: blur(0px); white-space: normal !important;"></td>  
                <td>${(items[i].price).replace('Price: ', '')}</td>
                <td>${items[i].info1}</td>
                <td>${items[i].info2}</td>
                <td>${items[i].info3}</td>
                <td>${items[i].info4}</td>
                <td>${items[i].website}</td>
            `;
            cartRow.innerHTML = cartRowContents;
            cartItems.prepend(cartRow);
        }


        updateCartTotal();

        var modems = document.getElementById('modem');
        var theLogs = document.getElementById('the-logs');


        thetotS.addEventListener('click', ()=> { modems.click(); });
        theLogs.addEventListener('click', ()=> { modems.click(); });

        vpnButn.addEventListener('click', ()=> { modems.click(); });
        vpnButn1.addEventListener('click', ()=> { modems.click(); });
    } else {
        cartLen.style.display = 'none'; 
        emptyCart();
    }
} else {
    cartLen.style.display = 'none'; 
    emptyCart();
}

function emptyCart() {
    login.onAuthStateChanged(user => { 		
        var shortCutFunction = 'success'; var msg = `Your cart is empty... <br> add bank logs to cart. <hr class="hr15-bot">`; 
        toastr.options =  {closeButton: true, debug: false, newestOnTop: true, timeOut: 4000,progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null}; var $toast = toastr[shortCutFunction](msg);$toastlast = $toast; 
        setTimeout(() => { 
            window.location.assign('home'); 
        }, 5000);
	});
}




document.getElementById('balance1').innerHTML = '$7,540';
document.getElementById('balance2').innerHTML = '$7,320';
document.getElementById('balance3').innerHTML = '$7,405';
document.getElementById('balance4').innerHTML = '$7,523';
document.getElementById('balance5').innerHTML = '$7,702';
document.getElementById('balance6').innerHTML = '$7,340';
document.getElementById('balance7').innerHTML = '$7,087';
document.getElementById('balance8').innerHTML = '$7,259';
document.getElementById('balance9').innerHTML = '$7,820';

document.getElementById('balance10').innerHTML = '$7,805';
document.getElementById('balance11').innerHTML = '$7,214';
document.getElementById('balance12').innerHTML = '$7,390';
document.getElementById('balance13').innerHTML = '$7,832';
document.getElementById('balance14').innerHTML = '$7,439';
document.getElementById('balance15').innerHTML = '$7,228';
document.getElementById('balance16').innerHTML = '$7,910';
document.getElementById('balance17').innerHTML = '$7,104';
document.getElementById('balance18').innerHTML = '$7,724';
document.getElementById('balance19').innerHTML = '$7,863';
document.getElementById('balance20').innerHTML = '$7,270';
document.getElementById('balance21').innerHTML = '$7,309';
document.getElementById('balance22').innerHTML = '$7,183';

var jobs = document.getElementsByClassName('prized');
for(j=0; j< jobs.length; j++) {
    var theJob = jobs[j];
    var thePrize = theJob.parentElement.children[1].children[2].innerText;
    
    var thePr = parseFloat((thePrize.replace("$", "").replace(",", "") / 47).toFixed(0)).toLocaleString();
    theJob.innerHTML = '$'+ thePr;
}


function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });

    var modalAmount = document.getElementById('modal-amount');
    thetotS.innerHTML = `Total:  <span>$${total.toLocaleString()}</span>`;

    const bankLog = (JSON.parse(localStorage.getItem('banklogs'))[0].account);
    const bankBal = (JSON.parse(localStorage.getItem('banklogs'))[0].balance);
    const bankImg = (JSON.parse(localStorage.getItem('banklogs'))[0].image);

    jinaHolders2.innerHTML = `
        ${bankLog} - ${bankBal}
    `;
    
    theLogo.src = `${bankImg}`;

    if(bankLog.includes('Chime') || bankLog.includes('PNC') ||
       bankLog.includes('Navy') || bankLog.includes('BBVA') || bankLog.includes('Wells')) {
        theLogo.classList.add('bit-img'); theLogo.classList.add('logo-50');
    } 
    
    if(bankLog.includes('TD') || bankLog.includes('Woodforest') || bankLog.includes('M&T')) {
        theLogo.classList.add('bit-img'); theLogo.classList.add('logo-90');
    } 

    if(bankLog.includes('Truist')) {
        theLogo.setAttribute('src', 'img/carousel/truist.jpg');
        theLogo.classList.add('logo-90'); 
    }

    if(bankLog.includes('America') || bankLog.includes('Barclays')) {
        theTh.innerHTML = 'AccountID';
    } 

    if(bankLog.includes('America')) {
        document.getElementById('bank-carousel').classList.remove('display-none');
    } else if(bankLog.includes('Chime')) {
        document.getElementById('chime-carousel').classList.remove('display-none');
    } else if(bankLog.includes('Barclays') 
        || bankLog.includes('M&T') 
        || bankLog.includes('PNC')) {
        document.getElementById('coin-carousel').classList.remove('display-none');
    } else if(bankLog.includes('BBVA') 
        || bankLog.includes('Chase') 
        || bankLog.includes('Scotia') 
        || bankLog.includes('TD') 
        || bankLog.includes('Truist')) {
        document.getElementById('ach-carousel').classList.remove('display-none');
    } else if(bankLog.includes('Citi')) {
        document.getElementById('wire-carousel').classList.remove('display-none');
    } else if(bankLog.includes('Huntington')) {
        document.getElementById('hunt-carousel').classList.remove('display-none');
    } else if(bankLog.includes('Navy')) {
        document.getElementById('navy-carousel').classList.remove('display-none');
    } else if(bankLog.includes('Wells')) {
        document.getElementById('wells-carousel').classList.remove('display-none');
    } else if(bankLog.includes('Woodforest')) {
        document.getElementById('wood-carousel').classList.remove('display-none');
    } else if(bankLog.includes('RBC')) {
        document.getElementById('paypal-carousel').classList.remove('display-none');
    }


    modalAmount.innerHTML = `
        Total:  $<span id="omanyala" class="countup"> 
        ${parseInt(total).toLocaleString()}</span>
    `;


    if((JSON.parse(localStorage.getItem('banklogs')).length) > 1) {
        document.getElementsByClassName('modal-header')[1].classList.add('display-none');
        document.getElementById('chart-div').classList.add('sm-display-none');
        document.getElementById('flex-one').classList.add('sm-display-none');
    }

    localStorage.setItem('banktotal',total);
}



var elemj = document.getElementById('pablos');        
var id = setInterval(frame, 1000);

if(!localStorage.getItem('timeSet')) {
    var jo = new Date();
    var po = jo.getTime();
    var p1ko = po/1000;
    var p1knoDecimalo = Math.trunc(p1ko);
    localStorage.setItem('seconds-left', p1knoDecimalo);
    localStorage.setItem('timeSet', true);
}
let width = 900;

function frame(){
    var j = new Date();
    var p = j.getTime();
    var p1k = p/1000;
    var p1knoDecimal = Math.trunc(p1k);
    var theTime = localStorage.getItem('seconds-left');
    var timeDifference = parseFloat(p1knoDecimal) - parseFloat(theTime);
    width = 900 - timeDifference;

    if(width <= 10) {
        window.location.assign('invoice');
    } else if(width < 300) {
        elemj.classList.add("bg-danger");
        var minutes = Math.floor(width/60); var seconds = width - minutes * 60;
        if(seconds < 10){ seconds = '0'+seconds } elemj.style.width = (width/9) + "%";
        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}  <i class="fas fa-spin fa-sync-alt spinner-bordez"></i> `;
    } else if(width < 600) {
        elemj.classList.add("bg-warning");
        var minutes = Math.floor(width/60); var seconds = width - minutes * 60;
        if(seconds < 10){ seconds = '0'+seconds } elemj.style.width = (width/9) + "%";
        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}  <i class="fas fa-spin fa-sync-alt spinner-bordez"></i> `;
    } else {
        var minutes = Math.floor(width/60); var seconds = width - minutes * 60;
        if(seconds < 10){ seconds = '0'+seconds } elemj.style.width = (width/9) + "%";
        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}  <i class="fas fa-spin fa-sync-alt spinner-bordez"></i> `;
    }
}