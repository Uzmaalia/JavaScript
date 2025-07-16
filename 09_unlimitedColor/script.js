const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#' //'#' is usually the beginning of a hex color code in CSS (e.g., #ff0000 for red).
                    // But in this line alone, it doesn’t yet represent a full color.

    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color 
}

let intervalId //global

const startChangingColor = function(){
    if (!intervalId) {  //safety check for intervalId = null
   intervalId = setInterval(changeBgColor, 1000) 
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    } 
}

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null //km hony k bd value derefrence kr dia
}



document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
