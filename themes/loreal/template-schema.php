<?php
/*
Template Name: Schema
*/
?>
<!DOCTYPE html>
<html lang="fr" class="no-js">
<head>
	<meta charset="utf-8" />
	<title>L'Oréal Answers - Missing headline ### Lorem ipsum ad</title>
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/more-css/style-schema.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/more-css/fonts.css" type="text/css" media="screen" />
	<script type="text/javascript" charset="utf-8" src="<?php bloginfo('template_url'); ?>/more-js/jquery.js"></script>
	<script type="text/javascript" charset="utf-8" src="<?php bloginfo('template_url'); ?>/more-js/modernizr.js"></script>
	<script type="text/javascript" charset="utf-8" src="<?php bloginfo('template_url'); ?>/more-js/raphael.js"></script>
	<script type="text/javascript" charset="utf-8" src="<?php bloginfo('template_url'); ?>/more-js/jquery-plugins.js"></script>
	<script type="text/javascript" charset="utf-8" src="<?php bloginfo('template_url'); ?>/more-js/main-schema.js"></script>
	<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jquery.main.js"></script>
</head>
<body>
<div id="wrapper">
	<div id="caption">
		<article id="etape-0">
			<h3></h3>
			<h2></h2>
			<div class="arrows">
				<a href="#etape-1" class="arrow next"></a>
			</div>
		</article>
		<article id="etape-1">
			<h3><span>1</span>/4</h3>
			<h2><?php _lm('etape-1-titre') ?></h2>
			<p class="e1"><?php _lm('etape-1-e1') ?></p>
			<p class="e2"><?php _lm('etape-1-e2') ?></p>
			<a class="more" href="#" target="_blank"><?php _lm('more') ?></a>
			<div class="arrows">
				<a href="#etape-2" class="arrow next"></a>
				<a href="#etape-0" class="arrow prev"></a>
				<a href="#etape-1" class="arrow replay"></a>
			</div>
		</article>
		<article id="etape-2">
			<h3><span>2</span>/4</h3>
			<h2><?php _lm('etape-2-titre') ?></h2>
			<p class="e1"><?php _lm('etape-2-e1') ?></p>
			<p class="e2"><?php _lm('etape-2-e2') ?></p>
			<p class="e3"><?php _lm('etape-2-e3') ?></p>
			<p class="e4"><?php _lm('etape-2-e4') ?></p>
			<a class="more" href="#" target="_blank"><?php _lm('more') ?></a>
			<div class="arrows">
				<a href="#etape-3" class="arrow next"></a>
				<a href="#etape-1" class="arrow prev"></a>
				<a href="#etape-2" class="arrow replay"></a>
			</div>
		</article>
		<article id="etape-3">
			<h3><span>3</span>/4</h3>
			<h2><?php _lm('etape-3-titre') ?></h2>
			<p class="e1"><?php _lm('etape-3-e1') ?></p>
			<a class="more" href="#" target="_blank"><?php _lm('more') ?></a>
			<div class="arrows">
				<a href="#etape-4" class="arrow next"></a>
				<a href="#etape-2" class="arrow prev"></a>
				<a href="#etape-3" class="arrow replay"></a>
			</div>
		</article>
		<article id="etape-4">
			<h3><span>4</span>/4</h3>
			<h2><?php _lm('etape-4-titre') ?></h2>
			<p class="e1"><?php _lm('etape-4-e1') ?></p>
			<p class="e2"><?php _lm('etape-4-e2') ?></p>
			<p class="e3"><?php _lm('etape-4-e3') ?></p>
			<a class="more" href="#" target="_blank"><?php _lm('more') ?></a>
			<div class="arrows">
				<a href="#etape-5" class="arrow next"></a>
				<a href="#etape-3" class="arrow prev"></a>
				<a href="#etape-4" class="arrow replay"></a>
			</div>
		</article>
		<article id="etape-5">
			<h3></h3>
			<h2><?php _lm('etape-5-titre') ?></h2>
			<p class="e1"><?php _lm('etape-5-e1') ?></p>
			<a class="more" href="#" target="_blank"><?php _lm('more') ?></a>
			<div class="arrows">
				<a href="#etape-6" class="arrow next"></a>
				<a href="#etape-4" class="arrow prev"></a>
			</div>
		</article>
		<article id="etape-6">
			<h3></h3>
			<h2><?php _lm('etape-6-titre') ?></h2>
			<p class="e1"><?php _lm('etape-6-e1') ?></p>
			<a class="more" href="#" target="_blank"><?php _lm('more') ?></a>
			<div class="arrows">
				<a href="#etape-5" class="arrow prev alone"></a>
			</div>
		</article>
	</div>
	<div id="main">
		<h1><?php _lm('main-headline') ?></h1>
		<div id="anim"><div id="anim-wrapper">
			
			<div id="anim-0" class="screen">
				<h2><?php _lm('anim-0-titre') ?></h2>
				<p><?php _lm('anim-0-e1') ?></p>
				<p class="kb"><img src="<?php bloginfo('template_url'); ?>/public/keyboard.svg" width="100" height="34" alt="" /><?php _lm('anim-keyboard') ?></p>
				<img class="i1" src="<?php bloginfo('template_url'); ?>/public/anim-0.svg" width="355" height="415" alt="" />
			</div>
			
			<div id="anim-1" class="screen">
				<img class="i2 cells idle" src="<?php bloginfo('template_url'); ?>/public/anim-1-2.svg" width="465" height="22" alt="" />
				<img class="i3 cells idle" src="<?php bloginfo('template_url'); ?>/public/anim-1-3.svg" width="465" height="22" alt="" />
				<img class="i1" src="<?php bloginfo('template_url'); ?>/public/anim-1-1.svg" width="580" height="170" alt="" />
			</div>
			
			<div id="anim-2" class="screen">
				<div class="in-anim b1">
					<img class="i1" src="<?php bloginfo('template_url'); ?>/public/anim-2-1_1.svg" width="595" height="90" alt="" />
					<img class="i1 cells idle" src="<?php bloginfo('template_url'); ?>/public/anim-2-1_2.svg" width="595" height="90" alt="" />
					<div class="i2"></div>
					<img class="i3 cells idle" src="<?php bloginfo('template_url'); ?>/public/anim-2-3.svg" width="65" height="45" alt="" />
					<img class="i4 cells idle" src="<?php bloginfo('template_url'); ?>/public/anim-2-4.svg" width="65" height="45" alt="" />
					<img class="i5" src="<?php bloginfo('template_url'); ?>/public/anim-2-5.svg" width="554" height="271" alt="" />
					<img class="zoom" src="<?php bloginfo('template_url'); ?>/public/zoom-in.svg" width="127" height="127" alt="" />
				</div>
				<div class="in-anim b2 idle">
					<div class="pastille past1 idle"><p></p><span><?php _lm('anim-4-pastille-1') ?></strong></span><p></p></div>
					<div class="pastille past2 idle"><p></p><span><?php _lm('anim-4-pastille-2') ?></span><p></p></div>
					<img class="i3 cells idle" src="<?php bloginfo('template_url'); ?>/public/anim-2_2-3.svg" width="310" height="22" alt="" />
					<img class="i4 cells idle" src="<?php bloginfo('template_url'); ?>/public/anim-2_2-4.svg" width="310" height="22" alt="" />
					<img class="i5 cells idle" src="<?php bloginfo('template_url'); ?>/public/anim-2_2-5.svg" width="310" height="22" alt="" />
					<img class="i6 cells idle" src="<?php bloginfo('template_url'); ?>/public/anim-2_2-6.svg" width="310" height="22" alt="" />
					<img class="i2" src="<?php bloginfo('template_url'); ?>/public/anim-2_2-2.svg" width="442" height="221" alt="" />
					<img class="i12" src="<?php bloginfo('template_url'); ?>/public/anim-2_2-1-2.svg" width="476" height="312" alt="" />
					<img class="i1" src="<?php bloginfo('template_url'); ?>/public/anim-2_2-1.svg" width="476" height="312" alt="" />
				</div>
			</div>
			
			<div id="anim-3" class="screen">
				<div class="in-anim b1">
					<img class="produit" src="<?php bloginfo('template_url'); ?>/public/anim-3-p1.svg" width="127" height="127" alt="" />
					<img class="i1 el" src="<?php bloginfo('template_url'); ?>/public/anim-3-s1.svg" width="207" height="173" alt="" />
					<div class="i2 el"><img src="<?php bloginfo('template_url'); ?>/public/anim-3-2.svg" width="313" height="12" alt="" /></div>
					<div class="i3 el"></div>
					<img class="puit" src="<?php bloginfo('template_url'); ?>/public/anim-3-1.svg" width="476" height="252" alt="" />
				</div>
				<div class="in-anim b2">
					<img class="produit" src="<?php bloginfo('template_url'); ?>/public/anim-3-p2.svg" width="127" height="127" alt="" />
					<div class="i2 el"></div>
					<img class="i1 el" src="<?php bloginfo('template_url'); ?>/public/anim-3-s2.svg" width="207" height="173" alt="" />
					<img class="puit" src="<?php bloginfo('template_url'); ?>/public/anim-3-1.svg" width="476" height="252" alt="" />
				</div>
			</div>
			
			<div id="anim-4" class="screen">
				<div class="in-anim b1">
					<div class="pastille past1 idle"><p></p><span><?php _lm('anim-4-pastille-1') ?></span><p></p></div>
					<div class="pastille past2 idle"><p></p><span><?php _lm('anim-4-pastille-2') ?></span><p></p></div>
					<div class="i1"></div>
					<img class="puits" src="<?php bloginfo('template_url'); ?>/public/anim-4-1.svg" width="552" height="271" alt="" />
					<div class="pastille past3 idle"><p></p><span><strong><?php _lm('anim-4-pastille-3') ?></strong></span><p></p></div>
					<div class="pastille past4 idle"><p></p><span><strong><?php _lm('anim-4-pastille-4') ?></strong></span><p></p></div>
					<div class="i4"></div>
					<img class="i2" src="<?php bloginfo('template_url'); ?>/public/anim-4-2.svg" width="400" height="124" alt="" />
					<div class="i3"><img src="<?php bloginfo('template_url'); ?>/public/anim-4-3.svg" width="536" height="248" alt="" /></div>
					<img class="zoom" src="<?php bloginfo('template_url'); ?>/public/zoom-in.svg" width="127" height="127" alt="" />
				</div>
				<div class="in-anim b2 idle">
					<div class="pastille past1 idle"><p></p><span><?php _lm('anim-4-pastille-5') ?></span><p></p></div>
					<div class="pastille past2 idle"><p></p><span><?php _lm('anim-4-pastille-6') ?></span><p></p></div>
					<div class="i1"></div>
					<img class="puits" src="<?php bloginfo('template_url'); ?>/public/anim-4-4.svg" width="451" height="202" alt="" />
				</div>
			</div>
			
			<div id="anim-5" class="screen">
				<h2><?php _lm('anim-5-titre') ?></h2>
				<img class="i1" src="<?php bloginfo('template_url'); ?>/public/anim-5.svg" width="477" height="300" alt="" />
			</div>
			
			<div id="anim-6" class="screen">
				<h2><?php _lm('anim-6-titre') ?>.</h2>
				<img class="i1" src="<?php bloginfo('template_url'); ?>/public/anim-6.svg" width="477" height="329" alt="" />
			</div>
			
		</div></div>
	</div>
</div>
<aside id=sidebar><h1 class="logo vcard"><a href="" class="fn org url">L&#039;Oreal Answers</a></h1><div class=heading><strong class=ttl>ANSWERS</strong><form action="#"><div><label for=sel1 class=hidden>language</label><select class=lang id=sel1 onchange="document.location = this.value"><option value="http://answers.draft.lu/?lang=en">EN<option selected value="http://answers.draft.lu/">FR</select><input type=submit class=hidden value=submit></div></form></div><div class=title><strong>ON ANIMAL TESTING</strong></div><nav class=menu-main-menu-container><ul id=navigation><li id=menu-item-67 class="menu-item menu-item-type-post_type menu-item-object-page active page_item page-item-4 current_page_item menu-item-67"><a href="http://answers.draft.lu/">Home</a></li><li id=menu-item-64 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-64"><a href="http://answers.draft.lu/?page_id=62">key fact</a></li><li id=menu-item-65 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-65"><a href="http://answers.draft.lu/?page_id=60">questions</a></li><li id=menu-item-66 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-66"><a href="http://answers.draft.lu/?page_id=58">links</a></li></ul></nav></aside>
<noscript><p><?php _lm('no-script') ?></p></noscript>
</body>
</html>