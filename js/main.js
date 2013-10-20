/*Global data*/
var msgTimeout;
var _GET = window.location.href.replace('/', '').split('/');
var map;

/****
	*set_data (value of specific data)
	*We connect with server-side and request specific data to put it into view div.
	*return: false
	*/
	//debe cambiar: aqui debe crearse todos los puntos para el mapa, donde incluímos las updates, etc etc
var set_data = function(value){ 
	var result;
	$.ajax({
		url: basedir+'/vdl-include/query.php',
		cache: false,
		type: "POST",
		data: {
			query: value,
			extra: _GET[1],
		},
		success: function(data){
			if(data == ''){
				$("#view").append('<article id="object" class="obj">En construcción</article>');
			}
			else{
				console.log(data);
				data = JSON.parse(data);
				console.log(data);
		    	if(value == 'wall'){
		    		
					$("#view").append('<div id="updates" class="obj"></div>');
				    for(var i=0;i<data.length;i++){
						$("#updates").append('<article id="obj-'+i+'" class="upd"></article>');
						$("#obj-"+i).append('<div id="uthumb-'+i+'" class="upd-img"></div>');
						$("#obj-"+i).append('<div id="uinfo-'+i+'" class="upd-info"></div>');
						$("#uthumb-"+i).append('<img src="vdl-files/'+data[i].avatar_id+'_tb.jpg">');
						$("#uinfo-"+i).append('<div class="nick"><a href="#" onClick="load_info(\'profile\');">'+data[i].nick+'</a></div><div class="date_published">'+data[i].date_published+'</div>');
						$("#obj-"+i).append('<div class="upd-msg">'+data[i].text+'</div>');
						//SOBRECARGA o MODIFICAR SET_DATA y LOAD_INFO para poder enviar nick del usuario
					}
				}
				if (value == 'profile'){
						var sex;
						if(data.sex == 'male')
							sex = 'Hombre';
						else
							sex = 'Mujer';
						$("#view").append('<article id="profile-info" class="obj"></article>');
						$("#profile-info").append('<img src="vdl-files/'+data.avatar_id+'.jpg">');
						$("#profile-info").append('<div>'+data.nick+'</div>');
						$("#profile-info").append('<div>'+data.name+'</div>');
						$("#profile-info").append('<div>'+sex+', '+data.age+' años.</div>');
						$("#profile-info").append('<div>'+data.description+'</div>');
				}
				if (value == 'inbox'){
					$("#view").append('<article id="object" class="obj">En construcción</article>');					
				}
				if (value == 'routes'){
					$("#view").append('<article id="obj-map" class="obj"></article>');
					$("#obj-map").append('<object type="text/html" data="http://tranviaonline.metrotenerife.com/#mapa" width="690" height="400"> </object>');
				}
				if (value == 'set_profile'){
					$("#view").append('<form id="settings" class="obj form-horizontal"></form>');
					$("#settings").append('<div id="c0" class="control-group"></div>');
					$("#c0").append(' <label class="control-label" for="SetAvatar">Foto de perfil</label>');
					$("#c0").append(' <div class="controls"><img id="SetAvatar" src="vdl-files/'+data.avatar_id+'.jpg">');
					$("#settings").append('<div id="c1" class="control-group"></div>');
					$("#c1").append(' <label class="control-label" for="SetNick">Nick</label>');
					$("#c1").append(' <div class="controls"><input type="text" id="SetNick" value="'+data.nick+'"></div>');
					$("#settings").append('<div id="c2" class="control-group"></div>');
					$("#c2").append(' <label class="control-label" for="ProfName">Nombre</label>');
					$("#c2").append(' <div class="controls"><input type="text" id="ProfName" value="'+data.name+'"></div>');
					$("#settings").append('<div id="c3" class="control-group"></div>');
					$("#c3").append(' <label class="control-label" for="ProfAge">Edad</label>');
					$("#c3").append(' <div class="controls"><input type="text" id="ProfAge" value="'+data.age+'"></div>');
					$("#settings").append('<div id="c4" class="control-group"></div>');
					$("#c4").append(' <label class="control-label" for="ProfEmail">Email</label>');
					$("#c4").append(' <div class="controls"><input type="text" id="ProfEmail" value="'+data.email+'"></div>');
					$("#settings").append('<div id="c5" class="control-group"></div>');
					$("#c5").append(' <label class="control-label" for="ProfSex">Sexo</label>');
					$("#c5").append(' <div class="controls"><input type="text" id="ProfSex" value="'+data.sex+'"></div>');
					$("#settings").append('<div id="c6" class="control-group"></div>');
					$("#c6").append(' <label class="control-label" for="ProfLoc">Localización</label>');
					$("#c6").append(' <div class="controls"><input type="text" id="ProfLoc" value="'+data.location+'"></div>');
					$("#settings").append('<div id="c7" class="control-group"></div>');
					$("#c7").append(' <label class="control-label" for="ProfWeb">WebSite</label>');
					$("#c7").append(' <div class="controls"><input type="text" id="ProfWeb" value="'+data.website+'"></div>');
					$("#settings").append('<div id="c8" class="control-group"></div>');
					$("#c8").append(' <label class="control-label" for="ProfDes">Descripción</label>');
					$("#c8").append(' <div class="controls"><input type="text" id="ProfDes" value="'+data.description+'"></div>');
					$("#settings").append('<div id="c9" class="control-group"></div>');
					$("#c9").append(' <div class="controls"><button type="submit" class="btn">Actualizar</button></div>');
		
				}
			}
		}
	});
	return false;
};

