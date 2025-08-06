
function displayEpisodeDetails(episodeData) {
    let html = '';
    episodeData.forEach(element => {
        html += `
            <img src="${element.image.medium}" />
            <p>Season ${element.season}, ep ${element.number}</p>
            <p>Title: ${element.name}</p>
            <p>${element.summary}</p>
            <p>Ratings: ${element.rating.average}</p>
            <hr>
        `;
    });
    // console.log(episodeData);
    return html;
}

function displayShowDetails(data) {
    const html = `
        <p>${data.name}</p>
        <img src="${data.image.medium}" />
        <pLanguage: ${data.language}</p>
        <p>Genre: ${data.genres[0]}, ${data.genres[1]}</p>
        <hr>
        <p>${data.summary}</p>
        <hr>
        <p>Premiered: ${data.premiered}</p>
        <p>Ended: ${data.ended}</p>
        <hr>
        <p>Ratings: ${data.rating.average}</p>
    `;
    return html;
}

exports.getShowDetails = async (req, res) => {

    // This also works here
    // fetch('https://api.tvmaze.com/singlesearch/shows?q=friends')
    //     .then(response => response.json())
    //     .then(data => {
    //         res.send(displayShowDetails(data));
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

    try {
        const response = await fetch('https://api.tvmaze.com/singlesearch/shows?q=friends');
        const data = await response.json();

        res.send(displayShowDetails(data));
    } catch(error) {
        console.log(error);
    }

}

exports.getEpisodeDetails = async (req, res) => {

    try {
        const response = await fetch('https://api.tvmaze.com/singlesearch/shows?q=friends');
        const data = await response.json();
        const ID = data.id;

        const episodeResponse = await fetch(`https://api.tvmaze.com/shows/${ID}/episodes`);
        const episodeData = await episodeResponse.json();

        res.send(displayEpisodeDetails(episodeData));
    } catch(error) {
        console.log(error);
    }

    // In this case, it won't work because the ID will be passed immediately to the 2nd 'fetch' hence returning undefined data
    // Since the ID has to wait for the response
    // In such cases it is better to follow above syntax. 

    // let ID;
    // fetch('https://api.tvmaze.com/singlesearch/shows?q=friends')
    //     .then(response => response.json())
    //     .then(data => {
    //         ID = data.id;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    
    // fetch(`https://api.tvmaze.com/shows/${ID}/episodes`)
    //     .then(episodeResponse => episodeResponse.json())
    //     .then(episodeData => {
    //         res.send(displayEpisodeDetails(episodeData));
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

}