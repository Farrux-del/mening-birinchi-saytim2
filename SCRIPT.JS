function openTool(tool){
    const box = document.getElementById("toolBox");

    if(tool === "qr"){
        box.innerHTML = `
            <h3>📱 QR Generator</h3>
            <input id="qrText" placeholder="Matn yoz">
            <button onclick="makeQR()">Generate QR</button>
            <div id="qrResult" style="margin-top:10px;"></div>
        `;
    }

    else if(tool === "text"){
        box.innerHTML = `
            <h3>📝 Text Counter</h3>
            <textarea oninput="countText(this.value)" placeholder="Yozing..."></textarea>
            <p id="count">0 harf</p>
        `;
    }

    else if(tool === "random"){
        let num = Math.floor(Math.random()*100);
        box.innerHTML = `
            <h3>🎲 Random Number</h3>
            <p style="font-size:24px;color:#00d4ff">${num}</p>
        `;
    }
}

function countText(text){
    document.getElementById("count").innerText = text.length + " ta harf";
}

function makeQR(){
    let text = document.getElementById("qrText").value;

    if(!text){
        alert("Matn yoz!");
        return;
    }

    document.getElementById("qrResult").innerHTML =
        `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}">`;
}
