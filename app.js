var swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    loop:true
  });

  

  const menuToogle = document.querySelector('.toogle');
  const nevigation = document.querySelector('.nevigation');

  menuToogle.addEventListener("click" , toogleMenu);
  
  function toogleMenu(){
    nevigation.classList.toggle('active');
}