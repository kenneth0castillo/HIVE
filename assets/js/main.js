// const auth = firebase.auth();

// auth.signInWithEmailAndPassword(email,pass);
// auth.createUserWithEmailAndPassword(email,pass);
// auth.onAuthStateChanged(firebaseUser => {});

(function(){
      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwgv_S_nW_5CHyiVsOLA2ZFRlQ7DBzZBA",
    authDomain: "classroom-fa8c4.firebaseapp.com",
    databaseURL: "https://classroom-fa8c4.firebaseio.com",
    projectId: "classroom-fa8c4",
    storageBucket: "classroom-fa8c4.appspot.com",
    messagingSenderId: "254846611990"
  };
  firebase.initializeApp(config);

  const txtemail = document.getElementById('txtEmail');
  const txtpassword = document.getElementById('txtPassword');
  const btnlogin = document.getElementById('btnlogin');
  const btnsignup = document.getElementById('btnsignup');
  const btnlogout = document.getElementById('gtnlogout');

  btnlogin.addEventListener('click' ,e =>{
    const email = txtemail.value;
    const pass = txtpassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
  });
  btnsignup.addEventListener('click' ,e =>{
    const email = txtemail.value;
    const pass = txtpassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
  });
//   btnlogout.addEventListener('click', e =>{
//       firebase.auth().signout();
//   })

  firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
        console.log(firebaseUser);
        // window.location.href = "main.html"
    }else{
        console.log('not logged in');
    }
  });

}());

const hexNav = document.getElementById('hexNav');

document.getElementById('menuBtn').onclick = function() {
    var className = ' ' + hexNav.className + ' ';
    if ( ~className.indexOf(' active ') ) {
        hexNav.className = className.replace(' active ', ' ');
    } else {
        hexNav.className += ' active';
    }              
}

