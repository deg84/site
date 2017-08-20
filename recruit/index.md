---
layout: default
description: about page

# Body Class
body_class_name: recruit

# Main Visual
main_title_text_jp:
main_title_text_en1: RECRUIT
main_title_text_en2:
h1_page_title: 採用情報

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

<section class="section_contact">
	<h1 class="page_title">{{page.h1_page_title}}</h1>

<div class="container03">

{% include accordion.html %}

</div>
</section>

{% include entryform.html %}


{% include footernav.html %}