<?php
/*
Template Name: Home Template
*/
?><?php get_header();?>
<?php get_sidebar();?>
<!-- content column -->
<div id="content">
	<!-- gallery -->
	<div class="gallery flexslider">
		<div id="flex-controller" class="switcher">
		</div>
		<ul class="slides">
			<!-- slide -->
			<li>
				<img src="<?php bloginfo('template_url'); ?>/images/timeline.png" alt="image description"/>
				<!-- caption -->
				<div class="caption">
					<strong class="ttl">L’engagement</strong>
					<strong class="sub-ttl">l’oreal depuis 1989</strong>
					<a href="http://answers.draft.lu/?page_id=221" class="link">LANCEZ L’ANIMATION</a>
				</div>
			</li>
			<li>
				<img src="<?php bloginfo('template_url'); ?>/images/schema.png" alt="image description"/>
				<!-- caption -->
				<div class="caption">
					<strong class="ttl">Reconstruire la peau humaine pour remplacer les tests sur animaux</strong>
					<strong class="sub-ttl">L'innovation par l’oreal</strong>
					<a href="http://answers.draft.lu/?page_id=231" class="link">LANCEZ L’ANIMATION</a>
				</div>
			</li>
		</ul>
		<!-- switcher -->
	</div>

	<!-- intro-section -->
	<section class="intro-section">
		<?php if(have_posts()): the_post();?>
			<!--<h2><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>-->
			<h2><?php the_title();?></h2>
			<?php the_content();?>
		<?php else:?>
			<h2><?php _e("Not Found","answers");?></h2>
			<p><?php _e("Sorry, but you are looking for something that isn't here.", "answers");?></p>
		<?php endif;?>
		
	</section>
	
	<?php if(is_active_sidebar('default-sidebar')):?>
		<!-- content-section -->
		<section class="content-section">
			<?php dynamic_sidebar('default-sidebar');?>
		</section>
	<?php endif;?>
	
<?php get_footer();?>