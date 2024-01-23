console.log('inside script file');

const eventMethods = () => {
    const button1 = document.getElementById('button');
    const button2 = document.getElementById('button2');
    const buttonDiv = document.getElementById('buttonDiv');
    button1.addEventListener('click', (e)=>{
        console.log('button 1 clicked');
        e.stopPropagation(); // stops further events to be triggered.
    });

    button2.addEventListener('click', ()=>{
        console.log('button 2 clicked');
    });

    buttonDiv.addEventListener('click', (e)=>{
        console.log('buttonDiv clicked');
    });

    // false - default - bubbling
    // true - capturing

    // this way - div will fire click event, because capturing, and then i will stop prompt. button will never get clicked.

    // buttonDiv.addEventListener('click', (e)=>{
    //     console.log('buttonDiv clicked');
    //     e.stopPropagation();
    // },true);


    // preventDefault only stops the default behavour of the event. like in forms


    // Event delegation 
    // a way to delegate handling of event to a different Element. mostly to parent Element. 
    // when we add event listner to either it bubbles or captures.
    const buttonDiv2 = document.getElementById('buttonDiv2');
    buttonDiv2.addEventListener('click', (e)=>{
        console.log('buttonDiv2 clicked');
        console.log(e.target.tagName);
        if(e.target.tagName==='BUTTON'){
            e.target.innerText = 'Worked!'
        } 
        // with this same logic, all buttons inside div will have this logic.
        // no need to write 2 seperate event handlers for 2 buttons.
    }); 
};
document.addEventListener("DOMContentLoaded", ()=>{
    console.log('on load');
    //loaded when html is completely parsed.
    // this does not wait for stylesheets to load.
    // resources like images might not loaded here. 
    eventMethods();
});

window.onload = () => {
    console.log('on window load');
    // after external resources loaded - css, iframes, src images, all other resources.
    // after images as well.
}
// also, window.addEventListener('load',..), 'unload'

// window.addEventListener('beforeunload', (e)=>{
//     return e.returnValue = "test"
// })
