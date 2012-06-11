<?php $sq = get_search_query() ? get_search_query() : 'Enter search terms&hellip;'; ?>
<form method="get" class="search" id="searchform" action="<?php bloginfo('url'); ?>" >
	<fieldset>
		<input type="text" name="s" value="<?php echo $sq; ?>" />
		<input type="submit" value="Search" />
	</fieldset>
</form>