"use strict";

let songs = [
    {
        artist: "Bruno Mars",
        title: "Grenade",
        duration: "2:30",
    },
    {
        artist: "Travis Scott",
        title: "9210",
        duration: "3:10",
    },
    {
        artist: "Rihanna",
        title: "Work",
        duration: "2:40",
    },
];

window.addEventListener("load", start);

function start(event) {
    console.log("script is running");
    songs = prepareSongs(songs);
    showSongs(songs);
}

function prepareSongs(songs) {
    const preparedSongs = [];

    for (const song of songs) {
        const preparedSong = { song, upvotes: 0 };
        preparedSongs.push(preparedSong);
    }

    return preparedSongs;
}

function showSongs(songs) {
    document.querySelector("#songlist").innerHTML = "";

    let i = 0;
    while (i < songs.length) {
        showSong(songs[i]);
        i++;
    }
}

function showSong(song) {
    const html = /*html*/ `
    <li><button>Upvote</button> ${song.song.title}, ${song.song.duration}, POINTS: ${song.upvotes}</li>
    `;

    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);

    document.querySelector("#songlist li:last-child button").addEventListener("click", () => upvoteSong(song));
}

function upvoteSong(song) {
    song.upvotes += 1;
    console.log(song.upvotes);
    updateListOfSongs();
}

function updateListOfSongs() {
    sortSongs();
    showSongs(songs);
}

function sortSongs() {
    songs.sort((a, b) => b.upvotes - a.upvotes);
}
