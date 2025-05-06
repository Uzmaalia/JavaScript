//Immediately Invoked Function Expression (IIFE)
//--> to remove global scope pollution


//named IIFE
(function chai() {
    console.log(`DB Connectd`);
    
})();


//by using arrow function
(() => {
    console.log(`DB 2 Connectd`);
    
})();

//Simple IIFE --> by passing parameters
((name) => {
    console.log(`DB Connectd to ${name}`);
    
})('uzma');
