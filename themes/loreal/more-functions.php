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
?>