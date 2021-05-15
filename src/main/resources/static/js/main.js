//анимация чисел
$(function() {
	
	var numb_start1 = $(".project").text(); // Получаем начальное число
	var numb_start2 = $(".engineering").text();
	var numb_start3 = $(".reward").text();
	var numb_start4 = $(".year").text();
	
		
	$({numberValue: numb_start1}).animate({numberValue: 968}, {
		
		duration: 500, // Продолжительность анимации, где 500 = 0,5 одной    
		               // секунды, то есть 500 миллисекунд 
		easing: "linear",
			
		step: function(val) {
				$(".project").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			                }        
                        }
               );
               

    $({numberValue: numb_start2}).animate({numberValue: 989}, {
               
        duration: 500, 
        easing: "linear",
        step: function(val) {
                $(".engineering").html(Math.ceil(val));
                            }
                        }
                );
                    
    $({numberValue: numb_start3}).animate({numberValue: 13}, {
               
        duration: 500, 
        easing: "linear",
        step: function(val) {
                $(".reward").html(Math.ceil(val));
                              }
                        }
                );
                
    $({numberValue: numb_start4}).animate({numberValue: 2009}, {
               
        duration: 500, 
        easing: "linear",
        step: function(val) {
                $(".year").html(Math.ceil(val));
                              }
                        }
                );

})

// плавный переход по стрелке

$(function() {
  // при нажатии на кнопку scrollup
  $('.back_to_top').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },900);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('.back_to_top').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.back_to_top').fadeOut();
  }
});




$(function() {
  // при нажатии на кнопку scrollup
  $('.scroll-up').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },300);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('.scroll-up').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scroll-up').fadeOut();
  }
});

