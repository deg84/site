---
layout: default
description: mofmofとは

# Body Class
body_class_name: contact

# Main Visual
main_title_text_jp:
main_title_text_en1: CONTACT
main_title_text_en2:
h1_page_title: お問い合わせ

# Page Navigation

# Navigation Left
page_nav_left_imagepath: /images/small_faq.png
page_nav_left_path: /faq
page_nav_btn_left_text: よくある質問

# Navigation Right
page_nav_right_imagepath: /images/small_case.png
page_nav_right_path: /case
page_nav_btn_right_text: ケーススタディー
---

{% include mainvisual.html %}

<section class="section_contact">
	<h1 class="page_title">{{page.h1_page_title}}</h1>

<section class="section_contact">
<div class="container02 content_bg_center clearfix">

<div class="contact_text">
<h2 class="title_left_small">CONTACT FORM <span>ご相談・お問い合わせフォーム</span></h2>
<ul>
	<li>mofmofの事業に関するお問い合わせ</li>
	<li>WEBサービス開発に関するご相談</li>
	<li>開発現場改善に関するご相談　など</li>
</ul>
<p class="contact_notice">お気軽にフォームよりお問い合わせください。</p>
</div>

<div class="contact_form">
<form action="">

<div class="row">
	<div class="form_group">
		<label for="input_name">お名前</label>
		<input type="text" class="form_control" id="input_name" placeholder="">
	</div>
</div>


<div class="form_group">
<label for="input_mail">メールアドレス</label>
<input type="email" class="form_control" id="input_mail" placeholder="">
</div>
<div class="form_group">
<label for="input_textarea">内容</label>
<textarea class="form_control" rows="7" id="input_textarea" placeholder="開発をご希望のシステム、リリース希望時期、ご予算など可能な範囲にて具体的に記載頂けると幸いです。
"></textarea>
</div>

<button class="button submit button_primary">送信</button>
</form>
</div>

</div>
</section>

</section>


{% include footernav.html %}