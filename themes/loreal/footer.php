        <!-- footer -->
        <footer id="footer">
            <h3>ACCES RAPIDE</h3>
            <?php if(is_active_sidebar('menus-sidebar')):?>
                <!-- links -->
                <div class="links">
                    <div class="frame">
                        <?php dynamic_sidebar('menus-sidebar');?>
                    </div>
                </div>
            <?php endif;?>
        </footer>
    </div>
</div>
<!-- skip-link -->
<div class="skip-link"><a href="#wrapper">Back to Top</a></div>
<?php wp_footer();?>
</body>
</html>