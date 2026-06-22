function openTool(tool){
    const box = document.getElementById("toolBox");

    if(tool === "qr"){
        box.innerHTML = `
            <h3>📱 QR Generator</h3>
            <input id="qrText" placeholder="Matn yoz">
            <button onclick="makeQR()">Generate</button>
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
        box.innerHTML = `<h3>🎲 Random: ${num}</h3>`;
    }
}

function countText(text){
    document.getElementById("count").innerText = text.length + " harf";
}

function makeQR(){
    let text = document.getElementById("qrText").value;
    document.getElementById("qrResult").innerHTML =
        `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}">`;
}
