<?php get_header(); ?>
<?php get_sidebar(); ?>
<!-- content column -->
<div id="content">
	<?php if(function_exists('bcn_display_list')):?>
		<ul class="breadcrumbs">
			<?php  bcn_display_list('');?>
		</ul>
	<?php endif;?>
	
	<!-- content text -->
	<section class="content hfeed">
		<div class="hentry">
			<?php if(have_posts()): the_post();?>
			<h1 class="entry-title"><?php the_title();?></h1>
			<?php the_content();?>
			<?php else:?>
				<h1><?php _e("Not Found","answers");?></h1>
				<p><?php _e("Sorry, but you are looking for something that isn't here.", "answers");?></p>
			<?php endif;?>
		</div>
		<?php get_template_part('slideshow');?>
	</section>
<?php get_footer(); ?>
