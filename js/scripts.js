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
});