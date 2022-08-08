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
  const slides = document.querySelectorAll('.offer_slide'),
        prev = document.querySelector('.offer_slider-prev'),
        next = document.querySelector('.offer_slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');
        
  showSlides(slideIndex);

  if(slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  function showSlides(n) {
    if(n > slides.length) {
      slideIndex = slides.length;
    }

    if(n < 1) {
      slideIndex = 1;
    }

    slides.forEach((item) => (item.style.display = 'none'));
    slides[slideIndex - 1].style.display = 'block';

    if(slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  next.addEventListener('click', () => {
    plusSlides(1);
  });

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });


});