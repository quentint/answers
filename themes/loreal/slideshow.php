<?php
//$size='735x488';
$images=&get_children( 'post_parent='.get_the_ID().'&post_type=attachment&post_mime_type=image&orderby=menu_order&order=ASC' );
if ( is_array($images) && count($images) > 0){
	echo '<div class="gallery slideshow"><ul>';
	foreach  ($images as $image){
		//print_r($image);
		echo '<li>'.wp_get_attachment_image( $image->ID, '735x488');	
		if($image->post_content || $image->post_title || $image->post_excerpt){
			echo '<div class="caption">';
				if($image->post_content) echo '<a href="'.$image -> guid.'" class="link">'. $image->post_content .'</a>';
				if($image->post_title) echo '<strong class="ttl">'. $image->post_title .'</strong>';
				if($image->post_excerpt) echo '<strong class="sub-ttl">'. $image->post_excerpt. '</strong>';	
			echo'</div>';
		}
		echo '</li>';
	}
	echo '</ul></div>';
}
?>



