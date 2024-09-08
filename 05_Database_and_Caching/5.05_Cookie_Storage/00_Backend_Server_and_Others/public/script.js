// Function to set user preferences and display personalized recommendations
const setPreferences = () => {
    let preferences = document.getElementById('preferences').value;
    setCookie('userPreferences', preferences, 1)

    // Display peresonalized recommendations based on preferences
    displayRecommendations(preferences);

    // Hide preferences from and show recommendations container
    document.getElementById('prferences-container').style.display = 'none';
    document.getElementById('recommendations-container').style.display = 'block';
}

// Function to read the user preferences cookie and display based on the cookie
const displayRecommendationsOnLoad = () => {
    let preferences = getCookie('userPreferences');
    if (preferences) {
        // Display personalized recommendations
        displayRecommendations(preferences);

        document.getElementById('prferences-container')
    }
}

const displayRecommendations = (preferences) => {
    let recommendations = getRecommendations(preferences);
    document.getElementById('recommendations').innerText = recommendations
}

const getCookie = (name) => {
    let nameEQ = name + '=';
    let cookies = document.cookie.split(';') // we may have multiple cookie seperated with ;
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i]
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length)
        }
    }
    return null;
}

const setCookie = (name, value, hours) => {
    let expires = '';
    if (hours) {
        let date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

// Function to get personalized recommendations based on user preferences
const getRecommendations = (preferences) => {
    switch (preferences) {
        case 'movies':
            return 'Check out the lates movies in the list';
        case 'books':
            return 'Explore these must-read books!';
        case 'music':
            return 'Listen to these trending music albums';
        default:
            return 'No recommendations available';
    }
}

const logoutUser = () => {
    eraseCookie('userPreferences');

    // Show preferences from and hide recommendations container
    document.getElementById('prferences-container').style.display = 'block';
    document.getElementById('recommendations-container').style.display = 'none';
}

const eraseCookie = (name) => {
    document.cookie = name + '=; Max-Age=-999999;';
}

window.onload = displayRecommendationsOnLoad()