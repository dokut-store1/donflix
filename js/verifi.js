const firebaseConfig={apiKey:"AIzaSyBI_6e7KQs4NBJ9ZaLe1FaPxV3xcYE8t3g",authDomain:"donflix-a85da.firebaseapp.com",databaseURL:"https://donflix-a85da-default-rtdb.firebaseio.com",projectId:"donflix-a85da",storageBucket:"donflix-a85da.firebasestorage.app",messagingSenderId:"236646922585",appId:"1:236646922585:web:d5a6778879dfb58eb03448"};firebase.initializeApp(firebaseConfig);const auth=firebase.auth();const loginButton=document.getElementById('login-button');const registerButton=document.getElementById('register-button');const logoutButton=document.getElementById('logout-button');const mobileLoginButton=document.getElementById('mobile-login-button');const mobileRegisterButton=document.getElementById('mobile-register-button');const mobileLogoutButton=document.getElementById('mobile-logout-button');auth.onAuthStateChanged((user)=>{if(user){loginButton.style.display='none';registerButton.style.display='none';logoutButton.style.display='block';mobileLoginButton.style.display='none';mobileRegisterButton.style.display='none';mobileLogoutButton.style.display='block'}else{loginButton.style.display='block';registerButton.style.display='block';logoutButton.style.display='none';mobileLoginButton.style.display='block';mobileRegisterButton.style.display='block';mobileLogoutButton.style.display='none'}});logoutButton.addEventListener('click',async()=>{try{await auth.signOut();alert('You have been logged out!')}catch(error){alert(error.message)}});mobileLogoutButton.addEventListener('click',async()=>{try{await auth.signOut();alert('You have been logged out!')}catch(error){alert(error.message)}});firebase.auth().onAuthStateChanged((user)=>{if(user){document.getElementById('login-button').style.display='none';document.getElementById('register-button').style.display='none';document.getElementById('logout-button').style.display='inline-block';document.getElementById('profile-icon').style.display='inline-block';document.getElementById('mobile-profile-icon').style.display='inline-block';document.getElementById('mobile-logout-button').style.display='inline-block'}else{document.getElementById('login-button').style.display='inline-block';document.getElementById('register-button').style.display='inline-block';document.getElementById('logout-button').style.display='none';document.getElementById('profile-icon').style.display='none';document.getElementById('mobile-profile-icon').style.display='none';document.getElementById('mobile-logout-button').style.display='none'}});function logout(){firebase.auth().signOut().then(()=>{alert("Has cerrado sesión exitosamente.");window.location.href="login.html"}).catch((error)=>{alert("Error al cerrar sesión: "+error.message)})}