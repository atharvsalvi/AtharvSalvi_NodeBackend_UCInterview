const express = require('express');

const app = express();
const port = 5000;

function displayEpisodes(data) {
    html = '';
    data.forEach(element => {
        html += `
            <img src="${element.image.medium}" />
            <p>Season ${element.season}, ep ${element.number}</p>
            <p>Title: ${element.name}</p>
            <p>${element.summary}</p>
            <p>Ratings: ${element.rating.average}</p>
            <hr>
        `;
    });
    return html;
}

function displayDetails(data) {
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
    return html
}

function showData(id) {
    fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
        .then(response => response.json())
        .then(data => {
            episodes(data);
        })
        .catch(error => {
            console.log(error);
        });
}

fetch('https://api.tvmaze.com/singlesearch/shows?q=friends')
    .then(res => res.json())
    .then(data => {
        showData(data.id);
        show(data);
    })
    .catch(error => {
        console.log(error);
    });

function episodes(data) {
    app.get('/episodes', (req, res) => {
        res.send(displayEpisodes(data));
    });
}

function show(data) {
    app.get('/show-details', (req, res) => {
        res.send(displayDetails(data));
    });
}

app.listen(port);