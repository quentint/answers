<!DOCTYPE html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!-- Consider specifying the language of your content by adding the `lang` attribute to <html> -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<title><?php wp_title(' | ', true, 'right'); ?><?php bloginfo('name'); ?></title>
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/all.css" />
	<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/style.css" />
	<!--[if lt IE 9]><link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/ie.css" /><![endif]-->
</head>
<body>
<noscript><div><?php _e("Javascript must be enabled for the correct page display","answers");?></div></noscript>
<!-- skip-link -->
<div class="skip-link"><a accesskey="s" href="#content"><?php _e("Skip to Content","answers");?></a></div>
<!-- wrapper -->
<div id="wrapper">