$(document).ready(function(){
  $(window).scroll(function(){
    if($(document).scrollTop() > 50){
      $("nav").addClass('shrink');
    }
    else{
      $("nav").removeClass('shrink')
    }
  });
});
$(document).ready(function(){
  //BUSINESS LOGIC


  function placeOrder(size, crust, toppings) {
    this.sizeChoice = size;
    this.sizeCrust = crust;
    this.sizeTopping = toppings;


}
placeOrder.prototype.summary = function() {

  return "pizzasize: " + this.sizeChoice + ", crust:" + this.sizeCrust + ", toppings:" + this.sizeTopping;
};


//USER INTERFACE


$("#submit").click(function() {
  var size = $('#size').val();
  var crust = $('#crust').val();
  var toppings = [];
  $("input[type=checkbox]:checked").each(function() {
      toppings.push($(this).val());
  });
  console.log(toppings);

  var newOrder = new placeOrder(size, crust, toppings);
  console.log(newOrder);
  $('ul#placeorderlist').text("" + newOrder.summary() + "");

  var anotherTopping = 0;
  for (var a = 0; a < toppings.length; a++) {
      anotherTopping += parseInt(toppings[a]);
  }

  var total = parseInt(size) + parseInt(crust) + parseInt(anotherTopping);
  console.log(total);
  $("#total").text(total);
});


//FOR DELIVERY


$('#img').click(function() {

  alert("the delivery cost is ksh 1200");
  var a = prompt("enter ur location");
  alert("your order will be delivered to" + " " + a);
});

//FOR CONTACTS

$("#send").click(function(event){
  var userName=$("#name").val();
  var userEmail=$("#email").val();
  var userMessage=$("#comments").val();


/** user logic interface */


  if((userName!=="") && (userEmail !== "") && (userMessage !="")){
      alert(userName + " ,We have received your message.Thank you for reaching out to us");
  }
  else 
  {
      alert("Fill the form please");
  }
  event.preventDefault();
});

});