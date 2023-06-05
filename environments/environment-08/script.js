"use strict";

window.addEventListener("load", start);

const playlist = [
    {
        artist: "Travis Scott",
        title: "90210",
        duration: "2:30",
    },
    {
        artist: "Rihanna",
        title: "Work",
        duration: "2:50",
    },
    {
        artist: "Drake",
        title: "One Dance",
        duration: "2:00",
    },
];

function start(event) {
    console.log("script");
    document.querySelector("#add-song-form").addEventListener("submit", submitForm);
    document.querySelector("#sort-songs-form").addEventListener("change", sortPlaylist);
    sortPlaylist(); 
    showPlaylist(playlist)
}

function submitForm(event) {
    event.preventDefault();

    const form = event.target;

    const artist = form.name.value;
    const title = form.title.value;
    const duration = form.duration.value;

    console.log(playlist);

    createSong(artist, title, duration);
}

function createSong(artist, title, duration) {
    const newSong = { artist, title, duration };
    playlist.push(newSong);
    console.log(playlist);
    sortPlaylist(); 
    showPlaylist(playlist)
}

function showPlaylist(playlist) {
    document.querySelector("#songlist").innerHTML = "";
    
    for (let i = 0; i < playlist.length; i++){
        showSong(playlist[i]);
    }
}

function showSong(song) {
    const html = /*html*/`
    <li>${song.artist} - ${song.title}</li>
    `
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
}

function sortPlaylist(event) {
    const sortValue = document.querySelector("#sort-songs-form").sortby.value;
    playlist.sort((a, b) => a[sortValue].localeCompare(b[sortValue]));
    showPlaylist(playlist)
}