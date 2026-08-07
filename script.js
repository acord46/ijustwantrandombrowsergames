const games = [
    {
        title: "Wordle",
        description: "Guess the five-letter word.",
        category: "Daily",
        url: "https://www.nytimes.com/games/wordle/index.html"
    },
    {
        title: "Connections",
        description: "Find the hidden groups.",
        category: "Daily",
        url: "https://www.nytimes.com/games/connections"
    },
    {
        title: "GeoGuessr",
        description: "Guess where you are on Earth.",
        category: "Geography",
        url: "https://www.geoguessr.com/"
    },
    {
        title: "Human Benchmark",
        description: "Reaction time, memory and more.",
        category: "Brain",
        url: "https://humanbenchmark.com/"
    },
    {
        title: "TypeRacer",
        description: "Race others by typing.",
        category: "Arcade",
        url: "https://play.typeracer.com/"
    },
    {
        title: "Let's Surf",
        description: "Surf through the waves and avoid obstacles.",
        category: "Arcade",
        url: "https://rbeesley.github.io/MicrosoftEdge-SURF/"
    },
    {
        title: "Heardle",
        description: "Guess the song from a 30-second clip.",
        category: "Daily",
        url: "https://www.heardle.info/"
    },
    {
        title: "Ethnoguesser",
        description: "Guess the culture of a given image.",
        category: "Daily",
        url: "https://hbd.gg/play/"
    },
    {
        title: "Globe",
        description: "Guess the country based on the outline.",
        category: "Daily",
        url: "https://globle-game.com/game"
    },
    {
        title: "Human Benchmark",
        description: "Reaction time, memory and more.",
        category: "Brain",
        url: "https://www.human-benchmark.org/"
    },
    {
        title: "Framed",
        description: "Guess the movie from a single frame.",
        category: "Daily",
        url: "https://framed.wtf/"
    },
    {
        title: "Nerdle",
        description: "Guess the math equation.",
        category: "Daily",
        url: "https://nerdle.ie/"
    },
    {
        title: "Waffle",
        description: "Rearrange letters to form words.",
        category: "Daily",
        url: "https://wafflegame.net/daily"
    },
    {
        title: "Skribbl.io",
        description: "Draw and guess words with friends.",
        category: "Brain",
        url: "https://skribbl.io/"
    },
    {
        title: "Hangman",
        description: "Draw and guess words with friends.",
        category: "",
        url: "https://www.coolmathgames.com/0-hangman"
    },
    {
        title: "Cookie Clicker",
        description: "Click cookies to bake more cookies.",
        category: "Arcade",
        url: "https://orteil.dashnet.org/cookieclicker/"
    },
    {
        title: "2048",
        description: "Combine tiles to reach 2048.",
        category: "Brain",
        url: "https://play2048.co/"
    },
    {
        title: "slither.io",
        description: "Control a snake and eat food to grow.",
        category: "Arcade",
        url: "http://slither.io/"
    },
    {
        title: "Akinator",
        description: "Think of a character, and Akinator will try to guess who it is.",
        category: "",
        url: "https://en.akinator.com/"
    },
    {
        title: "Time Guesser",
        description: "Guess the time in history based on images.",
        category: "Daily",
        url: "https://timeguessr.com/"
    },
    {
        title: "The Wiki Game",
        description: "Navigate from one Wikipedia page to another using only the links on the pages.",
        category: "Brain",
        url: "https://www.thewikigame.com/"
    },
    {
        title: "Krunker",
        description: "Fast-paced first-person shooter game.",
        category: "Arcade",
        url: "https://krunker.io/?game=SV:evlfe"
    },
    {
        title: "Guess the Game",
        description: "Guess the game based on screenshots.",
        category: "Daily",
        url: "https://guessthe.game/"
    },
    {
        title: "Sporcle",
        description: "Play thousands of quizzes on various topics.",
        category: "Brain",
        url: "https://www.sporcle.com/"
    },
    {
        title: "agar.io",
        description: "Control a cell and eat others to grow.",
        category: "Arcade",
        url: "https://agar.io/"
    },
    {
        title: "Cool Math games",
        description: "Play a variety of math and logic games.",
        category: "Brain",
        url: "https://www.coolmathgames.com/"
    },
    {
        title: "poki.com",
        description: "Play a variety of online games for free.",
        category: "Arcade",
        url: "https://poki.com/"
    },
    {
        title: "UBG365",
        description: "Play a variety of online games for free.",
        category: "Arcade",
        url: "https://ubg365.org/"
    },
    {
        title: "Human or Not",
        description: "Test if you can distinguish between humans and AI-generated content.",
        category: "",
        url: "https://humanornot.so/"
    },
    {
        title: "Chrome - No Internet Dino",
        description: "Play the offline dinosaur game in Google Chrome.",
        category: "Arcade",
        url: "https://nointernetgame.com/"
    },
    {
        title: "Slow Roads",
        description: "A relaxing driving game with a focus on exploration.",
        category: "Arcade",
        url: "https://slowroads.io/"
    },
    {
        title: "Call of Duty Black Ops (PS3 Edition)",
        description: "",
        category: "",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
];

let currentCategory = "All";

const gamesContainer = document.querySelector(".games");
const searchInput = document.querySelector(".search");

function renderGames() {

    gamesContainer.innerHTML = "";

    const search = searchInput.value.toLowerCase();

    const filtered = games.filter(game => {

        const matchesSearch =
            game.title.toLowerCase().includes(search) ||
            game.description.toLowerCase().includes(search);

        const matchesCategory =
            currentCategory === "All" ||
            game.category === currentCategory;

        return matchesSearch && matchesCategory;

    });

    filtered.forEach(game => {

        const card = document.createElement("a");

        card.className = "card";

        card.href = game.url;

        card.target = "_blank";

        card.innerHTML = `
            <h2>${game.title}</h2>
            <p>${game.description}</p>
        `;

        gamesContainer.appendChild(card);

    });

}

searchInput.addEventListener("input", renderGames);

document.querySelectorAll(".filters button").forEach(button => {

    button.addEventListener("click", () => {

        currentCategory = button.textContent;

        renderGames();

    });

});

renderGames();