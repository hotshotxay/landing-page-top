var button = document.getElementById("booper");

function addEmoji () {
    const emojis = [
        '🐕','🐕‍🦺','😀','😊','🐩','😉','😍','✨','❤️','👍','🎉','🔥','😝','😛',
        ];
    const emojispot = document.getElementById("emojispot")
    emojispot.append(emojis[Math.floor(Math.random() * emojis.length)])
}

button.addEventListener("click", addEmoji, false);
