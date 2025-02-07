if(!firebase.apps.length){firebase.initializeApp(firebaseConfig)}
var style=document.createElement("style");style.innerHTML=`
  /* Sombra que cubre toda la página */
  #shadowMessage {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
    display: none;
  }
  
  /* Mensaje VIP */
  #vipMessage {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 30px;
    border-radius: 10px;
    font-size: 20px;
    text-align: center;
    z-index: 1000;
    width: 80%;
    max-width: 500px;
    display: none;
    display: flex;
    flex-direction: column; /* Alineación vertical de los botones */
    justify-content: center;
    align-items: center;
  }

  /* Botones */
  #renewButton, #homeButton {
    padding: 10px 20px;
    margin: 10px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 80%;  /* Aseguramos que los botones tengan el mismo ancho */
  }

  #renewButton {
    background-color: #28a745;
  }

  #homeButton {
    background-color: #007bff;
  }
`;document.head.appendChild(style);var shadowMessage=document.createElement("div");shadowMessage.id="shadowMessage";document.body.appendChild(shadowMessage);var vipMessage=document.createElement("div");vipMessage.id="vipMessage";vipMessage.innerText="Tu suscripción expiró";var renewButton=document.createElement("button");renewButton.id="renewButton";renewButton.innerText="Renovar";var homeButton=document.createElement("button");homeButton.id="homeButton";homeButton.innerText="Ir al inicio";vipMessage.appendChild(renewButton);vipMessage.appendChild(homeButton);document.body.appendChild(vipMessage);renewButton.addEventListener("click",function(){window.location.href="plan.html"});homeButton.addEventListener("click",function(){window.location.href="index.html"});firebase.auth().onAuthStateChanged(function(user){if(user){var userId=user.uid;var dbRef=firebase.database().ref('usuarios/'+userId);dbRef.on('value',function(snapshot){var userData=snapshot.val();if(userData){if(userData.nivel_de_plan==="vip1"||userData.nivel_de_plan==="vip2"||userData.nivel_de_plan==="vip3"||userData.nivel_de_plan==="vip4"){console.log('Usuario con acceso VIP');shadowMessage.style.display="none";vipMessage.style.display="none"}else{shadowMessage.style.display="block";vipMessage.style.display="block"}}})}else{alert('No has iniciado sesión')}});var style=document.createElement("style");style.innerHTML=`
  /* Estilo de la animación de carga */
  #loadingSpinner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    z-index: 9999;
  }

  /* Animación de giro */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Fondo de la página mientras se carga */
  #loadingOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 9998;
  }
`;document.head.appendChild(style);var loadingOverlay=document.createElement("div");loadingOverlay.id="loadingOverlay";var loadingSpinner=document.createElement("div");loadingSpinner.id="loadingSpinner";document.body.appendChild(loadingOverlay);document.body.appendChild(loadingSpinner);window.onload=function(){loadingOverlay.style.display="none";loadingSpinner.style.display="none"}