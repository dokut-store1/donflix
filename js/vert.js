const firebaseConfig={apiKey:"AIzaSyBI_6e7KQs4NBJ9ZaLe1FaPxV3xcYE8t3g",authDomain:"donflix-a85da.firebaseapp.com",databaseURL:"https://donflix-a85da-default-rtdb.firebaseio.com",projectId:"donflix-a85da",storageBucket:"donflix-a85da.firebasestorage.app",messagingSenderId:"236646922585",appId:"1:236646922585:web:d5a6778879dfb58eb03448"};firebase.initializeApp(firebaseConfig);const database=firebase.database();const CONNECTION_TIMEOUTS={'2g':{timeout:45000,message:'Conexión muy lenta. Intente recargar.'},'3g':{timeout:30000,message:'Conexión lenta. Verifique su internet.'},'4g':{timeout:20000,message:'Problema de conexión. Reintentando...'},'wifi':{timeout:15000,message:'Error al cargar el video.'},'default':{timeout:25000,message:'No se puede reproducir el video.'}};function getConnectionTimeout(){const connection=navigator.connection||navigator.mozConnection||navigator.webkitConnection;const connectionType=connection?connection.effectiveType:'default';return CONNECTION_TIMEOUTS[connectionType]||CONNECTION_TIMEOUTS['default']}
function showErrorOverlay(container,customMessage){const connectionConfig=getConnectionTimeout();const overlayId=`error-overlay-${container.id}`;const existingOverlay=container.querySelector('.overlay');if(existingOverlay){existingOverlay.remove()}
const overlay=document.createElement('div');overlay.className='overlay';overlay.id=overlayId;overlay.innerHTML=`
                <div>
                    <h2>Error de Reproducción</h2>
                    <p> este error se debe aque no tienen conexion a internet</p>
                    <p>porfavor recarge la pagina si ya tinen acceso a internet</p>
                    <p>${customMessage || connectionConfig.message}</p>
                    <button onclick="location.reload()">Recargar Página</button>
                </div>
            `;overlay.style.display='flex';container.appendChild(overlay)}
function startLoadingMonitor(iframe,container){const connectionConfig=getConnectionTimeout();const loadTimer=setTimeout(()=>{try{const doc=iframe.contentDocument||iframe.contentWindow.document;if(!doc||!doc.body||doc.body.innerHTML.length<100){showErrorOverlay(container,connectionConfig.message)}}catch(error){showErrorOverlay(container,'Error de acceso al contenido')}},connectionConfig.timeout);iframe.addEventListener('load',()=>clearTimeout(loadTimer))}
const urlParams=new URLSearchParams(window.location.search);const peliculaId=urlParams.get('id');function cargarVideo(tabla,containerId){const peliculaRef=firebase.database().ref(`${tabla}/`+peliculaId);peliculaRef.once('value',function(snapshot){const pelicula=snapshot.val();const videoContainer=document.getElementById(containerId);if(pelicula&&pelicula.video_id){videoContainer.innerHTML=`
                        <div class="video-container">
                            <div class="red-overlay">D</div>
                            <iframe 
                                src="https://drive.google.com/file/d/${pelicula.video_id}/preview" 
                                allow="autoplay; fullscreen" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    `;const iframe=videoContainer.querySelector('iframe');iframe.addEventListener('error',()=>showErrorOverlay(videoContainer,'Error al cargar el video'));startLoadingMonitor(iframe,videoContainer)}else{videoContainer.innerHTML=`<p></p>`}})}
window.addEventListener('offline',()=>{document.querySelectorAll('[id^="video-container-"]').forEach(container=>{showErrorOverlay(container,'Sin conexión a internet')})});cargarVideo("peliculas","video-container-1");cargarVideo("peliculas2","video-container-2");cargarVideo("peliculas3","video-container-3");cargarVideo("peliculas4","video-container-4");cargarVideo("peliculas5","video-container-5");cargarVideo("peliculas6","video-container-6")