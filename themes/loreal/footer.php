        <!-- footer -->
        <footer id="footer">
            <h3><?php _e("FAST ACCESS","answers");?></h3>
            <?php if(is_active_sidebar('menus-sidebar-'.get_locale_suffix())):?>
                <!-- links -->
                <div class="links">
                    <div class="frame">
                        <?php dynamic_sidebar('menus-sidebar-'.get_locale_suffix());?>
                    </div>
                </div>
            <?php endif;?>
        </footer>
    </div>
</div>
<!-- skip-link -->
<div class="skip-link"><a href="#wrapper"><?php _e("Back to Top","answers");?></a></div>
<?php wp_footer();?>
</body>
</html>