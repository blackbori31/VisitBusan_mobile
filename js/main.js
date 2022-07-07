$('.s1').click(function(){
    $('.sb1').slideToggle();
});

$('.s2').click(function(){
    $('.sb2').slideToggle();
});

$('.s3').click(function(){
    $('.sb3').slideToggle();
});

$('.s4').click(function(){
    $('.sb4').slideToggle();
});


// Language 언어창 
$('.navItem3 > a').mouseenter(function(){
    $('.nInner > .niList').show();
});
$('.navItem3 > a').mouseleave(function(){
    $('.nInner > .niList').hide();
});
$('.nInner > .niList').mouseenter(function(){
    $(this).show();
});
$('.nInner > .niList').mouseleave(function(){
    $(this).hide();
});

// 검색창 
$('.searchBtn').click(function(){
    $('.searchTop').show();
});

// 메뉴바 엑스자 전환
$('.trigger').click(function(){
    $(this).toggleClass('close');
    if($(this).hasClass('close')){
        $('.head_mainnav').show();
    } else {
        $('.head_mainnav').hide();
        $('.searchTop').hide();
        $('.nInner > .niList').hide();
    }
});

//메인메뉴 하버될때 아이콘 전환
$('.nav > li').click(function(){
    $(this).toggleClass('on');
});


// 섹션2 광고베너 슬라이드
var imgWidth =  $('#slider img').width(); 
    var imgNumber =  $('#slider img').length; 
    var sliderUl = $('#slider>ul');

    sliderUl.css({width:imgWidth*imgNumber}); 

    setInterval(function(){
        sliderUl.animate({'margin-left':-imgWidth},2000,function(){
            sliderUl.css({'margin-left':0});
            sliderUl.find('li:first-child').insertAfter(sliderUl.find('li:last-child'));
        });
    },5000);


// 팝업 닫기버튼
const closeBtn = document.querySelector('.close');
const elPopup = document.querySelector('#popup');

closeBtn.onclick = function(aa){
    aa.preventDefault();            //a태그의 기본기능이 안되게 함
    elPopup.style.display = "none"; 
}