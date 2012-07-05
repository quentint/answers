<?php
function print_current_slides($slides) { ?>
	<div class="gallery flexslider">
		<div id="flex-controller" class="switcher">
		</div>
		<ul class="slides">
			<?php
			for ($i = 0; $i < count($slides); $i++) { ?>
				<!-- slide -->
				<li>
					<a href="<?php echo $slides[$i]['url']; ?>" class="link"><img src="<?php echo $slides[$i]['img']; ?>" alt="<?php echo $slides[$i]['title']; ?>" title="<?php echo $slides[$i]['title']; ?>"/></a>
					<!-- caption -->
					<div class="caption">
						<strong class="ttl"><?php echo $slides[$i]['title']; ?></strong>
						<strong class="sub-ttl"><?php echo $slides[$i]['sub']; ?></strong>
						<a href="<?php echo $slides[$i]['url']; ?>" class="link"><?php echo $slides[$i]['legend'];?></a>
					</div>
					<!-- end caption -->
				</li>
				<!-- end slide -->
			<?php
		} ?>
		</ul>
	</div>

	<?php
} 
?>
