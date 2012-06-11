<?php

include( TEMPLATEPATH.'/constants.php' );
include( TEMPLATEPATH.'/classes.php' );
include( TEMPLATEPATH.'/widgets.php' );

/**
 * Disable automatic general feed link outputting.
 */
automatic_feed_links( false );

//remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'wp_generator');

if ( function_exists('register_sidebar') ) {
	register_sidebar(array(
		'id' => 'lang-sidebar',
		'name' => 'Lang Sidebar',
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h3>',
		'after_title' => '</h3>'
	));
	register_sidebar(array(
		'id' => 'default-sidebar',
		'name' => 'Default Sidebar',
		'before_widget' => '<!-- box --><div class="box %2$s" id="%1$s">',
		'after_widget' => '</div>',
		'before_title' => '<h3><span>',
		'after_title' => '</span></h3>'
	));
	register_sidebar(array(
		'id' => 'menus-sidebar',
		'name' => 'Menus Sidebar',
		'before_widget' => '<div class="col %2$s" id="%1$s">',
		'after_widget' => '</div>',
		'before_title' => '<h4>',
		'after_title' => '</h4>'
	));
	
}

if ( function_exists( 'add_theme_support' ) ) {
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 50, 50, true ); // Normal post thumbnails
	add_image_size( 'single-post-thumbnail', 400, 9999, true );
	add_image_size( '735x488', 735, 488, true );
}

register_nav_menus( array(
	'primary' => __( 'Primary Navigation', 'base' ),
) );


//add [email]...[/email] shortcode
function shortcode_email($atts, $content) {
	$result = '';
	for ($i=0; $i<strlen($content); $i++) {
		$result .= '&#'.ord($content{$i}).';';
	}
	return $result;
}
add_shortcode('email', 'shortcode_email');

// register tag [template-url]
function filter_template_url($text) {
	return str_replace('[template-url]',get_bloginfo('template_url'), $text);
}
add_filter('the_content', 'filter_template_url');
add_filter('get_the_content', 'filter_template_url');
add_filter('widget_text', 'filter_template_url');

// register tag [site-url]
function filter_site_url($text) {
	return str_replace('[site-url]',get_bloginfo('url'), $text);
}
add_filter('the_content', 'filter_site_url');
add_filter('get_the_content', 'filter_site_url');
add_filter('widget_text', 'filter_site_url');


/* Replace Standart WP Menu Classes */
function change_menu_classes($css_classes) {
        $css_classes = str_replace("current-menu-item", "active", $css_classes);
        $css_classes = str_replace("current-menu-parent", "active", $css_classes);
        return $css_classes;
}
add_filter('nav_menu_css_class', 'change_menu_classes');


//allow tags in category description
$filters = array('pre_term_description', 'pre_link_description', 'pre_link_notes', 'pre_user_description');
foreach ( $filters as $filter ) {
    remove_filter($filter, 'wp_filter_kses');
}


//Make WP Admin Menu HTML Valid
function wp_admin_bar_valid_search_menu( $wp_admin_bar ) {
	if ( is_admin() )
		return;

	$form  = '<form action="' . esc_url( home_url( '/' ) ) . '" method="get" id="adminbarsearch"><div>';
	$form .= '<input class="adminbar-input" name="s" id="adminbar-search" tabindex="10" type="text" value="" maxlength="150" />';
	$form .= '<input type="submit" class="adminbar-button" value="' . __('Search') . '"/>';
	$form .= '</div></form>';

	$wp_admin_bar->add_menu( array(
		'parent' => 'top-secondary',
		'id'     => 'search',
		'title'  => $form,
		'meta'   => array(
			'class'    => 'admin-bar-search',
			'tabindex' => -1,
		)
	) );
}
function fix_admin_menu_search() {
	remove_action( 'admin_bar_menu', 'wp_admin_bar_search_menu', 4 );
	add_action( 'admin_bar_menu', 'wp_admin_bar_valid_search_menu', 4 );
}
add_action( 'add_admin_bar_menus', 'fix_admin_menu_search' );

//Custom filter metabox
add_action('admin_menu', 'remove_autop_meta');
function remove_autop_meta() {
 if ( function_exists('add_meta_box') ) {
  add_meta_box('remove_autop_meta', 'Disable filters', 'remove_autop_meta_box', 'page', 'side');
 }
}

