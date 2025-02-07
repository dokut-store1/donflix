const firebaseConfig={apiKey:"AIzaSyBI_6e7KQs4NBJ9ZaLe1FaPxV3xcYE8t3g",authDomain:"donflix-a85da.firebaseapp.com",databaseURL:"https://donflix-a85da-default-rtdb.firebaseio.com",projectId:"donflix-a85da",storageBucket:"donflix-a85da.firebasestorage.app",messagingSenderId:"236646922585",appId:"1:236646922585:web:d5a6778879dfb58eb03448"};firebase.initializeApp(firebaseConfig);const db=firebase.database();const seriesRef=db.ref("series");seriesRef.orderByChild('timestamp').on('value',function(snapshot){const series=snapshot.val();const lista=document.getElementById('series-lista');lista.innerHTML='';const seriesArray=Object.entries(series||{}).map(([id,serie])=>({id,...serie})).reverse().slice(0,7);seriesArray.forEach(serie=>{const item=document.createElement('div');item.classList.add('carousel-item');item.innerHTML=`
    <div class="banner">
        <a href="detalles2.html?id=${serie.id}">
            <img src="${serie.portada}" alt="${serie.nombre}" class="pc">
            <img src="${serie.portada}" alt="${serie.nombre}" class="celular">
        </a>
    </div>
`;lista.appendChild(item)})});function scrollCarousel(direction,carouselId){const carousel=document.getElementById(carouselId);const itemWidth=carousel.querySelector('.carousel-item').offsetWidth;carousel.scrollBy({left:direction*itemWidth,behavior:'smooth'})}