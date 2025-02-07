const firebaseConfig={apiKey:"AIzaSyBI_6e7KQs4NBJ9ZaLe1FaPxV3xcYE8t3g",authDomain:"donflix-a85da.firebaseapp.com",databaseURL:"https://donflix-a85da-default-rtdb.firebaseio.com",projectId:"donflix-a85da",storageBucket:"donflix-a85da.firebasestorage.app",messagingSenderId:"236646922585",appId:"1:236646922585:web:d5a6778879dfb58eb03448"};firebase.initializeApp(firebaseConfig);const db=firebase.database();const peliculasRef=db.ref("peliculas2");peliculasRef.orderByChild('timestamp').on('value',function(snapshot){const peliculas=snapshot.val();const grid=document.getElementById('peliculas-grid');grid.innerHTML='';const peliculasArray=Object.entries(peliculas||{}).map(([id,pelicula])=>({id,...pelicula})).reverse();peliculasArray.forEach(pelicula=>{const item=document.createElement('div');item.classList.add('pelicula-item');item.innerHTML=`
    <div class="banner">
        <a href="detalles.html?id=${pelicula.id}">
            <img src="${pelicula.portada}" alt="${pelicula.titulo}" class="pc">
            <img src="${pelicula.imagencelular}" alt="${pelicula.titulo}" class="celular">
        </a>
    </div>
`;grid.appendChild(item)})})