window.addEventListener('DOMContentLoaded', () => {
    

    //Tabs of About my self section
    //get acsess to html elements for tabs
    const tabs = document.querySelectorAll('.tabheader_item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader_items');

          function hideTabsContent() {
            tabsContent.forEach(tab => {
                tab.classList.add('hide');
                tab.classList.remove('show', 'fade');

                tabs.forEach(tab => {
                    tab.classList.remove('tabheader_item_active');
                });
            });

          }

          function showTabsContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');

            tabs[i].classList.add('tabheader_item_active');

          }

          hideTabsContent();
          showTabsContent();
        
          
          tabsParent.addEventListener('click', (event) => {
            const target = event.target;
            
            if(target && target.classList.contains('tabheader_item')) {
                tabs.forEach((tab, i) => {
                    if(target == tab) {
                        hideTabsContent();
                        showTabsContent(i);
                    }
                });
            }
          });


  //slider of On our way section
  let slideIndex = 1;
  let offset = 0;

  const slides = document.querySelectorAll('.offer_slide'),
    slider = document.querySelector('.on-our-way-slider'),
    prev = document.querySelector('.offer_slider-prev'),
    next = document.querySelector('.offer_slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    slidesWrapper = document.querySelector('.offer_slider-wrapper'),
    slidesVeiwport = document.querySelector('.inner_slider'),
    slideWidth = window.getComputedStyle(slidesWrapper).width;
    
    // console.log(slideWidth);      

    const sliderIndicators = document.createElement('ol'),
          dots = [];

    if(slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textConten = `0${slideIndex}`;
    } else {
      total.textContent = slides.length;
      current.textContent = slideIndex;
    }

    slidesVeiwport.style.width = 100 * slides.length + '%';
    slidesVeiwport.style.display = 'flex';
    slidesVeiwport.style.transition = '.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
      slide.style.width = slideWidth;
    });

    slider.style.position = 'relative';

    sliderIndicators.classList.add('carousel-indicators');
    slider.append(sliderIndicators);

    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('li');
      dot.setAttribute('data-slide-to', i + 1);
      // dot.style.cssText = `
      //   box-sizing: content-box;
      //   flex: 0 1 auto;
      //   width: 30px;
      //   height: 6px;
      //   margin-right: 3px;
      //   margin-left: 3px;
      //   cursor: pointer;
      //   background-color: #fff;
      //   background-clip: padding-box;
      //   border-top: 10px solid transparent;
      //   border-bottom: 10px solid transparent;
      //   opacity: .5;
      //   transition: opacity .6s ease;
      //   `;

      if (i == 0) {
        dot.style.opacity = 1;
      }

      sliderIndicators.append(dot);
      dots.push(dot);
    }

    next.addEventListener('click', () => {
      if(offset == +slideWidth.slice(0, slideWidth.length - 2) * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +slideWidth.slice(0, slideWidth.length - 2);
      }
      
      
      slidesVeiwport.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length) {
        slideIndex = 1;
      } else {
        slideIndex++;
      }

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = '.5');
      dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
      if(offset == 0) {
        offset = +slideWidth.slice(0, slideWidth.length - 2) * (slides.length - 1);
      } else {
        offset -= +slideWidth.slice(0, slideWidth.length - 2);
      }
      
      console.log(`Offset: ${offset}`);

      slidesVeiwport.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 1) {
        slideIndex = slides.length;
      } else {
        slideIndex--;
      }

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = '.5');
      dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');

        slideIndex = slideTo;
        offset = +slideWidth.slice(0, slideWidth.length - 2) * (slideTo - 1);

        slidesVeiwport.style.transform = `translateX(-${offset}px)`;

        if(slides.length < 10) {
          current.textContent = `0${slideIndex}`;
        } else {
          current.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;

      });
    });
        
  // showSlides(slideIndex);

  // if(slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  // } else {
  //   total.textContent = slides.length;
  // }

  // function showSlides(n) {
  //   if(n > slides.length) {
  //     slideIndex = slides.length;
  //   }

  //   if(n < 1) {
  //     slideIndex = 1;
  //   }

  //   slides.forEach((item) => (item.style.display = 'none'));
  //   slides[slideIndex - 1].style.display = 'block';

  //   if(slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // }

  

  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // next.addEventListener('click', () => {
  //   plusSlides(1);
  // });

  // prev.addEventListener('click', () => {
  //   plusSlides(-1);
  // });


});