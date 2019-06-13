// const myHeading = document.getElementsByTagName('h1')[0];
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');

// const handleEvents = () => { myHeading.style.backgroundColor = myTextInput.value };

// myButton.addEventListener('click', handleEvents)

// document.getElementsByTagName('li').style.color = 'purple';

const listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = 'purple';
}