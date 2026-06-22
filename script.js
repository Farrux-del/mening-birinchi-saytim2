function openTool(tool){
    const box = document.getElementById("toolBox");

    if(tool === "qr"){
        box.innerHTML = `
            <h3>📱 QR Code Generator</h3>
            <input id="qrText" placeholder="URL yozing">
            <button onclick="makeQR()">QR yaratish</button>
            <p id="error" style="color:red"></p>
            <div id="qrResult"></div>
        `;
    }

    else if(tool === "text"){
        box.innerHTML = `
            <h3>📝 Text Counter</h3>
            <textarea oninput="countText(this.value)"></textarea>
            <p id="count">0 harf</p>
        `;
    }

    else if(tool === "random"){
        let num = Math.floor(Math.random()*100);
        box.innerHTML = `
            <h3>🎲 Random Number</h3>
            <p style="font-size:30px;color:#00d4ff">${num}</p>
        `;
    }

    else if(tool === "ai"){
        box.innerHTML = `
            <h3>🤖 AI Chat</h3>

            <div id="chatBox" style="height:200px;overflow:auto;background:#0f172a;padding:10px;border-radius:10px;margin-bottom:10px;"></div>

            <input id="userInput" placeholder="Savol yoz...">
            <button onclick="sendMessage()">Yuborish</button>
        `;
    }

    else if(tool === "game"){
        let secret = Math.floor(Math.random()*10)+1;

        box.innerHTML = `
            <h3>🎮 Guess Game</h3>
            <p>1 dan 10 gacha son o‘yladim</p>

            <input id="guess" placeholder="Taxmin qil">
            <button onclick="checkGuess(${secret})">Tekshir</button>
        `;
    }
}

/* TEXT COUNTER */
function countText(text){
    document.getElementById("count").innerText = text.length + " ta harf";
}

/* QR CODE */
function makeQR(){
    let text = document.getElementById("qrText").value;
    let error = document.getElementById("error");

    if(!text){
        error.innerText = "❌ URL yozing!";
        return;
    }

    error.innerText = "";

    document.getElementById("qrResult").innerHTML =
        `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}">`;
}

/* 🤖 AI CHAT */
function sendMessage(){
    let input = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");

    let msg = input.value;
    if(!msg) return;

    chatBox.innerHTML += `<p><b>Sen:</b> ${msg}</p>`;
    chatBox.innerHTML += `<p><b>AI:</b> ${aiReply(msg)}</p>`;

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function aiReply(text){
    text = text.toLowerCase();

    if(text.includes("salom")) return "Salom 👋";
    if(text.includes("qalesan")) return "Yaxshi 😎";
    if(text.includes("ism")) return "Men AI botman 🤖";
    if(text.includes("youtube")) return "YouTube zo‘r 🎬";
    if(text.includes("rahmat")) return "Arzimaydi 🙂";

    return "Buni tushunmadim 🤔";
}

/* 🎮 GAME */
function checkGuess(secret){
    let guess = document.getElementById("guess").value;

    if(parseInt(guess) === secret){
        alert("🎉 To‘g‘ri topding!");
    } else {
        alert("❌ Xato! To‘g‘ri son: " + secret);
    }
}
