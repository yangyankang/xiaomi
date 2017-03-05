$(function () {
    tobBar();
    header();
    main();
    content();
});
//顶部导航条
function tobBar() {
    // console.log($('.car'));
    $('.topbar-car').on('mouseover', function () {
        $('.car_menu').animate({height: 98, paddingTop: 32}, .3);
        $('.car_menu').css({'display': 'block', 'opacity': 1});
        $('.topbar-car>a').css({'background': '#fff', 'color': '#ff6700'});
    });
    $('.topbar-car').on('mouseout', function () {
        $('.car_menu').animate({height: 0, paddingTop: 0}, .3);
        $('.car_menu').css('opacity', 0);
        $('.topbar-car>a').css({'background': '#424242', 'color': '#b0b0b0'});
    });
}
// 头部部分
function header() {
    // tab切换

    $('.header_nav').on('mouseover', function () {
        $('.header_nav_menu').animate({height: 230}, .3);
        $('.header_nav_menu').css('borderTop', '1px solid #e0e0e0');
        $('.header_nav_menu').show();
        $('.nav_item').on('mouseover', function () {
            $('.header_nav_menu .menu').eq($(this).index()).show().siblings().hide();
        });
    });
    $('.header_nav_menu').on('mouseout', function () {
        $('.header_nav_menu').animate({height: 0}, .3);
        $('.header_nav_menu').css('border', 'none');
    });

    // header_search部分
    $('.hSearch_text').on('focus', function () {
        $('.search-hot-words').css('display', 'none');
        $('.hSearch_text,.hSearch_icon ').css('borderColor', '#ff6700')
        $('.keyword_list').css('display', 'block');
    });
    $('.hSearch_text').on('blur', function () {
        $('.search-hot-words').css('display', 'block');
        $('.hSearch_text,.hSearch_icon ').css('borderColor', '#e0e0e0')
        $('.keyword_list').css('display', 'none');
    });

    // header_catalory部分
    $('.category_item').on('mouseover', function () {
        $('.children').show();
        $('.chidren_list').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    });
    $('.chidren_list').on('mouseout', function () {
        $('.children').on('mouseover', function () {
            $('.children').show();
        });
        $('.children').on('mouseout', function () {
            $('.children').hide();
        });

    });

}

// main部分
function main() {
    //轮播图
    var index = 0;
    var count = 0;
    $('.arrowR').on('click', function () {
        index++;
        if (index > 4) {
            index = 0;
        }
        // $('.banner-item').eq(index).show().siblings().hide();
        ani();
        $('.circle_item').eq(index).children().addClass('active').parent().siblings().children().removeClass('active');

    });
    $('.arrowL').on('click', function () {
        index--;
        if (index < 0) {
            index = 4;
        }
        // $('.banner-item').eq(index).show().siblings().hide();
        ani();
        $('.circle_item').eq(index).children().addClass('active').parent().siblings().children().removeClass('active');
    });

    $('.circle_item').on('click', function () {
        count = $(this).index();
        $(this).children().addClass('active').parent().siblings().children().removeClass('active');
        $('.banner-item').eq(count).fadeIn().siblings().hide();
        index = count;
    });

    // 自动轮播
    function auto() {
        index++;
        if (index > 4) {
            index = 0;
        }
        ani();
        $('.circle_item').eq(index).children().addClass('active').parent().siblings().children().removeClass('active');
    }

    var timer = null;
    $('.banner').on('mouseover', function () {
        clearInterval(timer);
    });
    $('.banner').on('mouseout', function () {
        timer = setInterval(auto, 2000);
    });
    function ani() {
        $('.banner-item').eq(index).fadeIn().siblings().hide();
    }
}

// 小米明星名单轮播
function xm_starsGoods() {

}

// 内容部分
function content() {
    var liWidth = $('.content_banner>ul li').eq(0).width();
    var length = $('.content_banner').length;
    console.log($('.content_arrowR'));
    var pic;
    $('.content_arrowR').each(function (index, ele) {
        var count = 0;
        $(ele).on('click', function () {
            count++;
            if (count >= 3) {
                count = 2;
                console.log('count4:'+count);
                return false;
            }
            $('.content_banner').eq(index).children('ul').animate({left: -count * liWidth}, 500);
            $('.content_circle').eq(index).find('.circle').eq(count).addClass('circle_active').siblings().removeClass('circle_active');
        });
        $('.content_arrowL').eq(index).on('click', function () {
            count--;
            if (count <= -1) {
                count = 0;
                console.log('count3:'+count);
                return false;
            }
            $('.content_banner').eq(index).children('ul').animate({left: -count * liWidth}, 500);
            $('.content_circle').eq(index).find('.circle').eq(count).addClass('circle_active').siblings().removeClass('circle_active');
            console.log('count2:' + count);
        });
    });


}