function remove_autop_meta_box() {
 global $post;

 wp_nonce_field( 'remove_autop', '_remove_autop_nonce', false, true );
 $is_new = intval(get_post_meta( $post->ID, '_remove_autop', true)) ? 1 : 0;
 
 ?>

 <p>
  <label for="remove_autop_checkbox">Disable filters</label>
  <input name="is_remove_autop" type="checkbox" id="remove_autop_checkbox" value="1"<?php if ($is_new) echo ' checked="checked"'?> />
 </p>
 <?php
}

add_action('wp_insert_post', 'remove_autop_post');

function remove_autop_post($post_id) {
 if ( wp_verify_nonce( $_REQUEST['_remove_autop_nonce'], 'remove_autop' )) {
  if (isset( $_POST['is_remove_autop']) &&  $_POST['is_remove_autop'])
   update_post_meta($post_id, '_remove_autop', intval($_POST['is_remove_autop']));
  else
   delete_post_meta($post_id, '_remove_autop');
 }
}

add_action('the_post', 'disable_autop_before_loop');
function disable_autop_before_loop() {
	if (get_post_meta(get_the_ID(), '_remove_autop', true)) {
		remove_filter('the_content', 'wpautop');
	}
}

add_action('loop_end', 'enable_autop_after_loop');
function enable_autop_after_loop() {
	add_filter('the_content', 'wpautop');
}


// Language Select Code for non-Widget users
function qtrans_generateLanguageSelectCode_custom($style='', $id='') {
	global $q_config;
	if($style=='') $style='text';
	if(is_bool($style)&&$style) $style='image';
	if(is_404()) $url = get_option('home'); else $url = '';
	if($id=='') $id = 'qtranslate';
	$id .= '-chooser';
	switch($style) {
		case 'image':
		case 'text':
		/*case 'dropdown':
			echo '<ul class="qtrans_language_chooser" id="'.$id.'">';
			foreach(qtrans_getSortedLanguages() as $language) {
				$classes = array('lang-'.$language);
				if($language == $q_config['language'])
					$classes[] = 'active';
				echo '<li class="'. implode(' ', $classes) .'"><a href="'.qtrans_convertURL($url, $language).'"';
				// set hreflang
				echo ' hreflang="'.$language.'" title="'.$q_config['language_name'][$language].'"';
				if($style=='image')
					echo ' class="qtrans_flag qtrans_flag_'.$language.'"';
				echo '><span';
				if($style=='image')
					echo ' style="display:none"';
				echo '>'.$q_config['language_name'][$language].'</span></a></li>';
			}
			echo "</ul><div class=\"qtrans_widget_end\"></div>";
			if($style=='dropdown') {
				echo "<script type=\"text/javascript\">\n// <![CDATA[\r\n";
				echo "var lc = document.getElementById('".$id."');\n";
				echo "var s = document.createElement('select');\n";
				echo "s.id = 'qtrans_select_".$id."';\n";
				echo "lc.parentNode.insertBefore(s,lc);";
				// create dropdown fields for each language
				foreach(qtrans_getSortedLanguages() as $language) {
					echo qtrans_insertDropDownElement($language, qtrans_convertURL($url, $language), $id);
				}
				// hide html language chooser text
				echo "s.onchange = function() { document.location.href = this.value;}\n";
				echo "lc.style.display='none';\n";
				echo "// ]]>\n</script>\n";
			}
			break;*/
		case 'dropdown':
			?>
			<form action="#">
				<div>
					<label for="sel1" class="hidden">language</label>
					<select class="lang" id="sel1" onchange="document.location = this.value;" >
					<?php 
						foreach(qtrans_getSortedLanguages() as $language) {
							$active = ($language == $q_config['language']) ? ' selected="selected"' : '';
							echo '<option'.$active.' value="'.qtrans_convertURL($url, $language).'">'.$q_config['language_name'][$language].'</option>';
						} ?>
					</select>
					<input type="submit" class="hidden" value="submit"/>
				</div>
			</form>
			<?php 
			break;
		case 'both':
			echo '<ul class="qtrans_language_chooser" id="'.$id.'">';
			foreach(qtrans_getSortedLanguages() as $language) {
				echo '<li';
				if($language == $q_config['language'])
					echo ' class="active"';
				echo '><a href="'.qtrans_convertURL($url, $language).'"';
				echo ' class="qtrans_flag_'.$language.' qtrans_flag_and_text" title="'.$q_config['language_name'][$language].'"';
				echo '><span>'.$q_config['language_name'][$language].'</span></a></li>';
			}
			echo "</ul><div class=\"qtrans_widget_end\"></div>";
			break;
	}
}

?>