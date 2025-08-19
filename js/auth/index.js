var firebaseConfig = {
  apiKey: "AIzaSyC3b0-UMQDDwRVfUFCcN4CCaVQ8Iu_Zrxk",
  authDomain: "darkweb-fir.firebaseapp.com",
  projectId: "darkweb-fir",
  storageBucket: "darkweb-fir.firebasestorage.app",
  messagingSenderId: "267677782837",
  appId: "1:267677782837:web:45210243b3c4042f9f327c",
  measurementId: "G-W1BFNV2S3R"
}; 
// var firebaseConfig = {
//   apiKey: "AIzaSyBS4wqfuCyqRXdN_w51h0dyJRtlz-sKlAI",
//   authDomain: "darkweb-fitr.firebaseapp.com",
//   projectId: "darkweb-fitr",
//   storageBucket: "darkweb-fitr.firebasestorage.app",
//   messagingSenderId: "1015857217098",
//   appId: "1:1015857217098:web:43e1ba4fc438259c7270b3",
//   measurementId: "G-E1BM2B46NN"
// }; 
firebase.initializeApp(firebaseConfig);

if(!localStorage.getItem('banklogs')) {
	localStorage.setItem('banklogs',[]);
} 


const signAnony = document.getElementById('signAnony');
const signYahoo = document.getElementById('signYahoo');

const signEmail = document.getElementById('signEmail');
const signGoogle = document.getElementById('signGoogle');


const auth = firebase.auth();

auth.onAuthStateChanged(user => {
	if(user) {
		if(user.email) {
			window.location.assign('home');
		}
	}
});


const signInAnony = () => {
	auth.signInAnonymously().then(() => {
		window.location.assign('home');
    }).catch(error => {
		setTimeout(() => { document.getElementsByClassName('toast')[0].classList.add(`anon`); }, 200);
        var shortCutFunction = 'success';var msg = `${error.message} <br> <hr class="to-hr hr15-top">`;
        toastr.options =  { closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null };
        var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
    });
};
signAnony.addEventListener("click", signInAnony);




const signInWithYahoo = () => {
	const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
	auth.signInWithPopup(yahooProvider).then(() => {
		auth.currentUser.sendEmailVerification();
		window.location.assign('home');
    }).catch(error => {
		setTimeout(() => { document.getElementsByClassName('toast')[0].classList.add(`anon`); }, 200);
        var shortCutFunction = 'success';var msg = `${error.message} <br> <hr class="to-hr hr15-top">`;
        toastr.options =  { closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null };
        var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
    });
};
signYahoo.addEventListener('click', signInWithYahoo);

const signInWithGoogle = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider;
	auth.signInWithPopup(googleProvider).then(() => {
		auth.currentUser.sendEmailVerification();
		window.location.assign('home');
    }).catch(error => {
		setTimeout(() => { document.getElementsByClassName('toast')[0].classList.add(`anon`); }, 200);
        var shortCutFunction = 'success';var msg = `${error.message} <br> <hr class="to-hr hr15-top">`;
        toastr.options =  { closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null };
        var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
    });
};
signGoogle.addEventListener("click", signInWithGoogle);
signEmail.addEventListener("click", signInWithGoogle);





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



if(!window.location.href.includes('5502')) {
	function disableCtrlKeyCombination(e){
		var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'i', 'v', 'j' , 'w', 'i');
		var key; var isCtrl;
		if(window.event){
			key = window.event.keyCode;
			if(window.event.ctrlKey) { isCtrl = true; } 
			else { isCtrl = false; }
		} else {
			key = e.which; 
			if(e.ctrlKey) { isCtrl = true; }
			else { isCtrl = false; }
		}

		if(isCtrl) {
			for(i=0; i<forbiddenKeys.length; i++) {
				if(forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
					alert('Key combination CTRL + '+String.fromCharCode(key) +' has been disabled.');
					return false;
				}
			}
		} return true;
	}
}