"use strict";

let playlist = [];

window.addEventListener("load", start);

async function start(event) {
    await getPlaylist()
    console.log(playlist);
    showPlayList(playlist)
}

async function getPlaylist(){
    const response = await fetch("./playlist.json");
    playlist = await response.json()
}

function showPlayList(playlist) {

    document.querySelector("#songlist").innerHTML = "";
    
    for (let i = 0; i < playlist.length; i++){
        showSong(playlist[i])
    }
}

function showSong(song) {
    const html = /*html*/ `
    <li><button>Remove</button> ${song.artist}: ${song.title}</li>
    `;

    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);

    document.querySelector("#songlist li:last-child button").addEventListener("click", () => removeSong(song));
}

function removeSong(song) {
    console.log(`Removing ${song.title}`);
    const index = playlist.indexOf(song);
    playlist.splice(index, 1);
    
    showPlayList(playlist)
}