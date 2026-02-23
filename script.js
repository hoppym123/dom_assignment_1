//greeting base on time of the day
    const hour = new Date.getHours();
    let message;

    if(hour < 12){
        message="Good Morning! ☀️";
    }

    else if(hour < 17){
        message="Good Afternoon! 🌤️";
    }
    else if(hour < 21){
        message="Good Evening! 🌆";
    }else{
        message="Good Night! 🌙";
    };

    document.getElementById("greeting").innerText = message;

//generate profile

function generateProfile(){
    //STEP1 - get the input values

    let name = document.getElementById("nameInput").value;
    let age = document.getElementById("ageInput").value;
    let color = document.getElementById("colorInput").value;

    //STEP2 - check if name and age are empty
    let hasError = false;

    if (name === "" ) {
        document.getElementById("nameError").innerText="Name is required!";
        hasError = true;
    }else{
        document.getElementById("nameError").innerText="";
    }

    if  (age === "" ) {
        document.getElementById("ageError").innerText="Age is required!";
        hasError = true;
    }else{
        document.getElementById("ageError").innerText="";
    }
   
    if (hasError) {
        return;
    }

    //change the background to the choosing color
    document.body.style.backgroundColor = color;

    //build the senentence
    let sentence = "My name is " + name + " and I am " + age + " years old. " + "My favorite color is " + color + ".";

    document.getElementById("profileSentence").innerText=sentence;
    document.getElementById("profileOutput").style.display="block";
};

//reset the formfu
function resetForm(){
    document.getElementById("nameInput").value="";
    document.getElementById("ageInput").value="";
    document.getElementById("colorInput").value="#ffffff";

    //hide the error message
    document.getElementById("nameError").innerText="";
    document.getElementById("ageError").innerText="";

    //hide the profile output
    document.getElementById("profileOutput").style.display="none";
    document.body.style.backgroundColor="#ffffff";
}


    