---
layout: default
description: mofmofとは

# Body Class
body_class_name: works

# Main Visual
main_title_text_jp:
main_title_text_en1: WORKS
main_title_text_en2:
h1_page_title: 開発実績

# Page Navigation

# Navigation Left
page_nav_left_imagepath: /images/small_service.png
page_nav_left_path: /service
page_nav_btn_left_text: サービス

# Navigation Right
page_nav_right_imagepath: /images/small_about.png
page_nav_right_path: /about
page_nav_btn_right_text: mofmofとは
---

{% include mainvisual.html %}

<section>
	<h1 class="page_title">{{page.h1_page_title}}</h1>

{% include works.html %}

</section>

{% include footernav.html %}