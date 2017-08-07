# mofmof site

## Quickstart

- jekyllをインストール
[https://github.com/jekyll/jekyll](https://github.com/jekyll/jekyll)

- プロジェクト内でjekyllコマンド実行

```
jekyll s
```

## Settings

### サイト全体

_config.yml を参照し、適宜変更してください。

### _postsのURL

_postsで生成されるファイルの出力先は、個別のmdファイル内、ymlformatterに記載。  
ファイル名の"yyyy-mm-dd-"の部分は表示されない。  

ex. /_posts/2017-07-30-interview05.md

```
# Posts destination
categories: interview/
```
URL: localhost:4000/interview/interview05.html  

ex. /_posts/2017-07-30-dialog01.md

```
# Posts destination
categories: interview/dialog

```
URL: localhost:4000/interview/dialog/dialog01.html

## Notes

### 使用しているプラグイン等

#### jquery

- [googleマップAPI](http://maps.google.com/maps/api/js?key=AIzaSyC4uyAacIM5kK-qPRDw3tJfEBYtdbhAJgo)
- [query本体](https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js)
- queryプラグイン
	- [easing](https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js)
 	- feed取得（クロスドメイン対応）
  		- [https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js](https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js)
  		- [https://rawgit.com/padolsey-archive/jquery.fn/master/cross-domain-ajax/jquery.xdomainajax.js](https://rawgit.com/padolsey-archive/jquery.fn/master/cross-domain-ajax/jquery.xdomainajax.js)
 	- スライダー
  		- [slick](http://kenwheeler.github.io/slick/)


#### gulp

gulpで静的サーバ＋ライブリロード開始。使用しなくても可。
[gulp-jekyll-livereload](https://github.com/roana0229/gulp-jekyll-livereload)


