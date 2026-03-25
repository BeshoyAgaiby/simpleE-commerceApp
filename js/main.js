$(document).ready(function () {
  $(".skitter-large").skitter({
    dots: true, // يبين النقط تحت السلايدر
    interval: 3000, // الوقت بين كل صورة والتانية (ms)
  });
});

$(".product").hover(()=> {
  let img = $(".product img"); // اختار الصورة
  if (
    img.attr("src") === "e-commerce-project-master/img/products/product1/1.png"
  ) {
    img.attr("src", "e-commerce-project-master/img/products/product1/2.png");
  } else {
    img.attr("src", "e-commerce-project-master/img/products/product1/1.png");
  }
});

$(".brand").hover( ()=> {
  // أول حاجة: كل الصور تبقى باهتة
  $(".brand img").css("opacity", "0.5");

  // الصورة اللي دوست عليها بس هي اللي تبقى واضحة
  $(this).find("img").css("opacity", "1");
});

$(document).ready(()=>{
  $('#loading .spinner').fadeOut(1000,function(){
    $('#loading').remove();
  })
})

