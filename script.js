const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.querySelector('.close-btn');
const saveToPhoneBtn = document.getElementById('saveToPhoneBtn');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

saveToPhoneBtn.addEventListener('click', () => {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Abboskhon Makhamatov
ORG:Entrepreneurship Development Company
TITLE:Director
TEL;TYPE=WORK,VOICE:+998909467711
TEL;TYPE=DOM,VOICE:+998712055757
EMAIL:a.makhamatov@edcom.uz
URL:https://edcom.uz/
PHOTO;ENCODING=b;TYPE=JPEG:${imageToBase64('img/img.jpg')}
END:VCARD
`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact.vcf';
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

function imageToBase64(imagePath) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imagePath;

    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        return canvas.toDataURL('image/jpeg').replace(/^data:image\/jpeg;base64,/, '');
    };

    img.onerror = () => {
        console.error('Error loading image.');
    };

    return '';
}