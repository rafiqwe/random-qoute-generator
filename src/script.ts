console.log('hellow');

const generateBtn = document.querySelector<HTMLButtonElement>('#generateBtn');
const qouteElm = document.querySelector<HTMLHeadingElement>('#qoute');


generateBtn?.addEventListener('click',async () => {
    try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=success',{
            headers:{
                "X-Api-Key": 'wKSTCHnr40KxODQzgcmjoA==8BoHnZu1wlfeFQmR'
            }
        })
        const data = res.json()
        console.log(data);
        
    } catch (error) {
        console.error("fatch api error:", error);
    }
})