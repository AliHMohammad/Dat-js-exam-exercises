"use strict";

window.addEventListener("load", start);

let playlist = [];

async function start(event) {
    console.log("script is running!");
    playlist = await getPlaylist();
    console.log(playlist);
    showPlaylist(playlist);
}

async function getPlaylist() {
    const response = await fetch("./playlist.json");
    return await response.json();
}

function showPlaylist(playlist) {
    document.querySelector("#songlist").innerHTML = "";

    let i = 0;
    while (i < playlist.length) {
        const html = /*html*/ `
        <li> <button>Remove</button> ${playlist[i].artist}: ${playlist[i].title}</li>
        
        `;

        document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);

        document.querySelector("#songlist li:last-child button").addEventListener("click", () => removeSong(playlist[i]));
        i++;
    }
}

function removeSong(song) {
    const index = playlist.indexOf(song);
    playlist.splice(index, 1);
    showPlaylist(playlist);
}
