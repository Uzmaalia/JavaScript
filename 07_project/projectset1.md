# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-c8jf3tj3?description=HTML/CSS/JS%20Starter&file=script.js,styles.css,index.html&terminalHeight=10&title=Static%20Starter)
# Solution Code

## Project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
  console.log(button);

  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
  });

});

```

## Project 2

```javascript

const form = document.querySelector('form')
//this usecase will give you empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please enter valid height ${height}`
  }
  // results.innerHTML = `${height}`
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please enter valid weight ${weight}`
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the results
    results.innerHTML = `<span>${bmi}</span>`
  }
})

```

## Project 3

```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('clock')


setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleString());
  clock.innerHTML = date.toLocaleTimeString();

}, 1000);  //1000 means dispalying the time by updating it bt 1 sec

```