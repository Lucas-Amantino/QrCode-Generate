function create()
{
    let texto = document.querySelector('#transform').value;
    if(texto.replace(/\s+/g, '') !== '')
    {
        document.querySelector('#qrcode').innerHTML='';

        let qr = new QRCode("qrcode", {
            text: texto,
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
        qr.makeCode(texto);

        setTimeout(() => {
            let img = document.querySelector('#qrcode').querySelector('img').src;
            document.querySelector('#saving').href=img;
        }, 10);
    }
}

