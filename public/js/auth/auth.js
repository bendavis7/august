var firebaseConfig = {
  apiKey: "AIzaSyBS4wqfuCyqRXdN_w51h0dyJRtlz-sKlAI",
  authDomain: "darkweb-fitr.firebaseapp.com",
  projectId: "darkweb-fitr",
  storageBucket: "darkweb-fitr.firebasestorage.app",
  messagingSenderId: "1015857217098",
  appId: "1:1015857217098:web:43e1ba4fc438259c7270b3",
  measurementId: "G-E1BM2B46NN"
}; 
firebase.initializeApp(firebaseConfig);

fetch('https://ipapi.co/json/').then(function(response) { return response.json()}).then(function(data) {
	localStorage.setItem('cationZ', data.country_name +  ', ' + data.city); 
});

const auth = firebase.auth(); 
const db = firebase.firestore();

var banks = window.location.href;
if(banks.includes('www')) {
	banks = banks.replace('https://www.', '');
} else if(banks.includes('http://')) {
	banks = banks.replace('http://127.0.0.1:5501/', '');
}

emailShow();

var cationZ = ', '; 
var nesh = localStorage.getItem('banklogs');

var userCred = 'Anonymous';


if(localStorage.getItem('cationZ')) {
	cationZ = localStorage.getItem('cationZ');
} 

auth.onAuthStateChanged(user => {
	if(!user) { 
		window.location.assign('index');
	} else {
		var theGuy = user.uid;
	
		if(user.email) {
			theGuy = user.email;
			userCred = `${user.displayName}`;
		} 

		var docRef = db.collection("banks").doc(theGuy);
		docRef.get().then((doc) => { 
			if(!doc.exists) {
				return docRef.set({ 
					banks: [banks], location: cationZ, userCred: userCred
				});
			}
		});
	}
});





if(window.innerWidth < 700) {
	var tHead1 = document.getElementsByClassName('t-head')[0].innerHTML;
	var tHead2 = document.getElementsByClassName('t-head')[1].innerHTML;

	document.getElementsByClassName('t-head')[0].innerHTML = `${tHead1.replace('Accounts', ' <br> Accounts')}`;
	document.getElementsByClassName('t-head')[1].innerHTML = `${tHead2.replace('Accounts', '<br> Accounts')}`;
}


function emailShow() {
	auth.onAuthStateChanged(user => { 
		$("html, body").animate({ scrollTop: 0 }, 600);
		
		var data1 = 200; 
		if(window.innerWidth < 400) { data1 = data1*1.2; }

		var interval = setInterval(function() {
			if(document.readyState === 'complete') {
				clearInterval(interval);

				setTimeout(() => {
					$("html, body").animate({ scrollTop: data1 },  2000);
				}, 1000);
			}    
		}, 100);
	});
}






document.getElementById("thebodyz").oncontextmenu = function() {
	return false
};
if(!window.location.href.includes('5502')) {
	document.addEventListener("keydown", function (event) {
		if (event.ctrlKey) {
			event.preventDefault();
		}   
	});
}


var canvas = document.getElementById("canvas"); var ctx = canvas.getContext("2d"); var radius = canvas.height / 2;
ctx.translate(radius, radius); radius = radius * 1;  setInterval(drawClock, 1000);

function drawClock() {
	drawFace(ctx, radius); 	drawNumbers(ctx, radius);	drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
	var grad;	ctx.beginPath();	ctx.arc(0, 0, radius, 0, 2 * Math.PI);	ctx.fillStyle = 'white';	ctx.fill();
	grad = ctx.createRadialGradient(0, 0, radius * 0.05, 0, 0, radius * 2.5);	
	grad.addColorStop(0, '#121d33');	grad.addColorStop(0.5, 'rgba(0,0,0,0)');	grad.addColorStop(1, '#121d33');
	ctx.strokeStyle = grad;	ctx.lineWidth = radius * 0;	ctx.stroke();	ctx.beginPath();
	ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);	ctx.fillStyle = '#121d33';	ctx.fill();
}

function drawNumbers(ctx, radius) {
	var ang;	var num;	ctx.font = radius * 0.33 + "px arial";	ctx.textBaseline = "middle";	ctx.textAlign = "center";
	for (num = 1; num < 13; num++) {
		ang = num * Math.PI / 6;	ctx.rotate(ang);	ctx.translate(0, -radius * 0.87);	ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);	ctx.rotate(ang);	ctx.translate(0, radius * 0.87);	ctx.rotate(-ang);
	}
}

function drawTime(ctx, radius) {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	hour = hour % 12;
	hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) +	(second * Math.PI / (360 * 60));
	drawHand(ctx, hour, radius * 0.5, radius * 0.07);
	minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
	drawHand(ctx, minute, radius * 0.8, radius * 0.07);
	second = (second * Math.PI / 30);
	drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0, 0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
}

