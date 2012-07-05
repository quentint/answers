<?php get_header(); ?>

<div id="content">
	<?php if (have_posts()) : ?>

	<?php while (have_posts()) : the_post(); ?>
	<div class="post" id="post-<?php the_ID(); ?>">
		<div class="title">
			<h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
			<p class="info"><strong class="date"><?php the_time('F jS, Y') ?></strong> by <?php the_author(); ?></p>
		</div>
		<div class="content">
			<?php the_content('Read the rest of this entry &raquo;'); ?>
		</div>
		<div class="meta">
			<ul>
				<li><?php _e("Posted in","answers");?>&nbsp;<?php the_category(', ') ?></li>
				<li><?php comments_popup_link('No Comments', '1 Comment', '% Comments'); ?></li>
				<?php the_tags('<li>Tags: ', ', ', '</li>'); ?>
			</ul>
		</div>
	</div>
	<?php endwhile; ?>
	
	<div class="navigation">
		<div class="next"><?php next_posts_link('Older Entries &raquo;') ?></div>
		<div class="prev"><?php previous_posts_link('&laquo; Newer Entries') ?></div>
	</div>
	
	<?php else : ?>
	<div class="post">
		<div class="head">
			<h1><?php_e("Not Found","answers");?></h1>
		</div>
		<div class="content">
			<p><?php _e("Sorry, but you are looking for something that isn't here.", "answers");?></p>
		</div>
	</div>
	<?php endif; ?>
	
</div>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
