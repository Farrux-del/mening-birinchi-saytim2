function openTool(tool){
    const box = document.getElementById("toolBox");

    if(tool === "qr"){
        box.innerHTML = `
            <h3>📱 QR</h3>
            <input id="qrText" placeholder="URL yozing">
            <button onclick="makeQR()">Yaratish</button>
            <p id="error" style="color:red"></p>
            <div id="qrResult"></div>
        `;
    }

    else if(tool === "text"){
        box.innerHTML = `
            <h3>📝 Text Counter</h3>
            <textarea oninput="countText(this.value)"></textarea>
            <p id="count">0</p>
        `;
    }

    else if(tool === "random"){
        box.innerHTML = `
            <h3>🎲 Random</h3>
            <p style="font-size:30px;color:#00d4ff">${Math.floor(Math.random()*100)}</p>
        `;
    }

    else if(tool === "ai"){
        box.innerHTML = `
            <h3>🤖 AI Chat</h3>
            <div id="chatBox" style="height:200px;overflow:auto;background:#0f172a;padding:10px;"></div>
            <input id="userInput">
            <button onclick="sendMessage()">Send</button>
        `;
    }

    else if(tool === "game"){
        let secret = Math.floor(Math.random()*10)+1;

        box.innerHTML = `
            <h3>🎮 Game</h3>
            <input id="guess">
            <button onclick="checkGuess(${secret})">Check</button>
        `;
    }
}

/* QR */
function makeQR(){
    let text = document.getElementById("qrText").value;
    let error = document.getElementById("error");

    if(!text){
        error.innerText = "❌ URL yoz!";
        return;
    }

    document.getElementById("qrResult").innerHTML =
    `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}">`;
}

/* TEXT */
function countText(t){
    document.getElementById("count").innerText = t.length;
}

/* AI */
function sendMessage(){
    let input = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");

    let msg = input.value;
    if(!msg) return;

    chatBox.innerHTML += `<p><b>Sen:</b> ${msg}</p>`;
    chatBox.innerHTML += `<p><b>AI:</b> ${aiReply(msg)}</p>`;

    save(msg, aiReply(msg));
    input.value = "";
}

function aiReply(t){
    t = t.toLowerCase();

    if(t.includes("salom")) return "Salom 👋";
    if(t.includes("qalesan")) return "Yaxshi 😎";
    if(t.includes("ism")) return "AI botman 🤖";

    return "Tushunmadim 🤔";
}

/* GAME */
function checkGuess(secret){
    let g = document.getElementById("guess").value;

    if(parseInt(g) === secret){
        alert("🎉 To‘g‘ri!");
    } else {
        alert("❌ Xato: " + secret);
    }
}

/* HISTORY */
function save(q,a){
    let d = JSON.parse(localStorage.getItem("chat")) || [];
    d.push({q,a});
    localStorage.setItem("chat", JSON.stringify(d));
}

function showHistory(){
    const box = document.getElementById("toolBox");
    let data = JSON.parse(localStorage.getItem("chat")) || [];

    if(data.length === 0){
        box.innerHTML = "Hali history yo‘q";
        return;
    }

    box.innerHTML = data.map(x =>
        `<div style="background:#1e293b;margin:5px;padding:10px;border-radius:10px;">
            <b>Sen:</b> ${x.q}<br>
            <b>AI:</b> ${x.a}
        </div>`
    ).join("");
}
