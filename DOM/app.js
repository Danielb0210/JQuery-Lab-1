//Added to wait until all content is loaded before running script
document.addEventListener('DOMContentLoaded', function () {

    //Creating button div container to house buttons
    let buttonDiv = document.createElement('div');
    buttonDiv.className = 'button-div';
    document.body.appendChild(buttonDiv);

    //Objective 1 - Make a button appear and display alert
    let button = document.createElement('button');
    button.className = 'main-button';
    button.innerText = 'Click Me!';
    buttonDiv.appendChild(button);

    button.addEventListener('click', function () {
        alert('Hello, this is my nice message!');
    });

    //Objective 2 - Make a button and text box and display text box in alert upon click
    let buttonTwo = document.createElement('button');
    buttonTwo.className = 'main-button';
    buttonTwo.innerText = 'Click Me!';
    buttonDiv.appendChild(buttonTwo);

    let textBox = document.createElement('p');
    let insideText = 'This is text for the text box';
    textBox.innerText = insideText;
    buttonDiv.appendChild(textBox);

    buttonTwo.addEventListener('click', function () {
        alert(insideText);
    });

    //Objective 3 - Create a div with hover effect that changes background color

    let x = document.getElementById('hover-div');
    x.addEventListener('mouseover', function () {
        x.style.backgroundColor = 'red';
    });
    x.addEventListener('mouseleave', function () {
        x.style.backgroundColor = 'white';
    });

    //Objective 4 - Create a paragraph and change text color upon clicking on paragraph
    let paraDiv = document.createElement('div');
    paraDiv.className = 'para-div';
    document.body.appendChild(paraDiv);

    let para = document.createElement('p');
    para.className = 'paragraph-text';
    para.innerText = 'This is a random sentence that I created so that we can see the text change colors!';
    paraDiv.appendChild(para);

    para.addEventListener('click', function () {
        para.style.color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    });


    //Objective 5 - add a button and a div. Add a span that containers your name to the empty div when clicked.
    let buttonThreeDiv = document.createElement('div');
    buttonThreeDiv.className = 'button-div';
    document.body.appendChild(buttonThreeDiv);

    let buttonThree = document.createElement('button');
    buttonThree.className = 'main-button';
    buttonThree.innerText = 'Click Me!';
    buttonThreeDiv.appendChild(buttonThree);

    let nameDiv = document.createElement('div');
    nameDiv.className = 'para-div';
    document.body.appendChild(nameDiv);

    buttonThree.addEventListener('click', function () {
        let divText = document.createElement('span');
        divText.className = 'name';
        divText.innerText = 'Daniel';
        nameDiv.appendChild(divText);
    });

    //Objective 6 - create a button and a ul in html. use javascrip to add each friends name to ul.
    let friendsDiv = document.createElement('div');
    friendsDiv.className = 'button-div';
    document.body.appendChild(friendsDiv);

    let friends = ['Daniel', 'Jess', 'Nick', 'Paul', 'Jordan', 
    'Rob', 'Mike', 'Josh', 'Adam', 'Kim'];

    let friendsButton = document.createElement('button');
    friendsButton.className = 'main-button';
    friendsButton.innerText = 'Add Friends!';
    friendsDiv.appendChild(friendsButton);

    let friendsUL = document.createElement('ul');
    friendsUL.className = 'friends-list';
    friendsDiv.appendChild(friendsUL);

    let position = 0;

    friendsButton.addEventListener('click', function () {

        if (position >= friends.length) {
            alert('There are no more friends!');
        } else {
            let friend = document.createElement('li');
            friend.innerText = friends[position];
            friendsUL.appendChild(friend);
            position++;
        }       
     
    });

});