var update_status = function(){
	var update_val = $('#update_box').val();
	console.log(update_val);
	$.ajax({
		url: basedir+'/vdl-include/set_update.php',
		cache: false,
		type: "POST",
		data: {
			update: update_val,
		},
		success: function(data){
			console.log(data);
			if(data == 'done'){
				$('#container').prepend('<div class="alert alert-success fade in"><button type="button" class="close" data-dismiss="alert">×</button><strong>Holy guacamole!</strong> Estado Actualizado ;)</div>');
 				get_page('h');
 				$('#update').val('');
 				$('#updater').fadeOut(100);	
				updaterStatus = "disabled";
			}
			else{
				$('#container').prepend('<div class="alert alert-error fade in"><button type="button" class="close" data-dismiss="alert">×</button><strong>Grr!</strong> Algo Falla. Intenltalo de nuevo :(</div>');				
			}
		}
	});
};

function load_ref(refer){
	//aqui debería cargar los datos
	return '<article id="profile-info" class="obj"><img src="vdl-files/prof_def.jpg"><div>cristomc</div><div>Cristo</div><div>Hombre, 22 años.</div><div>Hola!</div></article>';
}

function draw_box(position,refer){
	var data = load_ref(refer);
	var popup = new OpenLayers.Popup("chicken",
                   position,
                   new OpenLayers.Size(200,270),
                   data,
                   true);

	map.addPopup(popup);
}

function success(position) {
	map = new ol.Map({
        target: 'map',
        layers: [
          	new ol.layer.Tile({
            	source: new ol.source.OSM()
			}),        	
          	new ol.layer.Tile({
            	source: new ol.source.OSM({
 			   	attributions: [
          			new ol.Attribution({
            		html: 'All maps &copy; ' +
                		'<a href="http://www.opencyclemap.org/">OpenCycleMap</a>'
          			}),
          			ol.source.OSM.DATA_ATTRIBUTION
	        	],
        		url: 'http://{a-c}.tile.opencyclemap.org/transport/{z}/{x}/{y}.png'
      			})
          	})
        ],
        renderers: ol.RendererHints.createFromQueryData(),
        view: new ol.View2D({
          	center: ol.proj.transform([position.coords.longitude,position.coords.latitude], 'EPSG:4326', 'EPSG:3857'),
          	zoom: 16
        }),
      });
   	console.log("You are here! (at least within a "+position.coords.accuracy+" meter radius)");
}

function error(msg) {
  	console.log("VDL_ERROR: "+msg);
}


var draw_page = function(page){

	if(page == 'login'){
		$('#container').load('login.html');
	}
	if(page == 'main'){
		$('#container').load('main.html');
	}
}

$(document).ready(function(){
	$("#background").fadeIn(500);

	if(localStorage && navigator.geolocation){
		sessionStorage.setItem('pass_c','cristomc')
    	if(!sessionStorage.getItem('nick_c')){
    		draw_page('login');
    	}
    	else
	  		navigator.geolocation.getCurrentPosition(success, error);
	}else{
		alert('Navegador no soportado');
		document.location.href='http://www.firefox.com';
	}
	if(_GET[0] == '' || _GET[0] == '#' || _GET[0] == 'h'){
		get_page('h');
	}
	else{
		get_page(_GET[0]);
	}
	$("a").tooltip();
	$('#background').fadeOut(1000);
	
	return false;
});

var observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on'+event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}

function init () {
    var text = document.getElementById('update_box');
    function resize () {
        text.style.height = 'auto';
        text.style.height = text.scrollHeight+'px';
    }
    /* 0-timeout to get the already changed text */
    function delayedResize () {
        window.setTimeout(resize, 0);
    }
    observe(text, 'change',  resize);
    observe(text, 'cut',     delayedResize);
    observe(text, 'paste',   delayedResize);
    observe(text, 'drop',    delayedResize);
    observe(text, 'keydown', delayedResize);

    text.focus();
    text.select();
    resize();
}