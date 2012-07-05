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
			<?php if(have_posts()):?>
				<?php while(have_posts()): the_post();?>
					<h2><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
					<?php the_excerpt();?>
				<?php endwhile;?>
				<?php previous_posts_link('&laquo; Newer Entries') ?>
				<?php next_posts_link('Older Entries &raquo;') ?>
			<?php else:?>
				<h1><?php _e("Not Found","answers");?></h1>
				<p><?php _e("Sorry, but you are looking for something that isn't here.", "answers");?></p>
			<?php endif;?>
		</div>
	</section>
<?php get_footer(); ?>
