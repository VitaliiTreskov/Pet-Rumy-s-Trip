window.addEventListener('DOMContentLoaded', () => {
    
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
});