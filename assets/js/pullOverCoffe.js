"use strict"

$.getScript("./assets/js/TimeCircles.js", function(){
   // alert("Script loaded but not necessarily executed.");
});

$.getScript("./assets/js/voice.js", function() {});

let pullOverCoffee = {};

var instructions = {
    "coffee": [{
        "title": "Step1",
        "text": "Bring at least 600 grams (20 oz) of water to a boil.",
        "timer": false,
        "img": "assets/Cards/bigfire.png"
    }, {
        "title": "Step2",
        "text": "Grind 30 grams of coffee (3 tbsp) to a coarseness " +
            "resembling sea salt.",
        "timer": false,
        "img": "assets/Cards/jiagong.png"
    }, {
        "title": "Step3",
        "text": "Place a filter in the dripper.",
        "timer": false,
        "img": "assets/Cards/addIngredients.png"
    }, {
        "title": "Step4",
        "text": "Pour half of the hot water over the empty filter to remove any " +
            "'papery' taste and warm your dripper. Discard rinse water.",
        "timer": false,
        "img": "assets/Cards/jiagong.png"
    }, {
        "title": "Step5",
        "text": "Add ground coffee to the filter and gently tap it to level " +
            "the surface of the grounds.",
        "timer": false,
        "img": "assets/Cards/addIngredients.png"
    }, {
        "title": "Step6",
        "text": "Place the brewer on a carafe or cup.",
        "timer": false,
        "img": "assets/Cards/addIngredients.png"
    }, {
        "title": "Step7",
        "text": "Place this entire set-up onto a digital scale, set it to zero.",
        "timer": false,
        "img": "assets/Cards/addIngredients.png"
    }, {
        "title": "Step8",
        "text": "Pour water slowly over the coffee until the digital " +
            "scale reaches 60 grams.",
        "timer": false,
        "img": "assets/Cards/addIngredients.png"
    }, {
        "title": "Step9",
        "text": "Give the coffee 30 seconds to drip.",
        "timer": true,
        "time": 30,
        "img": "assets/Cards/tianjia.png"
    }, {
        "title": "Step10",
        "text": "Pour water slowly again until the digital scale reaches 150 grams.",
        "timer": false,
        "img": "assets/Cards/addIngredients.png"
    }, {
        "title": "Step11",
        "text": "PGive coffee 45-65 seconds to elapse.",
        "timer": true,
        "time": 60,
        "img": "assets/Cards/tianjia.png"
    }, {
        "title": "Step12",
        "text": "Pour water slowly again until the digital scale reaches 250 grams.",
        "timer": false,
        "img": "assets/Cards/tianjia.png"
    }]
}

let index = 0;

pullOverCoffee.getTitle = function() {
    let title = instructions.coffee[index].title;
    $('#title').text(title);
};

pullOverCoffee.getPic = function() {
    let source = instructions.coffee[index].img;
    var img = $('<img />', {
        id: 'instruct_pic',
        class: 'cardPic',
        src: source,
        alt: 'Instruction Picture'
    });
    $('#ins_pic_container').empty();
    img.appendTo('#ins_pic_container');
};

pullOverCoffee.getTimer = function() {
    $('#timer').empty();
    //console.log(instructions.coffee[index].timer);
    if (!instructions.coffee[index].timer) {
        return;
    }

    // $('#timer').empty();

    var TimerDiv = $('<div />', {
        id: "CountDownTimer",
        "data-timer": instructions.coffee[index].time,
        style: 'width: 600px; heigh: 100px'
    });
    TimerDiv.TimeCircles({ time: { Days: { show: false }, Hours: { show: true } }});
    TimerDiv.appendTo('#timer')
    TimerDiv.TimeCircles().start();
};

pullOverCoffee.getInstruction = function() {
    let instruction = instructions.coffee[index].text;
    $('#instruction').text(instruction);
    $('#speech-msg').val(instruction);
    $('#voice').val("Alex");
};

pullOverCoffee.setNextBtn = function() {
    //pullOverCoffee.pauseSound();
    $('#next_btn').on('click', function() {
        index++;
        if (index >= instructions.coffee.length) {
            window.location.href='Done.html';
        } else {
            pullOverCoffee.setUp();
        }
    });
}

pullOverCoffee.setUp = function() {
    pullOverCoffee.getTitle();
    pullOverCoffee.getPic();
    pullOverCoffee.getTimer();
    pullOverCoffee.getInstruction();
    $('#speak').click();
};

pullOverCoffee.setPrevBtn = function() {
    $('#prev_btn').on('click', function() {
        //pullOverCoffee.pauseSound();
        if (index == 0) {window.location.href='Ingredients.html';}
        else {
            index--;
            pullOverCoffee.setUp();
        }
    });
}

function next() {
    $('#next_btn').click();
}

function previous() {
    $('#prev_btn').click();
}

$(document).ready( function () {
    pullOverCoffee.setUp();
    pullOverCoffee.setNextBtn();
    pullOverCoffee.setPrevBtn();
    $(window).keydown(function(e) {
        if (e.which == 32) {
            $('#next_btn').click();
        }
        e.preventDefault();
    });
    //$('#speak').click();
});
