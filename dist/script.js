console.log('hellow');
const generateBtn = document.querySelector('#generateBtn');
const qouteElm = document.querySelector('#qoute');
const author = document.querySelector('#author');
generateBtn?.addEventListener('click', async () => {
    try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
            headers: {
                'X-Api-Key': 'wKSTCHnr40KxODQzgcmjoA==8BoHnZu1wlfeFQmR'
            }
        });
        const data = await res.json();
        console.log(data);
        qouteElm.textContent = data[0]?.quote,
            author.innerText = 'Author:' + " " + data[0]?.author;
    }
    catch (error) {
        console.error("fatch api error:", error);
    }
});
export {};
//# sourceMappingURL=script.js.map