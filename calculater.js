var main = function() {
 var text="";
  var num1="";
  var num2="";
  var a=0;
  var b=0;
  var symbol="";
  $(".number").click(function(){
    text += $(this).attr('value');
    $(".input1").val(text);
    if($(this).attr('value') == "="){
      if(symbol == "+"){
      var ans = +num1 + +num2;
      $(".input1").val(ans);
        b=1;
      }
      else if(symbol === "-"){
      var ans = num1 - num2;
      $(".input1").val(ans);
      b=1;
      }
      else if(symbol == "/"){
      var ans = num1 / num2;
      $(".input1").val(ans);
      b=1;
      }
      else if(symbol == "*"){
      var ans = num1 * num2;
      $(".input1").val(ans);
      b=1;
      }
      else{
        $(".input1").val("ERROR");
      }
    }
    if($.isNumeric($(this).attr('value'))){
      if(a==0){
      num1 += $(this).attr('value');
      }
 else {
     num2 += $(this).attr('value');
    }
    }
    else{
      a=1;
      symbol=$(this).attr('value');

    }

});
  $(".Clear").click(function(){
  num1 = "";
    num2 = "";
    text="";
    symbol="";
    a=0;
    $(".input1").val(text);
  });
}
$(document).ready(main);