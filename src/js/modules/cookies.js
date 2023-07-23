export function initCookies() {
    const acceptCookiesBtn = document.getElementById('accept-cookies-btn');
    const declineCookiesBtn = document.getElementById('decline-cookies-btn');
    const cookiesPopup = document.querySelector('.cookies');
    const cookiesAccepted = document.cookie.indexOf('accepted-cookies=') > -1;
    
    if (cookiesAccepted) {
      cookiesPopup.style.display = 'none';
    }
    else{
        cookiesPopup.style.display = 'block';
    }

    acceptCookiesBtn.addEventListener('click', function() {
      document.cookie = 'accepted-cookies=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
      cookiesPopup.style.display = 'none';
    });
    
    declineCookiesBtn.addEventListener('click', function() {
      document.cookie = 'accepted-cookies=false; expires=Fri, 31 Dec 9999 23:59:59 GMT';
      cookiesPopup.style.display = 'none';
    });
    
}
