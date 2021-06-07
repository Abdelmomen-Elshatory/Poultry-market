$(document).ready(function() {
    'use strict';

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
        interval: 3000
    })

    // Start popup

    $(".our-card").click(function () {
        $("." + $(this).data("popup")).fadeIn()
    })

    $(".our-popup .inner").click(function (e) {
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


    // Image Preview

    document.getElementById('pro-image').addEventListener('change', readImage, false);

    $(".preview-images-zone").sortable();

    $(document).on('click', '.image-cancel', function () {
        let no = $(this).data('no');
        $(".preview-image.preview-show-" + no).remove();
    });
        });












// Vanilla JS




// Image Preview

var num = 1;
function readImage() {
    if (window.File && window.FileList && window.FileReader) {
        var files = event.target.files; //FileList object
        var output = $(".preview-images-zone");

        for (let i = 0; i < files.length; i++) {
            var file = files[i];
            if (!file.type.match('image')) continue;

            var picReader = new FileReader();

            picReader.addEventListener('load', function (event) {
                var picFile = event.target;
                var html = '<div class="preview-image preview-show-' + num + '">' +

                    '<div class="image-zone"><img id="pro-img-' + num + '" src="' + picFile.result + '"></div>' +
                    '<div class="image-cancel" data-no="' + num + '">x</div>' +
                    '</div>';

                output.append(html);
                num = num + 1;
            });

            picReader.readAsDataURL(file);
        }
        $("#pro-image").val('');
    } else {
        console.log('Browser not support');
    }
}

var remove = document.querySelectorAll(".image-cancel");

for (i = 0; i < remove.length; i++) {

    remove[i].addEventListener("click", function () {

        $(".image-zone").remove();

    }, false);
}



// confirmation message

function block() {
    confirm("هل انت متأكد من حظر هذا المستخدم");
}

function del() {
    confirm("هل انت متأكد من حذف هذا المستخدم");
}