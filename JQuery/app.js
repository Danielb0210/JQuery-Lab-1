$( document ).ready(function() {


    //Objective 1
    $buttonDiv = $('<div></div>');
    $buttonDiv.text('Objective 1');
    $buttonDiv.addClass('button-div');
    $('body').append($buttonDiv);

    $button = $('<button></button>');
    $button.addClass('main-button');
    $button.text('Click Me!');
    $buttonDiv.append($button);

    $button.click(function() {
        alert('This is a nice message!');
    });


    //Objective 2
    $buttonTwo = $('<button></button>');
    $buttonTwo.addClass('main-button');
    $buttonTwo.text('Click Me!');
    $buttonDiv.append($buttonTwo);

    let message = 'This is text for the text box';
    $('<p>' + message + '</p>').appendTo($buttonDiv);

    $buttonTwo.click(function() {
        alert(message);
    });

    



});
