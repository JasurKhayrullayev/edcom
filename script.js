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
    // vCard content
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Abboskhon Makhamatov
ORG:Edcom
TITLE:Director
TEL;TYPE=WORK,VOICE:+998901234567
EMAIL:a.makhamatov@edcom.uz
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
