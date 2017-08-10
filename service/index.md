---
layout: default
description: mofmofとは

# Main Visual
main_title_text_jp:
main_title_text_en1: SERVICE
main_title_text_en2:
h1_page_title: サービス
main_visual_path: /service/images/main_service.png
main_service_text: /service/images/main_service_text.png

# Page Navigation

# Navigation Left
page_nav_left_imagepath: /images/small_works.png
page_nav_left_path: /works
page_nav_btn_left_text: 開発実績

# Navigation Right
page_nav_right_imagepath: /images/small_case.png
page_nav_right_path: /case
page_nav_btn_right_text: ケーススタディ
---

{% include mainvisual.html %}

<section class="section_service">
	<h1 class="page_title">{{page.h1_page_title}}</h1>
	<div class="text_area">
		<p>新規事業では、ビジネスアイデアに合わせてソフトウェア設計の見直しを重ね、柔軟に進化させていくことが重要です。次々に出てくる「こうしたい」を一緒に形にしてくれる開発チームは、ビジネスの強い味方となります。<br>
		mofmofの「開発チームレンタル」のサービスは、従来の受託開発のように始めから終わりまで一続きに開発を進めるやり方ではなく、実際にソフトウェアを動かしながら、仕様変更を繰り返していく作り方を提供しています。</p>
		<p>高速に最小限のアプリケーション（MVP）を作り、検証しながら開発を繰り返す中で、「本当に欲しかったもの」を見つけていくことができます。</p>
	</div>

<section class="section_service">
	<div class="container02">
		<div class="contents_service clearfix">
			<div class="sercive_img">
			<h2 class="ttl_center_s">FEATURE <span>月額制開発チームレンタルの特徴</span></h2>
			<img src="/service/images/feature.png" alt="">
			</div>
			<div class="sercive_txt">
				<p>月額制開発チームレンタルの特徴は「対話」「合意」「確認」を重視する開発手法です。これにより顧客は望む成果物を手に入れることが可能になります。 お金を払っている以上、望むプロダクトが手に入るのが当たり前だと感じる方も多いかもしれませんが、多くのソフトウェア開発の現場では、依頼したものと完成物が異なるということや、修正を依頼したら莫大な金額を請求されるということが起きています。</p>
				<p>これら諸問題の原因は、開発開始前に一括見積もりで全て決めてしまおうとすることに起因します。ソフトウェア開発は、多くの曖昧性や不確実性を含むという点で、製造業とは明確に異なっており、本来、計画の時点で正確な見積もりを算出することは不可能とされております。</p>
				<p>月額制開発チームレンタルでは、計画には曖昧性や不確実性が含まれているという前提で、「まずは短い期限の中で開発し、できたものに対してフィードバックを得る」というサイクルを繰り返します。そうすることで、一見、当たり前だけども、実は実現するのが難しい「顧客が望むものを提供する」という観点においても、高い品質を維持しています。</p>
			</div>
		</div>
	</div>

{% include difference.html %}

</section>

{% include merit.html %}

<section class="section_service bg_right">
	<div class="container02">
	<div class="contents_service_case clearfix">
		<h2 class="ttl_left case_studies">CASE STUDIES<span>ケーススタディー</span></h2>
		<div class="sercive_case_img"><img src="/service/images/cards.png" alt=""></div>
		<div class="sercive_case_txt">
			<a href="/case/#case01">
			<div class="sercive_case_item">
			<p class="case_no">CASE.01</p>
			<p>スタートアップ起業家 Aさんの場合<br>
			〜Webでお見合いを仲介する新規ビジネスの立ち上げ〜</p>
			</div>
			</a>
			<a href="/case/#case02">
			<div class="sercive_case_item">
			<p class="case_no">CASE.02</p>
			<p>中規模ベンチャー企業の新規事業担当Bさんの場合<br>
			〜既存クライアント向けマーケティング支援ツールの開発〜</p>
			</div>
			</a>
		</div>
		</div>
	</div>
</section><!-- WORKS -->


<section class="section_service">
<div class="container02">
	<h2 class="ttl_center">DEVELOPMENT PROCESS <span>開発プロセス</span></h2>
	<div class="service_process_img"><img src="/service/images/service_process.png" alt=""></div>
	<div class="service_prosecss_items">
	<div class="service_process_box">
	<p>開発開始前</p>
	<ol>
		<li>実現したいサービスの確認(インセプションデッキ</li>
		<li>ユーザーストーリー(≒機能)の洗い出し </li>
		<li>ユーザーストーリーの見積もり(各ユーザーストーリーに要する想定工数を試算)</li>
		<li>優先順位の決定(どのストーリーから実装するかを決める)</li>
	</ol>
	</div>
	<div class="service_process_box">
	<p>開発開始後</p>
	<span>● 週に1度スプリントレビューミーティングを実施し下記の事項を行う。</span>
	<ol>
		<li>スプリントで実装した内容のデモ(稼働テスト)とフィードバック</li>
		<li>各メンバーが挙げる疑問点などの討議・情報共有</li>
		<li>新たなユーザーストーリーの作成、見積もり、優先順位の決定</li>
	</ol>
	<span>● 不定期でインセプションデッキの確認や振り返りミーティングを実施する</span>
	</div>
	</div>
	</div>
	<div class="service_tec">
		<span>採用テクノロジ</span>
		<div class="sercive_tec_img">
		<img src="/service/images/rails.png" alt="">
		<img src="/service/images/github.png" alt="">
		<img src="/service/images/aws.png" alt="">
		</div>
	</div>
</section>

<div class="img_other_items">
<a class="others_link_area" href="https://www.my-ope.net/">
	<div class="img_hover02">
	<img src="/service/images/others02.png" alt=""><p class="overlay"></p>
	</div>
</a>
<a class="others_link_area" href="http://www.sharing-economy-starter.biz/">
	<div class="img_hover04">
	<img src="/service/images/others04.png" alt=""><p class="overlay"></p>
	</div>
</a>
</div>

</section>

{% include footernav.html %}

