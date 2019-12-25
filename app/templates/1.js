$(document).ready(function () {
       $(".second_div").hide();
            $(".btn1").click(function () {
                $(".first_div").hide();
                $(".second_div").show()
            });
          $(".btn2").click(function () {
                $(".second_div").hide();
                $(".first_div").show()
        });
     });