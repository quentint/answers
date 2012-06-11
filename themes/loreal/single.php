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
			<?php comments_template();?>
			<?php else:?>
				<h1>Not Found</h1>
				<p>Sorry, but you are looking for something that isn't here.</p>
			<?php endif;?>
		</div>
		<?php get_template_part('slideshow');?>
	</section>
<?php get_footer(); ?>
