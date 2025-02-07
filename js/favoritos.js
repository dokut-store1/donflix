const firebaseConfig={apiKey:"AIzaSyBI_6e7KQs4NBJ9ZaLe1FaPxV3xcYE8t3g",authDomain:"donflix-a85da.firebaseapp.com",databaseURL:"https://donflix-a85da-default-rtdb.firebaseio.com",projectId:"donflix-a85da",storageBucket:"donflix-a85da.firebasestorage.app",messagingSenderId:"236646922585",appId:"1:236646922585:web:d5a6778879dfb58eb03448"};firebase.initializeApp(firebaseConfig);const database=firebase.database();const auth=firebase.auth();function cargarFavoritos(userId){const userRef=database.ref('usuarios/'+userId);userRef.on('value',(snapshot)=>{const usuario=snapshot.val();const favoritosContainer=document.getElementById('favoritos-container');favoritosContainer.innerHTML='';const peliculasFavoritas=usuario.peliculas_favoritas;if(peliculasFavoritas){Object.entries(peliculasFavoritas).forEach(([id,pelicula])=>{const item=document.createElement('div');item.classList.add('movie-item');item.innerHTML=`
    <a href="detalles.html?id=${id}">
        <img src="${pelicula.portada}" alt="${pelicula.titulo}">
    </a>
    <button onclick="eliminarDeFavoritos('${userId}', '${id}')">
        <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="Eliminar">
    </button>
`;favoritosContainer.appendChild(item)})}else{favoritosContainer.innerHTML='<p>No tienes películas favoritas.</p>'}})}
function eliminarDeFavoritos(userId,id){const ref=database.ref(`usuarios/${userId}/peliculas_favoritas/${id}`);ref.remove().then(()=>{const alerta=document.getElementById('alerta-eliminada');alerta.classList.add('show');alerta.textContent='Película eliminada';setTimeout(()=>{alerta.classList.remove('show')},1000)})}
auth.onAuthStateChanged((user)=>{if(user)cargarFavoritos(user.uid);})