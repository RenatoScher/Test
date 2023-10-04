const sidebox = document.querySelector('#Sidebox').querySelector('ul').children;
const articles = document.querySelector('#MainTXT').children;

for (const il of sidebox) {
    const btn = il.querySelector('button');

    btn.addEventListener('click', function() {

        const btnText = btn.innerText.split(' ')[0].split('/')[0].replace(';', '').toLowerCase().normalize();

        for (const art of articles) {
            if (art.tagName != 'ARTICLE') {
                continue;
            }

            const artText = art.querySelector('h4').innerText.toLowerCase();

            console.log('<' + btnText + '>', artText, artText.includes('<' + btnText + '>'));

            if (artText.includes('<' + btnText + '>')) {
                window.scrollTo(0, art.getBoundingClientRect().top - document.querySelector('body').getBoundingClientRect().top - 120);
            }
        }
    })
}