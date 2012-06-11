<?php
/*
Template Name: Home Template
*/
?><?php get_header();?>
<?php get_sidebar();?>
<!-- content column -->
<div id="content">
	<!-- gallery -->
	<div class="gallery">
		<ul>
			<!-- slide -->
			<li>
				<img src="<?php bloginfo('template_url'); ?>/images/img1.png" alt="image description"/>
				<!-- caption -->
				<div class="caption">
					<strong class="ttl">L’engagement</strong>
					<strong class="sub-ttl">l’oreal depuis 1989</strong>
					<a href="#" class="link">LANCEZ L’ANIMATION</a>
				</div>
			</li>
		</ul>
		<!-- switcher -->
		<ul class="switcher">
			<li><a href="#" class="pause">pause</a></li>
			<li class="active"><a href="#">1</a></li>
			<li><a href="#">2</a></li>
			<li><a href="#">3</a></li>
			<li><a href="#">4</a></li>
			<li><a href="#">5</a></li>
			<li><a href="#">6</a></li>
		</ul>
	</div>
	<!-- intro-section -->
	<section class="intro-section">
		<?php if(have_posts()): the_post();?>
			<h2><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
			<?php the_content();?>
		<?php else:?>
			<h2>Not Found</h2>
			<p>Sorry, but you are looking for something that isn't here.</p>
		<?php endif;?>
		
	</section>
	
	<?php if(is_active_sidebar('default-sidebar')):?>
		<!-- content-section -->
		<section class="content-section">
			<?php dynamic_sidebar('default-sidebar');?>
		</section>
	<?php endif;?>
	
<?php get_footer();?>