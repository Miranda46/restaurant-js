import * as constants from './assets/constants';

const loadPage = (() => {
    const home = function() {
        let content = document.getElementById('content');
        content.innerHTML = '';
        
        let welcome = document.createElement('div');
        let welcome_title = document.createElement('h3');
        welcome_title.innerText = constants.WELCOME_TITLE;
        let welcome_image = document.createElement('img');
        welcome_image.src = './assets/welcome.png';
        let welcome_text = document.createElement('p');
        welcome_text.innerText = constants.WELCOME_TEXT;
        welcome.appendChild(welcome_title);
        welcome.appendChild(welcome_image);
        welcome.appendChild(welcome_text);



        
        let chef = document.createElement('div');
        compose(chef, constants.CHEF_TITLE, '', constants.CHEF_TEXT, content);

        let country = document.createElement('div');
        compose(country, constants.COUNTRY_TITLE, '', constants.COUNTRY_TEXT, content);

        let enjoy = document.createElement('div');
        compose(enjoy, constants.ENJOY_TITLE, '', constants.ENJOY_TEXT, content);


        
    }

    const aboutUs = function() { 
        let content = document.getElementById('content');
        content.innerHTML = '';

        let location = document.createElement('div');
        compose(location, constants.LOCATION_TITLE, '', constants.LOCATION_TEXT, content);

        let history = document.createElement('div');
        compose(history, constants.HISTORY_TITLE, '', constants.HISTORY_TEXT, content);

        let workwithus = document.createElement('div');
        compose(workwithus, constants.WORKWITHUS_TITLE, '', constants.WORWWITHUS_TEXT, content);

    }

    const menu = function() {
        let content = document.getElementById('content');
        content.innerHTML = '';

        let location = document.createElement('div');
        compose(location, constants.LOCATION_TITLE, '', constants.LOCATION_TEXT, content);

        let history = document.createElement('div');
        compose(history, constants.HISTORY_TITLE, '', constants.HISTORY_TEXT, content);

        let workwithus = document.createElement('div');
        compose(workwithus, constants.WORKWITHUS_TITLE, '', constants.WORWWITHUS_TEXT, content);
    }

    let compose = function(parent, title, imgSrc, text, content){
        let titleComp = document.createElement('h3');
        titleComp.innerText = title;
        let imageComp = document.createElement('img');
        imageComp.src = imgSrc;
        let textComp = document.createElement('p');
        textComp.innerText = text;
        parent.appendChild(titleComp);
        parent.appendChild(imageComp);
        parent.appendChild(textComp);
        content.appendChild(parent);
    }
})();