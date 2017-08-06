---
layout: default
description: mofmofとは

# Main Visual
main_title_text_jp:
main_title_text_en1: INTERVIEW
main_title_text_en2:
h1_page_title: インタビュー
main_visual_path: /interview/images/main_interview.png

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
{% include interview.html %}
</section>

<div class="container02">

<section class="section_bg_center">
<h2 class="ttl_center">CLIENT INTERVIEW <span>クライアントインタビュー</span></h2>

<div class="client_interview_items">
{% for client in site.data.interview %}
<a href="#">
	<div class="client_item clearfix">
		<span class="client_img"><img src="{{ client.imgpath }}" alt=""></span>
		<button class="button client_label">{{ client.number }}</button>
		<div class="client_comment_wrap">
		<p class="client_commnet">{{ client.comment }}</p>
		<p class="client_companname">{{ client.company }}</p>
		</div>
	</div>
</a>
{% endfor %}
</div>



</section>
</div>



{% include footernav.html %}

