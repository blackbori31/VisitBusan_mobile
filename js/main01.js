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
$('.navItem3 > a').click(function(){
    $('.nInner > .niList').show();
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

// 팝업 닫기버튼
const closeBtn = document.querySelector('.close');
const elPopup = document.querySelector('#popup');

closeBtn.onclick = function(aa){
    aa.preventDefault();            //a태그의 기본기능이 안되게 함
    elPopup.style.display = "none"; 
}
