const firebaseConfig={apiKey:"AIzaSyBI_6e7KQs4NBJ9ZaLe1FaPxV3xcYE8t3g",authDomain:"donflix-a85da.firebaseapp.com",databaseURL:"https://donflix-a85da-default-rtdb.firebaseio.com",projectId:"donflix-a85da",storageBucket:"donflix-a85da.firebasestorage.app",messagingSenderId:"236646922585",appId:"1:236646922585:web:d5a6778879dfb58eb03448"};firebase.initializeApp(firebaseConfig);const db=firebase.database();const peliculasRef=db.ref("peliculas");peliculasRef.orderByChild('timestamp').limitToLast(7).on('value',function(snapshot){const peliculas=snapshot.val();const lista=document.getElementById('peliculas-lista');lista.innerHTML='';const peliculasArray=Object.entries(peliculas||{}).map(([id,pelicula])=>({id,...pelicula}));peliculasArray.forEach(pelicula=>{const item=document.createElement('div');item.classList.add('carousel-item');item.innerHTML=`
    <div class="banner">
        <a href="detalles.html?id=${pelicula.id}">
            <img src="${pelicula.portada}" alt="${pelicula.titulo}" class="pc">
            <img src="${pelicula.imagencelular}" alt="${pelicula.titulo}" class="celular">
        </a>
    </div>
`;lista.appendChild(item)})});const peliculas2Ref=db.ref("peliculas2");peliculas2Ref.orderByChild('timestamp').limitToLast(7).on('value',function(snapshot){const peliculas2=snapshot.val();const lista2=document.getElementById('peliculas2-lista');lista2.innerHTML='';const peliculas2Array=Object.entries(peliculas2||{}).map(([id,pelicula2])=>({id,...pelicula2}));peliculas2Array.forEach(pelicula2=>{const item2=document.createElement('div');item2.classList.add('carousel-item');item2.innerHTML=`
    <div class="banner">
        <a href="detalles.html?id=${pelicula2.id}">
            <img src="${pelicula2.portada}" alt="${pelicula2.titulo}" class="pc">
            <img src="${pelicula2.imagencelular}" alt="${pelicula2.titulo}" class="celular">
        </a>
    </div>
`;lista2.appendChild(item2)})});const peliculas3Ref=db.ref("peliculas3");peliculas3Ref.orderByChild('timestamp').limitToLast(7).on('value',function(snapshot){const peliculas3=snapshot.val();const lista3=document.getElementById('peliculas3-lista');lista3.innerHTML='';const peliculas3Array=Object.entries(peliculas3||{}).map(([id,pelicula3])=>({id,...pelicula3}));peliculas3Array.forEach(pelicula3=>{const item3=document.createElement('div');item3.classList.add('carousel-item');item3.innerHTML=`
    <div class="banner">
        <a href="detalles.html?id=${pelicula3.id}">
            <img src="${pelicula3.portada}" alt="${pelicula3.titulo}" class="pc">
            <img src="${pelicula3.imagencelular}" alt="${pelicula3.titulo}" class="celular">
        </a>
    </div>
`;lista3.appendChild(item3)})});const peliculas4Ref=db.ref("peliculas4");peliculas4Ref.orderByChild('timestamp').limitToLast(7).on('value',function(snapshot){const peliculas4=snapshot.val();const lista4=document.getElementById('peliculas4-lista');lista4.innerHTML='';const peliculas4Array=Object.entries(peliculas4||{}).map(([id,pelicula4])=>({id,...pelicula4}));peliculas4Array.forEach(pelicula4=>{const item4=document.createElement('div');item4.classList.add('carousel-item');item4.innerHTML=`
    <div class="banner">
        <a href="detalles.html?id=${pelicula4.id}">
            <img src="${pelicula4.portada}" alt="${pelicula4.titulo}" class="pc">
            <img src="${pelicula4.imagencelular}" alt="${pelicula4.titulo}" class="celular">
        </a>
    </div>
`;lista4.appendChild(item4)})});const peliculas5Ref=db.ref("peliculas5");peliculas5Ref.orderByChild('timestamp').limitToLast(7).on('value',function(snapshot){const peliculas5=snapshot.val();const lista5=document.getElementById('peliculas5-lista');lista5.innerHTML='';const peliculas5Array=Object.entries(peliculas5||{}).map(([id,pelicula5])=>({id,...pelicula5}));peliculas5Array.forEach(pelicula5=>{const item5=document.createElement('div');item5.classList.add('carousel-item');item5.innerHTML=`
    <div class="banner">
        <a href="detalles.html?id=${pelicula5.id}">
            <img src="${pelicula5.portada}" alt="${pelicula5.titulo}" class="pc">
            <img src="${pelicula5.imagencelular}" alt="${pelicula5.titulo}" class="celular">
        </a>
    </div>
`;lista5.appendChild(item5)})});const peliculas6Ref=db.ref("peliculas6");peliculas6Ref.orderByChild('timestamp').limitToLast(7).on('value',function(snapshot){const peliculas6=snapshot.val();const lista6=document.getElementById('peliculas6-lista');lista6.innerHTML='';const peliculas6Array=Object.entries(peliculas6||{}).map(([id,pelicula6])=>({id,...pelicula6}));peliculas6Array.forEach(pelicula6=>{const item6=document.createElement('div');item6.classList.add('carousel-item');item6.innerHTML=`
    <div class="banner">
        <a href="detalles.html?id=${pelicula6.id}">
            <img src="${pelicula6.portada}" alt="${pelicula6.titulo}" class="pc">
            <img src="${pelicula6.imagencelular}" alt="${pelicula6.titulo}" class="celular">
        </a>
    </div>
`;lista6.appendChild(item6)})});function scrollCarousel(direction,carouselId){const carousel=document.getElementById(carouselId);const itemWidth=carousel.querySelector('.carousel-item').offsetWidth;carousel.scrollBy({left:direction*itemWidth,behavior:'smooth'})}