$(function () {
    $(".m_img").slick({

        fade: false,
        arrows:false,
        dots: true,
        autoplay: true,
        autoSpeed: 2000

    })//

    $(".mb_img").slick({
    
            fade: false,
            arrows:false,
            dots: true,
            autoplay: true,
            autoSpeed: 2000
    
        })//

    $(".submit").click(function(){
        alert("등록되었습니다.감사합니다.")

    })//
    $(".submit1").click(function(){
        alert("예약되었습니다.감사합니다.")

    })//


    $(".hbox1 div").click(function(){
        var box = $(this).index();
        
        $(".box_main form").hide();
        $(".box_main form").eq(box).show();

        $(".hbox1 div").removeClass("show")
        $(this).addClass("show");
    })  //
    $(".pop_x").click(function(){
        $("#pop").hide();
    })//

    $(".p_btn1").click(function(){
        $(".mbbox_form1").show();
    
    })//
    $(".p_btn2").click(function(){
        $(".mbbox_form2").show();
    })//

    $(".mb_close").click(function(){
        $(".mbbox_form1").hide();
    })//
    $(".mb_close").click(function(){
        $(".mbbox_form2").hide();
    })//
    $(".nav_pop").click(function(){
        $("#pop").show();
    })
    $(".nav_people").click(function(){
        $(".mbbox_form1").show();
    })
    $(".nav_re").click(function(){
        $(".mbbox_form2").show();
    })


/*     $(".menu_btn").click(function(){
        $(".m_menu").show();
    $("#main").click(function(){
        $(".m_menu").hide();
    })    
    })// */
    
    $(window).scroll(function(){
    var top = $(this).scrollTop();
    console.log(top);
    
    if(top >= 900){
        $("#header").css({"background-color": "#022c44"})
       /*  $("#pop_right").show() */
    }else{
        $("#header").css({"background-color": "rgba(8, 21, 99, 0.4)"})
        /*  $("#pop_right").hide() */
    }//
    if($(window).innerWidth()>=560 ){
        if(top >= 500){
            /* $("#header").css({"background-color": "#022c44"}) */
            $("#pop_right").show()
        }else{
            /* $("#header").css({"background-color": "rgba(8, 21, 99, 0.4)"}) */
            $("#pop_right").hide()
    }
}

})//
$("a").click(function(e){
    if( $(this).attr("href") == "#"){
        e.preventDefault()
    }
})



//pop

//pop right
$(".menu_btn").click(function(){
    $(".m_nav").toggleClass("on");
    
})

})//jqa
