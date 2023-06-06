"use strict";

window.addEventListener("load", start);

let playlist = [
    {
        artist: "Travis Scott",
        title: "90210",
        duration: "3:20",
    },
    {
        artist: "Rihanna",
        title: "Work",
        duration: "2:20",
    },
    {
        artist: "Drake",
        title: "One Dance",
        duration: "4:20",
    },
];

function start(event) {
    console.log("script");
    playlist = preparePlaylist();
    showPlaylist(playlist);
}

function preparePlaylist() {
    const preparedPlaylist = [];

    for (const song of playlist) {
        const newSong = { song, upvotes: 0 };
        preparedPlaylist.push(newSong);
    }

    return preparedPlaylist;
}

function showPlaylist(playlist) {
    document.querySelector("#songlist").innerHTML = "";
    playlist.sort((a, b) => b.upvotes - a.upvotes);

    for (let i = 0; i < playlist.length; i++) {
        showSong(playlist[i]);
    }
}

function showSong(object) {
    const html = /*html*/ `
    <li><button>Upvote</button> ${object.song.artist}: ${object.song.title}. UPVOTES: ${object.upvotes}</li>
    `;

    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);

    document.querySelector("#songlist li:last-child button").addEventListener("click", () => upvoteSong(object));
}

function upvoteSong(song) {
    console.log(song.song.title);
    song.upvotes += 1;
    showPlaylist(playlist);
}
