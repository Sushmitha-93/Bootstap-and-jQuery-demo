  $(document).ready(function(){

    $("#click").click(function(){
      $(this).css("background-color", "yellow");
    });

    $("#dblclick").dblclick(function(){
      $(this).css("background-color", "pink");
    });

    $("#mouseenter").mouseenter(function(){
      $(this).css("background-color", "cyan");
    });

    $("#mouseleave").mouseleave(function(){
      $(this).css("background-color","greenyellow");
    });

    $("#hover").hover(function(){
      $(this).css("background-color","red");
    },
    function(){
      $(this).css("background-color","white");
    });

    $("#mousedown").mousedown(function(){
      $(this).css("background-color", "gold");
    });

    $("#mouseup").mouseup(function(){
      $(this).hide();
    });

    // KEYBOARD Events
    $("#keypress").keypress(function(){
      $(this).css("background-color", "greenyellow");
    });

    $("#keydownup").keydown(function(){
      $(this).css("background-color","yellow");
    });
    $("#keydownup").keyup(function(){
      $(this).css("background-color","aqua");
    });

    // FORM prevents
    $("input.focusblur").focus(function(){
      $(this).css("background-color","lightgrey");

      $(this).val("In Focus");
    });

    $("input.focusblur").blur(function(){
      $(this).css("background-color","white");

      $(this).val("In Blur");
    });

    // HIDE or SHOW
    $("#hidebtn").click(function(){
      $("#hideshow").hide();
    });

    $("#showbtn").click(function(){
      $("#hideshow").show();
    });

    $("#togglebtn").click(function(){
      $("#hideshow").toggle();
    });

    $("#togglespdbtn").click(function(){
      $("#hideshow").toggle(1000);
    });


  }); //end of ready()
