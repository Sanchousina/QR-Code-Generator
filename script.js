const main = document.querySelector('.main');
const btn = main.querySelector('button');
qrcode = main.querySelector('.qr-code');
input = main.querySelector('input');

qrcodeImg = new QRCode(qrcode, {
    width: 200,
    height: 200,
    colorDark : "#ffffff",
    colorLight : "#30a684",
    correctLevel : QRCode.CorrectLevel.H
});

btn.addEventListener('click', () => {
    if (!input.value) return;

    main.classList.add('active');
    makeQRCode(input.value);
});

function makeQRCode(value) {
    qrcodeImg.clear();
    qrcodeImg.makeCode(`${value}`);
}