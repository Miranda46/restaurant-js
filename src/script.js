import * as constants from './assets/constants';
import './styles.css';

const loadPage = (() => {
    const home = function() {
        let content = document.getElementById('content');
        content.innerHTML = '';
        
        let welcome = document.createElement('div');
        compose(welcome, constants.WELCOME_TITLE, 'https://www.soldoutservice.com/wp-content/uploads/2023/06/alchemist-copenhagen-50-ristoranti-migliori-mondo-2023.jpg',
            constants.WELCOME_TEXT, content);
       
        let chef = document.createElement('div');
        compose(chef, constants.CHEF_TITLE, 'https://pbs.twimg.com/profile_images/1506250055161888778/SVyZg9AY_400x400.jpg', constants.CHEF_TEXT, content);

        let country = document.createElement('div');
        compose(country, constants.COUNTRY_TITLE, 'https://cdn.britannica.com/03/2103-050-CA56CC2D/Liechtenstein-map-boundaries-cities-locator.jpg', constants.COUNTRY_TEXT, content);

        let enjoy = document.createElement('div');
        compose(enjoy, constants.ENJOY_TITLE, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fdelicious-woman-eating-good-food-40364373.jpg&f=1&nofb=1&ipt=d1980c417a85f6e5a6f972e0bd595107ce37594c82f98dff0e3ee3be2486204f&ipo=images', constants.ENJOY_TEXT, content);


        
    }

    const aboutUs = function() { 
        let content = document.getElementById('content');
        content.innerHTML = '';

        let location = document.createElement('div');
        compose(location, constants.LOCATION_TITLE, 'https://cdn.britannica.com/03/2103-050-CA56CC2D/Liechtenstein-map-boundaries-cities-locator.jpg', constants.LOCATION_TEXT, content);

        let history = document.createElement('div');
        compose(history, constants.HISTORY_TITLE, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thesixthaxis.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fgod-of-war-kratos-shaved.jpg&f=1&nofb=1&ipt=24a1e41e575a790b7df1b40e10e98d9a8145898ccd5e429c41b2c57f992f63d2&ipo=images', constants.HISTORY_TEXT, content);

        let workwithus = document.createElement('div');
        compose(workwithus, constants.WORKWITHUS_TITLE, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwackycreative.com.au%2Fwp-content%2Fuploads%2F2015%2F03%2FGiant-Chef1-1024x640.jpg&f=1&nofb=1&ipt=2af83d869c51eee2636d21ae147a3b43aa801fdf44d2925abd2b72631e6a49a3&ipo=images', constants.WORWWITHUS_TEXT, content);

    }

    const menu = function() {
        let content = document.getElementById('content');
        content.innerHTML = '';

        let rosePoultry = document.createElement('div');
        compose(rosePoultry, constants.rosePoultry_TITLE, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyardandgardenguru.com%2Fwp-content%2Fuploads%2F2022%2F01%2FUndercooked-Chicken-Texture.jpg&f=1&nofb=1&ipt=e226771e655c725509e0349eb0ff78eb302b5103ef0722d9b50cf3fe21b74a02&ipo=images', constants.rosePoultry_TEXT, content);

        let sushiBurger = document.createElement('div');
        compose(sushiBurger, constants.sushiBurger_TITLE, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fichisushi.com%2Fwp-content%2Fuploads%2F2022%2F06%2FBest-Sushi-Burger-Recipes.jpg&f=1&nofb=1&ipt=c37a8e28957e76739eee124f0bbeb22e479025105fa7fdc640672d9e2757206f&ipo=images', constants.sushiBurger_TEXT, content);

        let walkingShrimp = document.createElement('div');
        compose(walkingShrimp, constants.walkingShrimp_TITLE, 'https://i.ytimg.com/vi/5JNudS0X_84/maxresdefault.jpg', constants.walkingShrimp_TEXT, content);

        let arepizza = document.createElement('div');
        compose(arepizza, constants.arepizza_TITLE, 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gransoli.com%2Fwp-content%2Fuploads%2F2016%2F06%2FArepa_napolitana_peque_a.jpg&f=1&nofb=1&ipt=83d6164c73b39af7df00e1149022dc78e4b97c05faa51b868db62053110f48c5&ipo=images', constants.arepizza_TEXT, content);
        
    }

    let compose = function(parent, title, imgSrc, text, content){
        let titleComp = document.createElement('h3');
        titleComp.innerText = title;
        let imageComp = document.createElement('img');
        imageComp.src = imgSrc;
        imageComp.classList.add('imogus');
        let textComp = document.createElement('p');
        textComp.innerText = text;
        parent.appendChild(titleComp);
        parent.appendChild(imageComp);
        parent.appendChild(textComp);
        content.appendChild(parent);
    }

    let start = function(){
        let home = document.getElementById('home');
        let aboutUs = document.getElementById('about_us');
        let menu = document.getElementById('menu');

        home.addEventListener('click', function(){loadPage.home()});
        aboutUs.addEventListener('click', function(){loadPage.aboutUs()});
        menu.addEventListener('click', function(){loadPage.menu()});
    }

    return { start, aboutUs, menu, home };
    
})();
console.log(loadPage)
loadPage.start();
