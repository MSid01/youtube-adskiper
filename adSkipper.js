// Function to find and click the desired element
function clickElement() {
    // Replace "Your-Element-Selector" with the CSS selector of the element you want to click
    var element = document.querySelector(".ytp-ad-skip-button");
    if (element && (element.innerText === 'Skip Ad' || element.innerText === 'Skip Ads')) {
      element.click();
    }
  }
  
setInterval(clickElement, 1000);