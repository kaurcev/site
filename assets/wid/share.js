document.getElementById('share').innerHTML = '<div id="qr_code"></div > ';
if (document.getElementById('qr_code') != undefined) {
    const el = (selector) => document.querySelector(selector);
    let qrcode = el('#qr_code');
    let text = window.location.href;
    qrcode.innerHTML = "";
    qrcode.append(QRCode.generateHTML(text, {}))
}