var main = '<header class="navbar navbar-inverse navbar-fixed-top" role="navigation"> \
	<div style="float: left;"> \
		<img src="img/v-mini.png"> \
	</div> \
	<ul class="nav nav-pills"> \
		<li id="m-update"> \
			<a onclick="show_updater(); return false;" rel="tooltip" data-placement="bottom" title="Update Status" class="contentLink"> \
				<span class="glyphicon glyphicon-edit"></span> \
			</a> \
		</li> \
		<li id="m-msg"> \
			<a onclick="link(\'m\');" rel="tooltip" data-placement="bottom" title="Messages" class="contentLink"> \
				<span class="glyphicon glyphicon-envelope"></span> \
			</a> \
		</li> \
		<li id="m-set" class="dropdown pull-right"> \
			<a id="drop" href="#" rel="tooltip" data-toggle="dropdown" data-placement="bottom" title="Settings" class="contentLink"> \
				<span class="glyphicon glyphicon-plus"></span> \
				<b class="caret"></b> \
			</a> \
			<ul id="menu" class="dropdown-menu" role="menu" aria-labelledby="drop"> \
				<li> \
					<a href="#" onclick="link(\'l\');" rel="tooltip" data-placement="bottom" title="Mode"> \
						<span class="glyphicon glyphicon-th"></span> \
						Clasic Mode \
					</a> \
				</li> \
				<li> \
					<a href="#" onclick="link(\'sec\');" rel="tooltip" data-placement="bottom" title="Secure Mode"> \
						<span class="glyphicon glyphicon-eye-close"></span> \
						Invisible Mode \
					</a> \
				</li> \
				<li id="m-set"> \
					<a href="#" onclick="link(\'s\');" rel="tooltip" data-placement="bottom" title="Settings" class="contentLink"> \
						<span class="glyphicon glyphicon-wrench"></span> \
						Settings \
					</a> \
				</li> \
				<li> \
					<a href="#" onclick="vdl.doLogout();" rel="tooltip" data-placement="bottom" title="Logout"> \
						<span class="glyphicon glyphicon-off"></span> \
						Logout \
					</a> \
				</li> \
			</ul> \
		</li> \
	</ul> \
</header> \
<ul id="submenu" class="navbar-inner2"></ul> \
<div id="position"><span class="glyphicon glyphicon-map-marker"></span></div> \
<div id="map"></div> \
<div id="container2"></div> \
<nav id="apps" class="navbar navbar-inverse navbar-default navbar-fixed-bottom" role="navigation"> \
	<ul class="nav nav-pills"> \
		<li id="m-home"> \
			<a id="" onclick="vdl.loadScreen(\'home\');" data-toggle="tooltip" data-placement="top" title="Home Page"> \
				<span class="glyphicon glyphicon-home"></span> \
			</a> \
		</li> \
		<li id="m-group"> \
			<a onclick="vdl.loadScreen(\'groups\');" data-toggle="tooltip" data-placement="top" title="Groups"> \
				<span class="glyphicon glyphicon-globe"></span> \
			</a> \
		</li> \
		<li id="m-routes"> \
			<a onclick="vdl.loadScreen(\'routes\');" data-toggle="tooltip" data-placement="top" title="Routes"> \
				<span class="glyphicon glyphicon-road"></span> \
			</a> \
		</li> \
		<li id="m-files"> \
			<a onclick="vdl.loadScreen(\'files\');" data-toggle="tooltip" data-placement="top" title="Files"> \
				<span class="glyphicon glyphicon-folder-close"></span> \
			</a> \
		</li> \
	</ul> \
</nav> \
<footer class="footer"> \
	<p class="pull-right"><img src="img/html5.png"><img src="img/agpl.png"></p> \
	<p class="pull-left">Powered by Vidali.</p> \
</footer>';