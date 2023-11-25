const sidebox = document.querySelector('#Sidebox').querySelector('ul').children;
const titles = [];

for (const art of document.querySelector('#MainTXT').children) {
    if (document.querySelector('#MainTXT').querySelectorAll('iframe').length == 0) {
        if (art.tagName == 'ARTICLE') {
            titles.push(art.querySelector('h4'));
        }
    } else {
        if (art.tagName == 'H4') {
            titles.push(art);
        }
    }
}

console.log(titles);

for (const il of sidebox) {
    if (il.tagName == 'P') {
        console.log(il);
        continue;
    }
    const btn = il.querySelector('button');
    const btnText = btn.innerText.replaceAll(' ', '').replaceAll('/', '').replace(';', '').replace('&', '').toLowerCase().normalize();

    btn.addEventListener('click', function() {

        for (const art of titles) {
            let artText = art.innerText.toLowerCase().replaceAll('<', '').replaceAll('>', '').replaceAll(' ', '').replaceAll('/', '').replace('&', '').normalize();

            console.log(btn, btnText, artText);

            if (artText.includes(btnText)) {
                window.scrollTo(0, art.getBoundingClientRect().top - document.querySelector('body').getBoundingClientRect().top - 120);
                break;
            }
        }
    })
}