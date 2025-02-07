  

    // Configura tu Firebase
    var firebaseConfig = {
    apiKey: "AIzaSyBI_6e7KQs4NBJ9ZaLe1FaPxV3xcYE8t3g",
    authDomain: "donflix-a85da.firebaseapp.com",
    databaseURL: "https://donflix-a85da-default-rtdb.firebaseio.com",
    projectId: "donflix-a85da",
    storageBucket: "donflix-a85da.firebasestorage.app",
    messagingSenderId: "236646922585",
    appId: "1:236646922585:web:d5a6778879dfb58eb03448"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
var database = firebase.database();

// Función para cargar los planes desde Firebase
function loadPlans() {
    var plansRef = database.ref('planes'); // Ruta en la base de datos donde están los planes
    
    plansRef.once('value', function(snapshot) {
        var plansContainer = document.getElementById('plans-container');
        plansContainer.innerHTML = ''; // Limpiar contenedor antes de cargar los nuevos planes

        snapshot.forEach(function(childSnapshot) {
            var plan = childSnapshot.val(); // Obtiene los datos de cada plan
            var planElement = document.createElement('div');
            planElement.classList.add('subscription-card');
            
            // Crear contenido de la tarjeta
            planElement.innerHTML = `
                <h3>${plan.name}</h3>
                <p>${plan.duration} = ${plan.price}</p>
                <p>+ ${plan.extraDays}</p>
                <p>+ ${plan.multicuentas}</p>
                <p>+ ${plan.profile}</p>
                <button class="buy-btn" onclick="redirectToWhatsApp()">Comprar</button>
            `;

            // Agregar la tarjeta al contenedor
            plansContainer.appendChild(planElement);
        });
    });
}

// Llama a la función para cargar los planes cuando la página cargue
window.onload = loadPlans;

// Función para redirigir al WhatsApp
function redirectToWhatsApp() {
    window.location.href = "https://wa.me/+573234839129"; 
}

