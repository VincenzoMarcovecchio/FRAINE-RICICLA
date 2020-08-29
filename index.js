window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'it-IT';


if (SpeechRecognition == undefined) {
    alert("Il tuo browser non supporta questa funzionalita`")
}

const icon = document.querySelector('i.fa.fa-microphone')
const image = document.getElementById('img');
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
container.appendChild(paragraph);
const sound = document.querySelector('.sound');
const synth = window.speechSynthesis;

const speak = (action) => {
    utterThis = new SpeechSynthesisUtterance(action());
    synth.speak(utterThis);
};


const getTime = () => {
    const time = new Date(Date.now());
    if (time.getDay() === 1) {
        return "Today is about Humid and Organic my brother"
    } else if (time.getDay() === 2) {
        img.src = "./seccoeindifferenziato.jpg";
        return 'Motherfucking dry shit'
    } else if (time.getDay() === 3) {
        img.src = "./vetro.jpg";
        return 'gotta get those glasses'
    }
    else if (time.getDay() === 4) {
        img.src = "./umidoeorganico.jpg";
        return "Today is about Humid and Organic my brother"
    }
    else if (time.getDay() === 5) {
        img.src = "./plastica.jpg";
        return "Today is plastic"
    }
    else if (time.getDay() === 6) {
        img.src = "./cartaecartone.jpg";
        return "You're about to get the papers and cardboards"
    }
    else if (time.getDay() === 6) {
        return "I hope you have been a good person this week it's Sunday today you can relax"
    }

};


const dictate = () => {
    recognition.start();
    recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;
        paragraph.textContent = speechToText;
        if (speechToText.includes('today')) {
            speak(getTime)
        } else {
            speak(unknown)
        }
    }
}
const unknown = () => {
    img.src = "./noidea.gif"
    return "I dindt get what you said my brother"
}
icon.addEventListener('click', () => {
    sound.play();
    dictate();
});


var counter_list = [73, 10000, 10000];
var str_counter_0 = counter_list[0];
var str_counter_1 = counter_list[1];
var str_counter_2 = counter_list[2];
var display_str = "";
var display_div = document.getElementById("display_div_id");

function incrementCount(current_count) {
    setInterval(function () {
        // clear count
        while (display_div.hasChildNodes()) {
            display_div.removeChild(display_div.lastChild);
        }
        str_counter_0++;
        if (str_counter_0 > 75) {
            str_counter_0 = 73; // reset count
            str_counter_1++;    // increase next count
        }

        display_str = str_counter_0.toString();
        for (var i = 0; i < display_str.length; i++) {
            var new_span = document.createElement('span');
            new_span.className = 'num_tiles';
            new_span.innerText = `${display_str[i]}`;
            display_div.appendChild(new_span);
        }
    }, 1000);
}