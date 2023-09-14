<?php
 echo 
 HtmlHelper::htmlResources([
        //HtmlHelper::mix_version('/assets/js/scripts.js'),
        ('https://cdn.jsdelivr.net/npm/sweetalert2@11'),
        ('https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'),
], 'javascript');