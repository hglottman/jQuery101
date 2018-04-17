$('h1').css('color', 'blue');

$('.red-div').css('color', 'red');

$('.liGreen').css('color', 'green');

$('.liPink').css('color', 'pink');

$('#brown-div').css('color', 'brown');


function newName() {
    $('.students').append('<li>' + $('#my-input').val() + '</li>');
}; 

$('button').click(newName);





