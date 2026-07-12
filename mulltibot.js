const chat = document.getElementById("chat");
const input = document.getElementById("userInput");


function sendMessage(){

    let text = input.value.trim();

    if(text === ""){
        return;
    }


    addMessage(text,"user");

    input.value="";


    setTimeout(()=>{

        let reply = getAnswer(text);

        typeMessage(reply);

    },600);

}



function addMessage(text,type){

    let div=document.createElement("div");

    div.className="message "+type;

    div.innerHTML=text;

    chat.appendChild(div);

    chat.scrollTop=chat.scrollHeight;

}



function typeMessage(text){

    let div=document.createElement("div");

    div.className="message bot";

    chat.appendChild(div);


    let i=0;


    let typing=setInterval(()=>{

        div.innerHTML += text.charAt(i);

        i++;

        chat.scrollTop=chat.scrollHeight;


        if(i >= text.length){

            clearInterval(typing);

        }


    },30);

}



function quickAsk(text){

    input.value=text;

    sendMessage();

}