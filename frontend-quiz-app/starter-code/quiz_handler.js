document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('h2');
    const div = document.querySelector('.icon');
    const icon2 = document.querySelector('.icon2');
    const img = document.createElement('img');
    const img2 = document.createElement('img');
    const upper_icon = document.querySelector('.icon');
    const question = document.getElementById('h1');
    const witch_question = document.getElementById('p');
    const button_0 = document.getElementById('quiz_html_2');
    const button_1 = document.getElementById('quiz_css_2');
    const button_2 = document.getElementById('quiz_js_2');
    const button_3 = document.getElementById('quiz_accessibility_2');
    const answer_a = document.getElementById('A');
    const answer_b = document.getElementById('B');
    const answer_c = document.getElementById('C');
    const answer_d = document.getElementById('D');
    const submit_button = document.getElementById('answer_button');
    const next_or_submit = document.getElementById('submit_next');
    const pp = document.querySelector('.pp');


    const buttons = [
        document.getElementById('quiz_html_2'),
        document.getElementById('quiz_css_2'),
        document.getElementById('quiz_js_2'),
        document.getElementById('quiz_accessibility_2')
    ];

    fetch('/data.json')
        .then(res => res.json())
        .then(data => {

            let question_counter = 1;
            let score = 0;

            const quiz_type = localStorage.getItem('quiz');
            console.log(data.quizzes[quiz_type].title);
            title.textContent = data.quizzes[quiz_type].title;

            img.src = data.quizzes[quiz_type].icon;
            img.alt = 'Icon' + data.quizzes[quiz_type].title;
            div.appendChild(img);
            upper_icon.style.backgroundColor = localStorage.getItem('color');

            if(icon2){
                img2.src = data.quizzes[quiz_type].icon;
                img2.alt = 'Icon' + data.quizzes[quiz_type].title;
                icon2.appendChild(img2);
                icon2.style.backgroundColor = localStorage.getItem('color');
                const witch = document.getElementById('witch_quiz');
                witch.textContent = data.quizzes[quiz_type].title;
                let fonal_score = localStorage.getItem('quizScore');
                pp.textContent = fonal_score ;
                console.log(fonal_score+"aaaaa"+score);
                next_or_submit.textContent = "Play again";
                submit_button.addEventListener('click', function () {
                    localStorage.setItem('quizScore', 0);
                    window.location.href = '/index.html';
                    console.log('play again');
                });
            }



            update_question();
            console.log(data.quizzes[quiz_type].questions[question_counter-1].options[0]);
            function update_question() {
                
                if(window.location.pathname.includes("/quiz_page.html")){
                    question.textContent = data.quizzes[quiz_type].questions[question_counter-1].question;
                    witch_question.textContent = `Question ${question_counter} of 10`;
                    answer_a.textContent = data.quizzes[quiz_type].questions[question_counter-1].options[0];
                    answer_b.textContent = data.quizzes[quiz_type].questions[question_counter-1].options[1];
                    answer_c.textContent = data.quizzes[quiz_type].questions[question_counter-1].options[2];
                    answer_d.textContent = data.quizzes[quiz_type].questions[question_counter-1].options[3];
                }
            }

            submit_button.addEventListener('click', function () {
                console.log(score);
                if (is_set === false && window.location.href.includes("/quiz_page.html")) {
                    alert('Please select an answer');
                    return;
                } else {
                    if (next_or_submit.textContent === "Submit answer") {
                        next_or_submit.textContent = "Next question";
                        if(question_counter >= 10){
                            next_or_submit.textContent = "See results";
                        }
  
                        if(data.quizzes[quiz_type].questions[question_counter-1].options[i] === data.quizzes[quiz_type].questions[question_counter-1].answer){
                            buttons[i].style.border = '2px solid green';

                        } else if (data.quizzes[quiz_type].questions[question_counter-1].options[i] != data.quizzes[quiz_type].questions[question_counter-1].answer) {
                            buttons[i].style.border = '2px solid red';

                        }

                    } 
                    else if(question_counter >= 10){
                        window.location.href = '/result.html';
                    }else {
                        for(let i = 0; i < 4; i++){
                            buttons[i].style.border = '';
                        }
                        question_counter++;
                        update_question();
                        progress_bar();
                        next_or_submit.textContent = "Submit answer";
                    }
                }

            });

            function progress_bar() {
                const progress = document.getElementById('progress');
                progress.style.width = `${question_counter * 9.8}%`;
                is_set = false;
            }

            let i = 0;
            let is_set = false;
            if(button_0)button_0.addEventListener('click', function () {
                if (data.quizzes[quiz_type].questions[question_counter-1].options[0] === data.quizzes[quiz_type].questions[question_counter-1].answer){
                    score++;
                    localStorage.setItem('quizScore', score);
                }
                i = 0;
                is_set = true;
                //console.log(is_set);
            });
            if(button_1)button_1.addEventListener('click', function () {
                if (data.quizzes[quiz_type].questions[question_counter-1].options[1] === data.quizzes[quiz_type].questions[question_counter-1].answer){
                    score++;
                    localStorage.setItem('quizScore', score);
                }
                i = 1;
                is_set = true;
            });
            if(button_2)button_2.addEventListener('click', function () {
                if (data.quizzes[quiz_type].questions[question_counter-1].options[2] === data.quizzes[quiz_type].questions[question_counter-1].answer){
                    score++;
                    localStorage.setItem('quizScore', score);
                }
                i = 2;
                is_set = true;
            });
            if(button_3)button_3.addEventListener('click', function () {
                if (data.quizzes[quiz_type].questions[question_counter-1].options[3] === data.quizzes[quiz_type].questions[question_counter-1].answer){
                    score++;
                    localStorage.setItem('quizScore', score);
                }
                i = 3;
                is_set = true;
            });

            


        });

});
