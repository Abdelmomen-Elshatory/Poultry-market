$(document).ready(function() {
    'use strict';

    // Upload image

    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
    $(".file-upload").click();
    });

    // toggle normal & special

    $(".nor").click(function () {
        $(this).parent().siblings("i").hide();
    })

    $(".spe").click(function () {
        $(this).parent().siblings("i").show();
    })

    $(".manigproduct .our-table td i.acc").click(function() {
        $(this).hide();
        $(this).after("تم الموافقة");
    })

    $(".manigproduct .our-table td .ref").click(function() {
        $(this).hide();
        $(this).after("تم الرفض");
    })


    // carousel

    $('.carousel').carousel({
        interval: 2000
    })

    // Start popup

    $(".our-card").click(function () {
        $("." + $(this).data("popup")).fadeIn()
    })

    $(".our-popup .inner, .our-card .del").click(function (e) {
        e.stopPropagation()
    });

    $(".our-popup .close").click(function (e) {
        e.preventDefault();
        $(this).parentsUntil(".our-popup").parent().fadeOut();
    });

    $(document).keydown(function (e) {

        if (e.keyCode == 27) {
            $(".our-popup").fadeOut();
        }
    });

    $(".admin .our-nav .our-collapse form .button, .manigproduct .our-table td i.click").click(function () {
        $("." + $(this).data("popup")).fadeIn()
    })

    $(".popup .inner, .popupp .inner").click(function (e) {
        e.stopPropagation()
    });

    $(".popup .close, .popupp .close").click(function (e) {
        e.preventDefault();
        $(this).parentsUntil(".popup, .popupp").parent().fadeOut();
    });

    $(document).keydown(function (e) {

        if (e.keyCode == 27) {
            $(".popup, .popupp").fadeOut();
        }
    });


});



// Vanilla JS


document.getElementById("del").addEventListener("click", function(event){
    event.preventDefault()
    });


// confirmation message

function block() {
    confirm("هل انت متأكد من حظر هذا المستخدم");
}

function del() {
    confirm("هل انت متأكد من حذف هذا المستخدم");
}












