<?php
$postCustom;
function getLangMeta($key) {
	global $postCustom;
	if (empty($postCustom)) $postCustom=get_post_custom();

	$langCode=strtolower(qtrans_getLanguage());
	if (empty($langCode)) $langCode='en';

	$langKey="$key-$langCode";
	return array_key_exists($langKey, $postCustom) ? $postCustom[$langKey][0] : "Missing field: $langKey!";
}
function _lc() {
    $langCode=strtolower(qtrans_getLanguage());
    echo empty($langCode) ? 'en' : $langCode;
}
function _lm($key) {
    echo getLangMeta($key);
}

//$browserDetails;
function _svg($name, $width, $height, $class='') {
	/*global $browserDetails;
	if (empty($browserDetails)) $browserDetails=get_browser();*/
	$path=get_bloginfo('template_url').'/public/';
	echo '<!--[if !IE]>--><img src="'.$path.$name.'.svg" width="'.$width.'" height="'.$height.'" alt="" class="'.$class.'" /><![endif]-->
	<!--[if lt IE 9]><object src="'.$path.$name.'.svg" classid="image/svg+xml" width="'.$width.'" height="'.$height.'" class="'.$class.'"><![endif]-->
	<!--[if gte IE 9]><object data="'.$path.$name.'.svg" type="image/svg+xml" width="'.$width.'" height="'.$height.'" class="'.$class.'"><![endif]-->'."\n";
}
?>