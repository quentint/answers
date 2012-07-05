<!-- sidebar -->
<aside id="sidebar">
	<!-- logo -->
	<h1 class="logo vcard"><a href="<?php bloginfo('url');?>" class="fn org url"><?php bloginfo('name');?></a></h1>
	<!-- heading -->
	<div class="heading">
		<strong class="ttl"><?php bloginfo('name')?></strong>
		<!-- lang -->
		<?php dynamic_sidebar('lang-sidebar');?>

	</div>
	<!-- title -->
	<div class="title"><strong><?php bloginfo('description')?></strong></div>
	<!-- navigation -->
	<?php wp_nav_menu( array('container' => 'nav',
				'theme_location' => 'primary',
				'menu_id' => 'navigation',
				'menu_class' => '',
				'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
				) ); ?>
</aside>