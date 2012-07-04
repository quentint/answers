<?php
/*
Plugin Name: Admin Menu Editor Pro
Plugin URI: http://w-shadow.com/admin-menu-editor-pro/
Description: Lets you directly edit the WordPress admin menu. You can re-order, hide or rename existing menus, add custom menus and more. 
Version: 1.20
Author: Janis Elsts
Author URI: http://w-shadow.com/
Slug: admin-menu-editor-pro
PluginAPI: http://w-shadow.com/custom-plugin-api/
*/

//Load the plugin
require dirname(__FILE__) . '/includes/menu-editor-core.php';
$wp_menu_editor = new WPMenuEditor(__FILE__, 'ws_menu_editor_pro');

//Load Pro version extras
$ws_me_extras_file = dirname(__FILE__).'/extras.php';
if ( file_exists($ws_me_extras_file) ){
	include $ws_me_extras_file;
}
