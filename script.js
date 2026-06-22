function openTool(tool){
    const box = document.getElementById("toolBox");

    if(tool === "qr"){
        box.innerHTML = `
            <h3>📱 QR Code Generator</h3>

            <input id="qrText" placeholder="URL yozing (https://example.com)">

            <button onclick="makeQR()">QR yaratish</button>

            <p id="error" style="color:red"></p>

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
    let error = document.getElementById("error");

    if(!text){
        error.innerText = "❌ URL yozing!";
        return;
    }

    error.innerText = "";

    document.getElementById("qrResult").innerHTML =
        `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}">`;
}
