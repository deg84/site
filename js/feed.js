$(function() {

    // mofmof Blog

    $.ajax({
        url: "http://everyday.mof-mof.co.jp/feed",
        async: true,
        cache: false,
        dataType:"xml",
        error: function(xhr, status, error) {
            console.log(xhr.status)
            console.log(status)
            console.log(error)
            // alert('Error loading XML document');
        },
        success:function(xml){
                $(xml).find("entry:lt(4)").each(function(i,entry) {
                    var title = $(this).find('title').text();
                    var link = $(this).find('link').attr('href');
                    var published = $(this).find('published').text();
                    var date = published.slice( 0, -15 );
                    var i = $(xml).find("entry").length;
                    $("#hatena_feed").append('<li><a href="' + link + '"><span class="date">' + date + '</span><span class="article_title">' + title + '</span></a></li>');
                });
        }
    });

    // 技術blog

    $.ajax({
        url: "https://tech.mof-mof.co.jp/index.html",
        async: true,
        cache: false,
        dataType:"html",
        error: function(xhr, status, error) {
            console.log(xhr.status)
            console.log(status)
            console.log(error)
            alert('Error loading HTML document');
        },
        success:function(data){
            var p = 1;
            $(data).find('#posts:lt('+p+')').each(function() {
                var title = $(this).find('.post-title:lt('+p+')').text();
                var link = $(this).find('.postcontent a:lt('+p+')').attr('href');
                var postdate = $(this).find('.post-date:lt('+p+')').text();
                $("#blog_feed").append('<li><a href="//tech.mof-mof.co.jp' + link + '">' + title + '</a></li>');
            });
        }
    });

});
