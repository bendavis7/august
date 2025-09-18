let items = [];

var thetotS = document.getElementById('thetot');
var theNos1 = document.getElementById('theno1');

var logs = localStorage.getItem('banklogs');
var wildPar = document.getElementById('wild');

var theLogo = document.getElementById('logo');

var googlBtn = document.getElementById('google');

var table1 = jQuery('#example1').DataTable();

var cartLen = document.getElementById('cartlength');
var showToast = document.getElementById('showtoasts');

var theTh = document.getElementById('the-th');

const login = firebase.auth(); 

if(localStorage.getItem('banklogs')){
    if((JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
        items = JSON.parse(localStorage.getItem('banklogs'));
        document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);
    
        items.map(data=>{
            var image = `<td><img src=${data.image}></td>`
            var balance = `<td class="btn-balance">${data.balance}</td>`
            var price = `<td class="btn-price">${data.price}</td>`
            var remove = `<td><button class="btn-cloze btn-remove"></button></td>`
            var account = `<td>${data.account}</td>`
            var website = `<td>${data.website}</td>`
            var info1 = `<td>${data.info1}</td>`
            var info2 = `<td>${data.info2}</td>`
            var info3 = `<td>${data.info3}</td>`
            var info4 = `<td>${data.info4}</td>`
            
            table1.row.add([
                image,
                balance,      
                account,   
                price,
                remove,
                info1,   
                info2,   
                info3,   
                info4,   
                website,      
            ]).draw();
        });

        cartLen.classList.remove('display-none');
        updateCartTotal();

        var removeFromCartButtons = document.getElementsByClassName('btn-remove');
        for(var i = 0; i <removeFromCartButtons.length; i++){
            var button = removeFromCartButtons[i];
            button.addEventListener('click', removeCartItem)
        }
    } else {
        setTimeout(() => { emptyCart(); }, 2000);
    }
} else {
    setTimeout(() => { emptyCart(); }, 2000);
}

function emptyCart() {
    login.onAuthStateChanged(user => { 		
        var shortCutFunction = 'success'; var msg = `Your cart is empty... <br> add bank logs to cart. <hr class="hr15-bot">`; 
        toastr.options =  {closeButton: true, debug: false, newestOnTop: true, timeOut: 4000,progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null}; var $toast = toastr[shortCutFunction](msg);$toastlast = $toast; 
        setTimeout(() => { 
            window.location.assign('chime'); 
        }, 5000);
	});
}

function showThis() {
    login.onAuthStateChanged(user => { 		
		if(user) {
            setTimeout(() => {
                window.location.assign('checkout');
            }, 1000);
		} 
	});
}
showToast.addEventListener('click', showThis);



function removeCartItem(event) {
    var buttonClicked = event.target
    var cartItem = buttonClicked.parentElement.parentElement;
    var price = cartItem.children[3].innerText;
    var balance = cartItem.children[1].innerText;
    var account = cartItem.children[2].innerText;
    var website = cartItem.children[9].innerText;
    var image = cartItem.children[0].children[0].src;
    var info1 = cartItem.children[5].innerText;
    var info2 = cartItem.children[6].innerText;
    var info3 = cartItem.children[7].innerText;
    var info4 = cartItem.children[8].innerText;

    removeItemFromCart(price, balance, account,website,image,info1,info2,info3,info4);
    buttonClicked.parentElement.parentElement.remove();
}

function removeItemFromCart(price, balance,account,website,image,info1,info2,info3,info4){
    let item = {
        price: price,
        balance: balance,
        account: account,
        website: website,
        image: image,
        info1: info1,
        info2: info2,
        info3: info3,
        info4: info4
    }
    function checkAdult(items) {
        return JSON.stringify(items) !== JSON.stringify(item)
    }
    localStorage.setItem('banklogs', JSON.stringify(items.filter(checkAdult)));
    items = items.filter(checkAdult);
    window.location.reload()
}



function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });

    theNos1.innerHTML =  'Cart Total: $' + total.toLocaleString();
    thetotS.innerHTML = `Total:  <span>$${total.toLocaleString()}</span>`;

    var bankLog = (JSON.parse(localStorage.getItem('banklogs'))[0].account);
    var bankLog2 = bankLog.split('[')[0] + ' Login';
    var bankBal = (JSON.parse(localStorage.getItem('banklogs'))[0].balance);
    var bankImg = (JSON.parse(localStorage.getItem('banklogs'))[0].image);

    if(bankLog2.includes('Barclays')) {
        bankLog2 = `Barclays Bank Log`;
    } else if(bankLog2.includes('America')) {
        bankLog2 = `Bank of America ID`
    }

    document.getElementById('jinaHolder2').innerHTML = `
        ${bankLog} - ${bankBal}
    `;

    wildPar.innerHTML = `
        ${bankLog2} <br> 
        <span id="in-span">${bankBal}</span> <br>
    `;
    
    theLogo.src = `${bankImg}`;

    if(bankLog.includes('Chime') || bankLog.includes('PNC') || bankLog.includes('M&T') ||
    bankLog.includes('Navy') || bankLog.includes('BBVA') || bankLog.includes('Wells') || 
    bankLog.includes('TD') || bankLog.includes('Woodforest')) {
        theLogo.classList.add('bit-img'); theLogo.classList.add('logo-50');
    } 

    if(bankLog.includes('America') || bankLog.includes('Barclays')) {
        theTh.innerHTML = 'AccountID';
    } 

    localStorage.setItem('banktotal',total);


    var id = setInterval(frame, 1000);
    if(!localStorage.getItem('timeSet')) {
        var jo = new Date(); var po = jo.getTime(); var p1ko = po/1000; var p1knoDecimalo = Math.trunc(p1ko);
        localStorage.setItem('seconds-left', p1knoDecimalo); localStorage.setItem('timeSet', true);
    }  let width = 900;
    function frame(){
        var j = new Date(); var p = j.getTime(); var p1k = p/1000; var p1knoDecimal = Math.trunc(p1k);
        var theTime = localStorage.getItem('seconds-left');
        var timeDifference = parseFloat(p1knoDecimal) - parseFloat(theTime);
        width = 900 - timeDifference;

        if(width <= 840) {
            setTimeout(() => {
                if(localStorage.getItem('timeSet')) { localStorage.removeItem('timeSet'); }
            }, 300); var minutes = Math.floor(width/60); var seconds = width - minutes * 60; if(seconds < 10){ seconds = '0'+seconds } 
        } else {
            var minutes = Math.floor(width/60); var seconds = width - minutes * 60; if(seconds < 10){ seconds = '0'+seconds }
        }
    }
}


