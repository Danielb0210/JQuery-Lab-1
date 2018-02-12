$(document).ready(function () {


    //Objective 1
    $buttonDiv = $('<div></div>');
    $buttonDiv.addClass('button-div');
    $buttonDiv.text('Objective 1');
    $('.hover-div').before($buttonDiv);

    $button = $('<button></button>');
    $button.addClass('main-button');
    $button.text('Click Me!');
    $buttonDiv.append($button);

    $button.click(function () {
        alert('This is a nice message!');
    });


    //Objective 2
    $buttonDiv2 = $('<div></div>');
    $buttonDiv2.addClass('button-div');
    $buttonDiv2.text('Objective 2');
    $('.hover-div').before($buttonDiv2);


    $buttonTwo = $('<button></button>');
    $buttonTwo.addClass('main-button');
    $buttonTwo.text('Click Me!');
    $buttonDiv2.append($buttonTwo);

    let message = 'This is text for the text box';
    $('<p>' + message + '</p>').appendTo($buttonDiv2);

    $buttonTwo.click(function () {
        alert(message);
    });


    //Objective 3
    let $hoverDiv = $('.hover-div');
    $hoverDiv.hover(function () {
        $(this).css("background-color", "red");
    }, function () {
        $(this).css("background-color", "white");
    });


    //Objective 4
    $paraContainer = $('<div></div>');
    $paraContainer.addClass('paraContainer');
    $paraContainer.text('Objective 4');
    $para = $('<p>Click this paragraph to change colors!</p>');
    $para.addClass('font-change');
    $para.appendTo($paraContainer);
    $('.hover-div').after($paraContainer);

    $para.click(function () {
        $para.css("color", '#' + Math.floor(Math.random() * 16777215).toString(16));
    });


    //Objective 5

    $buttonDiv3 = $('<div></div>');
    $buttonDiv3.addClass('button-div');
    $buttonDiv3.text('Objective 5');
    $paraContainer.after($buttonDiv3);


    $buttonThree = $('<button></button>');
    $buttonThree.addClass('main-button');
    $buttonThree.text('Click Me!');
    $buttonThree.appendTo($buttonDiv3);


    $buttonThree.click( function(){
        $span = $('<span>Daniel</span>');
        $span.addClass('span-class');
        $buttonDiv3.append($span);
    });


    //Objective 6 

    let friends = ['Daniel', 'Josh', 'Paul', 'Nick', 'Jess', 'Mark', 'Adam', 'Melissa', 'Jordan', 'Tim'];
    let position = 0;

    $('.friend-button').click(function(){
        if(position >= friends.length) {
            alert('You have no more friends :(');
        } else {
            $friendLI = $('<li>' +  friends[position] + '</li>');
            $('.friends-list').append($friendLI);
            position++;
        }

    });



});
