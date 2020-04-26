


$(document).ready(function(){
  $('.gallagy__slider').slick({
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	arrow: true,
  	prevArrow: '<i class="fas fa-chevron-left gallery__arrow--prev"></i>',
  	nextArrow: '<i class="fas fa-chevron-right gallery__arrow--next"></i>',
	responsive: [
  			{
  				breakpoint: 1024,
  				settings: {
  					slidesToShow: 2,
  				}
  			},
  			{
  				breakpoint: 576,
  				settings: {
  					slidesToShow: 1,
  					arrows: false
  				}
  			},
  		] 
  });
});

$(document).ready(function(){
  $('.rewiews__slider').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	// arrow: false,
  });
});

const bar1 = document.getElementById('bar1')
const bar2 = document.getElementById('bar2')
const bar3 = document.getElementById('bar3')
const bar4 = document.getElementById('bar4')
const bar5 = document.getElementById('bar5')
//BODY_ITEM
const body1 = document.getElementById('body1')
const body2 = document.getElementById('body2')
const body3 = document.getElementById('body3')
const body4 = document.getElementById('body4')
const body5 = document.getElementById('body5')

const numbers = [bar1,bar2,bar3,bar4,bar5]

const bodys = [body1,body2,body3,body4,body5]

// bar1.onclick.map(function (elem,index){
//     bar1.classList.remove('feature__bar__item--active')
//     bar2.classList.remove('feature__bar__item--active')            
//     bar3.classList.remove('feature__bar__item--active')            
//     bar4.classList.remove('feature__bar__item--active')            
//     bar5.classList.remove('feature__bar__item--active')
//     elem.classList.add('feature__bar__item--active')

//     body1.classList.remove('feature__body__box--active')
//     body2.classList.remove('feature__body__box--active')           
//     body3.classList.remove('feature__body__box--active')           
//     body4.classList.remove('feature__body__box--active')           
//     body5.classList.remove('feature__body__box--active') 
//     bodys[index].classList.add('feature__box__item--active')
//     }

//     bar2.onclick.map(function (elem,index){
//     bar1.classList.remove('feature__bar__item--active')
//     bar2.classList.remove('feature__bar__item--active')            
//     bar3.classList.remove('feature__bar__item--active')            
//     bar4.classList.remove('feature__bar__item--active')            
//     bar5.classList.remove('feature__bar__item--active')
//     elem.classList.add('feature__bar__item--active')

//     body1.classList.remove('feature__body__box--active')
//     body2.classList.remove('feature__body__box--active')           
//     body3.classList.remove('feature__body__box--active')           
//     body4.classList.remove('feature__body__box--active')           
//     body5.classList.remove('feature__body__box--active') 
//     bodys[index].classList.add('feature__body__box--active')
//     }

bar1.onclick = () => {
    bar1.classList.add('features__item--active')
    bar2.classList.remove('features__item--active')            
    bar3.classList.remove('features__item--active')            
    bar4.classList.remove('features__item--active')            
    bar5.classList.remove('features__item--active') 

    body1.classList.add('features__body__box--active')           
    body2.classList.remove('features__body__box--active')           
    body3.classList.remove('features__body__box--active')           
    body4.classList.remove('features__body__box--active')           
    body5.classList.remove('features__body__box--active')           
}

bar2.onclick = () => {
    bar1.classList.remove('features__item--active')
    bar2.classList.add('features__item--active')            
    bar3.classList.remove('features__item--active')            
    bar4.classList.remove('features__item--active')            
    bar5.classList.remove('features__item--active') 

    body1.classList.remove('features__body__box--active')           
    body2.classList.add('features__body__box--active')           
    body3.classList.remove('features__body__box--active')           
    body4.classList.remove('features__body__box--active')           
    body5.classList.remove('features__body__box--active')           
}
bar3.onclick = () => {
    bar1.classList.remove('features__item--active')
    bar3.classList.add('features__item--active')            
    bar2.classList.remove('features__item--active')            
    bar4.classList.remove('features__item--active')            
    bar5.classList.remove('features__item--active') 

    body1.classList.remove('features__body__box--active')           
    body3.classList.add('features__body__box--active')           
    body2.classList.remove('features__body__box--active')           
    body4.classList.remove('features__body__box--active')           
    body5.classList.remove('features__body__box--active')           
}
bar4.onclick = () => {
    bar1.classList.remove('features__item--active')
    bar4.classList.add('features__item--active')            
    bar3.classList.remove('features__item--active')            
    bar2.classList.remove('features__item--active')            
    bar5.classList.remove('features__item--active') 

    body1.classList.remove('features__body__box--active')           
    body4.classList.add('features__body__box--active')           
    body3.classList.remove('features__body__box--active')           
    body2.classList.remove('features__body__box--active')           
    body5.classList.remove('features__body__box--active')           
}
bar5.onclick = () => {
    bar1.classList.remove('features__item--active')
    bar5.classList.add('features__item--active')            
    bar3.classList.remove('features__item--active')            
    bar4.classList.remove('features__item--active')            
    bar2.classList.remove('features__item--active') 

    body1.classList.remove('features__body__box--active')           
    body5.classList.add('features__body__box--active')           
    body3.classList.remove('features__body__box--active')           
    body4.classList.remove('features__body__box--active')           
    body2.classList.remove('features__body__box--active')           
}
