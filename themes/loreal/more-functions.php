<?php

include(TEMPLATEPATH.'/lib/phpUserAgent.php');

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

$userAgent;
function _svg($name, $width, $height, $class='') {
	global $userAgent;
	if (empty($userAgent)) $userAgent=new phpUserAgent();

	$path=get_bloginfo('template_url').'/public/';

	if ($userAgent->getBrowserName()=='msie') {
		if ($userAgent->getBrowserVersion()<9) {
			echo '<div class="object-wrapper '.$class.'"><object src="'.$path.$name.'.svg" classid="image/svg+xml" width="'.$width.'" height="'.$height.'" class="'.$class.'"></object></div>';
		} else {
			echo '<div class="object-wrapper '.$class.'"><object data="'.$path.$name.'.svg" type="image/svg+xml" width="'.$width.'" height="'.$height.'"></object></div>';
		}
	} else {
		echo '<img src="'.$path.$name.'.svg" width="'.$width.'" height="'.$height.'" alt="" class="'.$class.'" />';
	}
}
?>