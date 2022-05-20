// API
import teleportRepositories from '../repositories/teleportRepositories';
// Javascript functions
import transitions from './transitions';
import textFormat from './textFormat';

export default {
    searchCity(name) {
        return new Promise(function(resolve, reject) {
            const cityURLName = name.replace(/ /g, "-");
            console.log(cityURLName);
            teleportRepositories.getCityScores(cityURLName.toLowerCase()).then(res => {
                return resolve(res.data);
            }).catch(() => {
                alert('We are sorry but we did not find any city with that name in our database!');
                return reject(false);
            });
        });
    },
    setCategories(data) {
        const categories = document.getElementsByClassName('city__categories')[0];
        let category = document.getElementsByClassName('city__category');
        if (category?.length < 1) {
            categories.innerHTML = data.categories.reduce((acc, curr) => {
                category = `<div class="city__category"><div class="city__total-value"><div class="city__title-primary"><p>${curr.name}</p></div><div class="city__partial-value" style="background-color:${curr.color};width:${(200 * curr.score_out_of_10 / 10) + 'px'};"><div class="city__title-overlay" style="width:${(200 * curr.score_out_of_10 / 10) + 'px'};"><p>${curr.name}</p></div></div></div><div class="city__category-score"><p>${curr.score_out_of_10.toFixed(2)}/10</p></div></div>`
                return acc + category;
            }, '');
        } else {
            for (let i = 0; i < data.categories.length; i++) {
                const cityCategoryScore = document.getElementsByClassName('city__category-score')[i];
                cityCategoryScore.textContent = data.categories[i].score_out_of_10.toFixed(2) + '/10';
                const cityPartialValue = document.getElementsByClassName('city__partial-value')[i];
                cityPartialValue.style.width = (200 * data.categories[i].score_out_of_10 / 10) + 'px';
                const cityTitleOverlay = document.getElementsByClassName('city__title-overlay')[i];
                cityTitleOverlay.style.width = (200 * data.categories[i].score_out_of_10 / 10) + 'px';
            }
        }
    },
    async updateCard(data, cityName) {
        await transitions.setTextTransitions('fade-out');
        const headingH1 = document.getElementsByClassName('city__heading')[0].firstElementChild;
        headingH1.textContent = textFormat.capitalize(cityName);
        const scoreParagraph = document.getElementsByClassName('city__score')[0].firstElementChild;
        scoreParagraph.textContent = data.teleport_city_score.toFixed(3);
        const description = document.getElementsByClassName('city__description')[0];
        description.innerHTML = data.summary;
        this.setCategories(data);
        await transitions.setTextTransitions('fade-in');
        transitions.setCardTransition();
    }
}