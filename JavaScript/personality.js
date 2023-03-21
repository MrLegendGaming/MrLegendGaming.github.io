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
    var pan_bg = document.getElementById("screen-image");
    var pan_bar = document.getElementById("personality-text");
    if(x.includes("SCIENCE")) {
        pan_bg.style.setProperty("--pan-background", "url(https://free4kwallpapers.com/uploads/originals/2018/11/20/blue-nebula-wallpaper.jpg)");
        pan_bar.style.setProperty("--personality1", "rgba(9, 26, 41, 0.7)");
        pan_bar.style.setProperty("--personality2", "rgba(9, 26, 41, 0.5)");


        x = "SCIENCE";

    } else if(x.includes("PHILOSOPHY")) {
        pan_bg.style.setProperty("--pan-background", "url(https://churchlifejournal.nd.edu/assets/432591/1200x/athena_looking_over_plato.jpg)");
        pan_bar.style.setProperty("--personality1", "rgba(138, 139, 137, 0.7)");
        pan_bar.style.setProperty("--personality2", "rgba(138, 139, 137, 0.5)");

        x = "PHILOSOPHY";

    } else {
        pan_bg.style.setProperty("--pan-background", "url(https://cdn.wallpapersafari.com/91/52/0sVmFi.jpg)");
        pan_bar.style.setProperty("--personality1", "rgba(103, 109, 82, 0.7)");
        pan_bar.style.setProperty("--personality2", "rgba(103, 109, 82, 0.5)");

        x = "RAPPORT";
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

let aboutMeParagraph = ["I am a 17 year old student who loves physics, cosmology, and quantum physics. Ever since I was a child, I have been fascinated by the mysteries of nature and the universe. I enjoy reading books and articles on these topics, watching documentaries and lectures, and doing experiments at home or at school. Physics is not just a subject for me, but a way of exploring reality and discovering new possibilities. One of my main interests in cosmology is the study of the origin, structure, and evolution of the universe. I am amazed by how cosmic inflation, driven by an inflaton field, can explain the large-scale features of our observable universe. I also wonder about what lies beyond our horizon, whether there are other universes in a multiverse, and how quantum gravity could unify general relativity and quantum mechanics. Another area that captivates me is quantum physics, I am intrigued by how quanta behave very differently from macroscopic matter, exhibiting phenomena such as wave-particle duality, superposition, entanglement and tunneling. I also want to learn more about how quantum physics can enable new technologies that use quantum information, such as quantum computing and cryptography.",

"Life is a test of empathy. Understanding the people around me is one of the most important aspects I think of in my everyday life. Every person, whether a friend or a foe has their own story behind their entire personality. Everything happened for a reason and I understand that every human being is inherently suffering from their own struggles. If I dislike a person's behaviour towards me or anyone, there is no reason to loathe them for it, communicating with them to see if they can stop with it helps. For example, bullies are a common characteristic among children and teenagers inside of educational institutions, although one may think that they are like that because they enjoy hurting others, it may not be entirely the case. Humans by nature nourish power, back home they may be going through a certain challenge in their personal life which is causing them to act that way. From family problems to genuinely just not understanding the difference between right and wrong and self-reflecting on their own actions on themselves. This is one of the reasons to why I believe showing kindness to people whether it is a loved one or a complete stranger is vital for everyone, I can never know what someone is going through and how an act of kindness can change their entire outlook on life.",

"I believe that genuine and long-lasting friendships form from the combination of trust, rapport, empathy, and care. To me, having marvellous friends is incredibly important and I take great effort to make sure that I cultivate strong and meaningful relationships. I believe that I possess a type of sixth sense in understanding their needs and feelings. I strive to be a dependable and loyal confidant for them, with whom they can turn to for help and advice. I always attempt to display my gratitude for their support and presence in my own life. I like to embrace the moments we share together, including the laughs, tears, hugs, and conversations; all of which I recognize as an opportunity to create a closer bond. I am deeply compassionate when it comes to them, understanding that they have their own struggles that they need to deal with, and that it's not always easy. Above all, I value kindness, love, and respect when it comes to building a strong rapport with friends. I like to think of friendship as a journey, not a destination, and am always willing to be there to lend my support. Since I believe in developing strong relationships, I always strive to be there for them through thick and thin, and provide a shoulder to lean on or an opportunity to vent."];