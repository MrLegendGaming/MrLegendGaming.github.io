const personality_category = ["SCIENCE", "PHILOSOPHY", "RAPPORT"];

const age = 17;

i = 0;

let typing = 0;

let text = "An error has occured.";

var test = "";
var test2 = "";

var root = document.querySelector(':root');

const personality_para = document.getElementById("personality-paragraph");

document.querySelector(".grid").addEventListener('click', event => {
    personality_para.innerHTML = "";
    clearInterval(test);
    clearInterval(test2);
    i = 0;

    text = aboutMeParagraph[textIndex(event.target)];
    test = setInterval(function() {
        if (i < text.length) {
            personality_para.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(test);
            i = 0;
            test2 = setInterval(function() {
                if(typing === 0) {
                    personality_para.innerHTML = personality_para.textContent + "|";
                    typing = 1;
                } else {
                    personality_para.innerHTML = personality_para.textContent.replace("|", "");
                    typing = 0;
                }
            }, 530);
        }
    }, 5);

    

});

function textIndex(x) {
    x = x.innerHTML.toString(x);
    if(x.includes("SCIENCE")) {
        x = "SCIENCE"
    } else if(x.includes("PHILOSOPHY")) {
        x = "PHILOSOPHY"
    } else {
        x = "RAPPORT"
    }
    currentFile = x;
    x = personality_category.indexOf(x);

    return x;
}

function typeWriter() {
    if (i < text.length) {
      personality_para.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    } else {
        i = 0;
    }
}

//
// THESE ARE THE VARIABLES FOR THE ABOUT ME TEXT;
// 

let aboutMeParagraph = ["Hello, I am Legend, also known as MrLegendGaming / Lewend. Currently. Currently I am " + age + " years of age, born on the the 6th of Februray, 2006. Outside of the science world, I love gaming and hanging out with friends. They are my #1 priority in life as they always manage to make me happy and I promise to always protect them and make them happy in return. Having a life is enjoying every moment of time you have, every second you don't spend enjoying yourself you'll regret it later in the afterlife. You won't regret a single second where you are happy. (My belief at least. Plus, it may not be true in certain occasions).",

"EDUCATION",

"I am someone who possess extreme intereste in Physics and Cosmology. I have a lot of plans big ambitions to change the world (plans only disclosed to close friends and never fully.). I'm currently working my way to joining a University in England to obtain a Computer Science BSc and then work on getting multiple Ph.Ds in Physics or Cosmology. I love making my own theories for things (mostly science related) and one day I'm hoping to be the first person to win 3+ noble prizes."];