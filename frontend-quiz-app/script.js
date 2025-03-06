document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('darkmode-toogle');
    const light = document.querySelector('#light_mode img');
    const dark = document.querySelector('#dark_mode img');
    const text = document.getElementById('h1');
    const mediumText = document.getElementById('h2');
    const samllText = document.getElementById('p');
    const html = document.querySelector('[id*="quiz_html"]');
    const css = document.querySelector('[id*="quiz_css"]');
    const js = document.querySelector('[id*="quiz_js"]');
    const accessibility = document.querySelector('[id*="quiz_accessibility"]');
    const html_2 = document.getElementById('quiz_html');
    const css_2 = document.getElementById('quiz_css');
    const js_2 = document.getElementById('quiz_js');
    const accessibility_2 = document.getElementById('quiz_accessibility');
    const score = document.getElementById('score');
    
    let mode = localStorage.getItem('darkmode');
    if (mode === 'true') {
        button.checked = true;
        applyDarkMode(); 
    } else {
        button.checked = false;
        applyLightMode();
    }

    button.addEventListener('click', function () {
        if (button.checked) {
            applyDarkMode();
            localStorage.setItem('darkmode', 'true');
        } else {
            applyLightMode();
            localStorage.setItem('darkmode', 'false');
        }
    });

    function applyDarkMode() {
        document.documentElement.style.setProperty('--border_color', 'hsl(187, 19.10%, 90.80%)');
        document.body.style.backgroundColor = 'hsl(215.63, 24.62%, 25.49%)';
        document.body.style.backgroundImage = 'url("/frontend-quiz-app/starter-code/assets/images/pattern-background-desktop-dark.svg")';
        text.style.color = 'white';
        if(window.location.pathname.includes("/")) {
            if(samllText)samllText.style.color = 'white';
        }
        if (mediumText) {
            mediumText.style.color = 'white';
        }        
        if(score)score.style.backgroundColor = 'hsl(216, 26%, 32%)';
        if(html)html.style.backgroundColor = 'hsl(216, 26%, 32%)';
        if(css)css.style.backgroundColor = 'hsl(216, 26%, 32%)';
        if(js)js.style.backgroundColor = 'hsl(216, 26%, 32%)';
        if(accessibility)accessibility.style.backgroundColor = 'hsl(216, 26%, 32%)';
        if(html)html.style.color = 'white';
        if(css)css.style.color = 'white';
        if(js)js.style.color = 'white';
        if(accessibility)accessibility.style.color = 'white';
        if(light)light.src = '/frontend-quiz-app/starter-code/assets/images/icon-sun-dark.svg';
        if(dark)dark.src = '/frontend-quiz-app/starter-code/assets/images/icon-moon-light.svg';
    }

    function applyLightMode() {
        document.documentElement.style.setProperty('--border_color', 'hsl(216, 26%, 32%)');
        document.body.style.backgroundColor = 'hsl(217, 19%, 73%)';
        document.body.style.backgroundImage = 'url("/frontend-quiz-app/starter-code/assets/images/pattern-background-desktop-light.svg")';
        text.style.color = 'rgb(45, 57, 73)';
        if(window.location.pathname.includes("/")) {
            if(samllText)samllText.style.color = 'rgb(45, 57, 73)';
        }
        if (mediumText) {
            mediumText.style.color = 'rgb(45, 57, 73)';
        }        
        if(html)html.style.backgroundColor = 'hsl(187, 19.10%, 90.80%)';
        if(css)css.style.backgroundColor = 'hsl(187, 19.10%, 90.80%)';
        if(js)js.style.backgroundColor = 'hsl(187, 19.10%, 90.80%)';
        if(accessibility)accessibility.style.backgroundColor = 'hsl(187, 19.10%, 90.80%)';
        if(html)html.style.color = 'rgb(45, 57, 73)';
        if(css)css.style.color = 'rgb(45, 57, 73)';
        if(js)js.style.color = 'rgb(45, 57, 73)';
        if(accessibility)accessibility.style.color = 'rgb(45, 57, 73)';
        if(light)light.src = '/frontend-quiz-app/starter-code/assets/images/icon-sun-light.svg';
        if(dark)dark.src = '/frontend-quiz-app/starter-code/assets/images/icon-moon-dark.svg';
    }

    if (html_2) {
        html_2.addEventListener('click', function () {
            localStorage.setItem('quiz', 0);
            localStorage.setItem('color', 'rgb(238, 223, 215)');
        });
    }
    
    if (css_2) {
        css_2.addEventListener('click', function () {
            localStorage.setItem('quiz', 1);
            localStorage.setItem('color', 'hsl(126, 40%, 90%)');
        });
    }
    
    if (js_2) {
        js_2.addEventListener('click', function () {
            localStorage.setItem('quiz', 2);
            localStorage.setItem('color', 'hsl(212, 52%, 89%)');
        });
    }
    
    if (accessibility_2) {
        accessibility_2.addEventListener('click', function () {
            localStorage.setItem('quiz', 3);
            localStorage.setItem('color', 'hsl(306, 37%, 90%)');
        });
    }
    

});
