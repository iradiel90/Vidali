<?php 
/*	Vidali, Social Network Open Source.
This file is part of Vidali.

Vidali is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Vidali is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Foobar.  If not, see <http://www.gnu.org/licenses/>.*/
	$prof = new CORE_PROFILE();
	$author = $prof->get_home($_SESSION["user_id"]);
	$nick = $prof->nickname();
	$p_visits = $prof->prof_visits();
	$p_friends = $prof->prof_friends();
	$p_nets = $prof->prof_nets();
	$photo = $prof->img_prof();
	if(isset($_GET["!"]))
		$stream="all";
?>

<aside class="grid_4">
	<section class="p_resume">
		<div id="p_thumb">
			<?php echo '<img src="vdl-media/vdl-images/' . $photo . '.jpg">'; ?>
		</div>
		<div id="p_info">
			<?php echo $nick;?><br/>
			<?php echo $p_visits;?> visitas <br/>
			<?php echo $p_friends;?> Amigos<br/>
			<?php echo $p_nets;?> Redes<br/>
		</div>
	</section>			
</aside>

<div class="grid_7 prefix_1"> 
	<div id="set_status">
		<span>Actualiza tu estado:</span><br>
		<textarea id="mensaje" style="width:388px;" onKeyDown="cuenta()" onKeyUp="cuenta()"></textarea><br>
		<span style="float:right;"><span id="contador"></span>
			<input type="submit" value="Actualiza!" OnClick="actualiza(document.getElementById('mensaje').value)">
		</span>
	</div>
</div>

<div class="grid_4"> 
	<article id="alerts">
		<h1>Aviso:</h1>
		<p>Version 0.6 alfa.<br/> Proyecto semiparalizado hasta nuevo aviso.</p>
	</article>
</div>
<div class="clear"></div>