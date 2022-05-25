function animateForm(){
    const arrows = document.querySelectorAll(".bi-arrow-down-circle");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', ()=>{
            const previousinput = arrow.previousElementSibling;
            const currentinput = arrow.parentElement;
            const nextinput = currentinput.nextElementSibling;
            // console.log(previousinput);
            // console.log(currentinput);
            // console.log(nextinput);

            //check validation
            if(previousinput.type == "text" && validateUser(previousinput))
            {
                nextSlide(currentinput,nextinput);
            }
            else if(previousinput.type == "email" && validateEmail(previousinput))
            {
                nextSlide(currentinput,nextinput);
            }
            else if(previousinput.type == "password" && validateUser(previousinput))
            {
                nextSlide(currentinput,nextinput);
            }else{
                currentinput.style.animation="shake 0.5s ease";
            }

            //get rid of aniamiton
            currentinput.addEventListener('animationend',()=>{
                currentinput.style.animation=""; 
            })
        });
    });
}

function nextSlide(currentinput,nextinput){
    currentinput.classList.remove('active');
    currentinput.classList.add('inactive');
    nextinput.classList.add('active');
}

function validateUser(user){
    if(user.value.length < 6){
        alert("not enough characters");
        error('red');
    }
    else{
        error('green');
        return true;
    }
}

function validateEmail(Email){
    var validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(Email.value.match(validation)){
        alert("not enough characters");
        error('red');
        return true;
    }
    else{
        error('green');
        return true;
    }
}


function error(color){
    document.body.style.backgroundColor = color;
}


animateForm();