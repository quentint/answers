<?php
/*
Template Name: Home Template
*/
?><?php get_header();?>
<?php get_sidebar();?>
<!-- content column -->
<div id="content">
	<!-- gallery -->
	<?php print_home_slider(); ?>
	<!-- intro-section -->
	<section class="intro-section">
		<?php if(have_posts()): the_post();?>
			<!--<h2><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>-->
			<h2><?php the_title();?></h2>
			<?php the_content();?>
			<div class="zoom columns">
				<?php if(is_active_sidebar('home-sidebar-'.get_locale_suffix())):?>
					<!-- home-zoom-section -->
					
						<?php dynamic_sidebar('home-sidebar-'.get_locale_suffix());?>
					
				<?php endif;?>
			</div>
		<?php else:?>
			<h2><?php _e("Not Found","answers");?></h2>
			<p><?php _e("Sorry, but you are looking for something that isn't here.", "answers");?></p>
		<?php endif;?>
		
	</section>
	
	<?php if(is_active_sidebar('default-sidebar-'.get_locale_suffix())):?>
		<!-- content-section -->
		<section class="content-section">
			<?php dynamic_sidebar('default-sidebar-'.get_locale_suffix());?>
		</section>
	<?php endif;?>
	
<?php get_footer();?>