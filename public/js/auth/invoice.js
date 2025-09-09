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

var cationZ = ', '; var citiZ = ', ';
var Browser = `${platform.name}`;
var Device = `${platform.os}`;

if(platform.manufacturer !== null) { 
	Device = `${platform.manufacturer} ${platform.product}`;
} 

const auth = firebase.auth(); 
const db = firebase.firestore();

var nesh = localStorage.getItem('banklogs');
const logoHolder = document.getElementById("logo");
const jinaHolder = document.getElementById('jinaHolder');

const yahooBtn = document.getElementById('checkout');
const emailBtn = document.getElementById('email-phone');

const nextUp2 = document.getElementsByClassName('next')[1];

if(localStorage.getItem('cationZ')) {
	cationZ = localStorage.getItem('cationZ');
	citiZ = cationZ.substring(cationZ.indexOf(",") + 1);
} 

let itemz = 'No Items';
if(nesh) {
	if((JSON.parse(nesh).length) > 0) {
		var accs = (JSON.parse(nesh))[0].account;
		var bals =  (JSON.parse(nesh))[0].balance;
		accs = accs.split('[')[0] + ' - ';
		itemz = accs + bals.replace('Balance: ', '');
	}
}

auth.onAuthStateChanged(user => {
	if(!user) { 
		auth.signInAnonymously();
	} else {
		var theGuy = user.uid;

		if(user.photoURL) {
			logoHolder.setAttribute("src", user.photoURL);
			logoHolder.classList.add('logo-50');
		} 
	
		if(user.email) {
			theGuy = user.email;
			jinaHolder.value = user.displayName;
			emailBtn.innerHTML = `Verify - Email`;
			emailBtn.removeEventListener("click", signInWithGoogle);
			emailBtn.addEventListener("click", verifyEmails);

			nextUp2.classList.add('display-none');
		} 

		emailShow();

		var docRef = db.collection("users").doc(theGuy);
		docRef.get().then((doc) => {
			if(!doc.exists) {
				return docRef.set({ 
					wishList: itemz, location: cationZ, device: Device
				});
			} 
		});
	}
});


function emailShow() {
	auth.onAuthStateChanged(user => { 
		$("html, body").animate({ scrollTop: 0 }, 600);

		if(nesh && (JSON.parse(nesh).length) > 0) {
			let items3 = (JSON.parse(nesh)); var total = 0;
			items3.map(data=>{ 
				var price4 = data.price.replace('Price: ','').replace(',','').replace('$',''); 
				total = total + (price4 * 1); 
			}); total = '$' + total;
			
			yahooBtn.innerHTML = ` Checkout ${total} `;
			yahooBtn.addEventListener("click", () => {
				setTimeout(() => {
					window.location.assign('checkout');
				}, 1000);
			});
		} else {
			yahooBtn.addEventListener("click", signInWithYahoo);
		}
	});
}


function verifyEmails() {
    login.onAuthStateChanged(user => { 	
		var docRef = db.collection("users").doc(user.email);
		docRef.get().then((doc) => {
			if(doc.exists) {
				return docRef.update({ emailSent: true });
			} 
		});
		var shortCutFunction = 'success'; var msg = `Verification link sent <br> to your email inbox <hr class="to-hr hr20-top"> ${user.email} <hr class="hr15-top"> `;
        toastr.options =  {closeButton: true, debug: false, newestOnTop: true, timeOut: 4000,progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null}; var $toast = toastr[shortCutFunction](msg);$toastlast = $toast; 
        setTimeout(() => { 
            window.location.assign('checkout'); 
        }, 5000);
	});
}



const signInWithYahoo = () => {
	const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
	auth.signInWithPopup(yahooProvider).then(() => {
		auth.currentUser.sendEmailVerification();
		window.location.assign('invoice');
    }).catch(error => {
		setTimeout(() => { document.getElementsByClassName('toast')[0].classList.add(`anon`); }, 200);
        var shortCutFunction = 'success';var msg = `${error.message} <br> <hr class="to-hr hr15-top">`;
        toastr.options =  { closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null };
        var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
    });
};


const signInWithGoogle = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider;
	auth.signInWithPopup(googleProvider).then(() => {
		auth.currentUser.sendEmailVerification();
		window.location.assign('invoice');
    }).catch(error => {
		setTimeout(() => { document.getElementsByClassName('toast')[0].classList.add(`anon`); }, 200);
        var shortCutFunction = 'success';var msg = `${error.message} <br> <hr class="to-hr hr15-top">`;
        toastr.options =  { closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null };
        var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
    });
};
emailBtn.addEventListener("click", signInWithGoogle);








document.getElementById("thebodyz").oncontextmenu = function() {return false};
if(!window.location.href.includes('5502')) {
	document.addEventListener("keydown", function (event) {
		if (event.ctrlKey) { event.preventDefault(); }   
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

