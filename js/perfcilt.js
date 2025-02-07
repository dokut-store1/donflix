const firebaseConfig={apiKey:"AIzaSyBI_6e7KQs4NBJ9ZaLe1FaPxV3xcYE8t3g",authDomain:"donflix-a85da.firebaseapp.com",databaseURL:"https://donflix-a85da-default-rtdb.firebaseio.com",projectId:"donflix-a85da",storageBucket:"donflix-a85da.firebasestorage.app",messagingSenderId:"236646922585",appId:"1:236646922585:web:d5a6778879dfb58eb03448"};firebase.initializeApp(firebaseConfig);const database=firebase.database();const auth=firebase.auth();function cargarPerfilUsuario(userId){const userRef=database.ref('usuarios/'+userId);userRef.on('value',(snapshot)=>{const usuario=snapshot.val();document.getElementById('nombre-usuario').textContent=`Nombre: ${usuario.nombre}`;document.getElementById('email-usuario').textContent=`Email: ${usuario.email}`;document.getElementById('plan-usuario').textContent=`Plan: ${usuario.nivel_de_plan}`;document.getElementById('estado-cuenta').textContent=`Estado: ${usuario.estado_de_cuenta}`;document.getElementById('suscripcion-usuario').textContent=`Suscripción: ${usuario.suscripcion}`;const sliderContainer=document.getElementById('slider-container');sliderContainer.innerHTML='';const peliculasFavoritas=usuario.peliculas_favoritas;if(peliculasFavoritas){Object.entries(peliculasFavoritas).forEach(([id,pelicula])=>{const item=document.createElement('div');item.classList.add('movie-item');item.innerHTML=`
    <a href="detalles.html?id=${id}">
        <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
    </a>
    <button onclick="eliminarDeFavoritos('${userId}', '${id}')">
        <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="Eliminar">
    </button>
`;sliderContainer.appendChild(item)})}else{sliderContainer.innerHTML='<p>No hay películas favoritas</p>'}})}
function eliminarDeFavoritos(userId,id){const ref=database.ref(`usuarios/${userId}/peliculas_favoritas/${id}`);ref.remove().then(()=>alert('Película eliminada.'))}
function toggleSlider(){const slider=document.getElementById('slider-container');slider.style.display=slider.style.display==='block'?'none':'block'}
function regresar(){window.history.back()}
function cerrarSesion(){auth.signOut().then(()=>{alert('Sesión cerrada.');window.location.href='login.html'})}
auth.onAuthStateChanged((user)=>{if(user)cargarPerfilUsuario(user.uid);});function cargarPerfilUsuario(userId){const userRef=database.ref('usuarios/'+userId);userRef.on('value',(snapshot)=>{const usuario=snapshot.val();document.getElementById('nombre-usuario').textContent=`Nombre: ${usuario.nombre}`;document.getElementById('email-usuario').textContent=`Email: ${usuario.email}`;document.getElementById('plan-usuario').textContent=`Plan: ${usuario.nivel_de_plan}`;document.getElementById('estado-cuenta').textContent=`Estado: ${usuario.estado_de_cuenta}`;document.getElementById('suscripcion-usuario').textContent=`Suscripción: ${usuario.suscripcion}`;const avatar=document.getElementById('avatar');const inicial=usuario.nombre?usuario.nombre.charAt(0).toUpperCase():'?';const colorFondo=getColorAleatorio();avatar.style.backgroundColor=colorFondo;avatar.textContent=inicial;const sliderContainer=document.getElementById('slider-container');sliderContainer.innerHTML='';const peliculasFavoritas=usuario.peliculas_favoritas;if(peliculasFavoritas){Object.entries(peliculasFavoritas).forEach(([id,pelicula])=>{const item=document.createElement('div');item.classList.add('movie-item');item.innerHTML=`
<a href="detalles.html?id=${id}">
<img src="${pelicula.imagen}" alt="${pelicula.titulo}">
</a>
<button onclick="eliminarDeFavoritos('${userId}', '${id}')">
<img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="Eliminar">
</button>
`;sliderContainer.appendChild(item)})}else{sliderContainer.innerHTML='<p>No hay películas favoritas</p>'}})}
function getColorAleatorio(){const colores=['#e50914','#1db954','#f4c10f','#007bff','#ff5733','#9b59b6'];return colores[Math.floor(Math.random()*colores.length)]}