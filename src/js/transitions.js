export default {
    setCardTransition() {
        const card = document.getElementsByClassName('city__card')[0];
        if (!card.classList.value.includes('visible')) {
          card.classList.add('visible');
        }
    },
    setTextTransitions(type) {
        return new Promise((res,rej) => {
            if (document.getElementsByClassName('city__category').length < 1) return res();
            const headingH1 = document.getElementsByClassName('city__heading')[0].firstElementChild;
            const scoreDiv = document.getElementsByClassName('city__score')[0];
            const scoreParagraph = scoreDiv.firstElementChild;
            const scoreValue = scoreParagraph.nextElementSibling;
            const description = document.getElementsByClassName('city__description')[0];
            if (type === 'fade-out') {
            headingH1.style.opacity = 0;
            scoreParagraph.style.opacity = 0;
            scoreValue.style.opacity = 0;
            description.style.opacity = 0;
            }
            if (type === 'fade-in') {
            headingH1.style.opacity = 1;
            scoreParagraph.style.opacity = 1;
            scoreValue.style.opacity = 1;
            description.style.opacity = 1;
            }
            return setTimeout(function () {
                return res();
            }, 300);
        });
    }
}