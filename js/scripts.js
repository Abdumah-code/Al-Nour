let currentLanguage = 'sv';

function switchLanguage() {
    const elements = document.querySelectorAll('[data-sv]');
    const button = document.querySelector('.language-switch');
    
    elements.forEach(element => {
        const svText = element.getAttribute('data-sv');
        const enText = element.getAttribute('data-en');
        const arText = element.getAttribute('data-ar');
        
        if (currentLanguage === 'sv') {
            element.innerHTML = `<p>${enText}</p>`;
        } else if (currentLanguage === 'en') {
            element.innerHTML = `<p>${arText}</p>`;
        } else {
            element.innerHTML = `<p>${svText}</p>`;
        }
    });

    // Change button text and update the current language
    const buttonSvText = button.getAttribute('data-sv');
    const buttonEnText = button.getAttribute('data-en');
    const buttonArText = button.getAttribute('data-ar');

    if (currentLanguage === 'sv') {
        button.textContent = buttonEnText;
        document.body.classList.remove('arabic');
        currentLanguage = 'en';
    } else if (currentLanguage === 'en') {
        button.textContent = buttonArText;
        document.body.classList.add('arabic');
        currentLanguage = 'ar';
    } else {
        button.textContent = buttonSvText;
        document.body.classList.remove('arabic');
        currentLanguage = 'sv';
    }
}
