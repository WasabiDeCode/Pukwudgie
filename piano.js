// Load Tone.js dynamically via CDN
const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.45/Tone.js";
document.head.appendChild(script);

// Map keys to musical notes
const keyToNote = {
    "q": "C4",
    "2": "C#4",
    "w": "D4",
    "3": "D#4",
    "e": "E4",
    "r": "F4",
    "5": "F#4",
    "t": "G4",
    "6": "G#4",
    "y": "A4",
    "7": "A#4",
    "u": "B4",
    "i": "C5",
    "9": "C#5",
};

// Initialize the Tone.js Synth after loading the script
let synth;
script.onload = () => {
    synth = new Tone.Synth().toDestination();
    console.log("Tone.js loaded and Synth initialized!");
};

// Play a note using the synth
function playNote(note) {
    if (synth) {
        synth.triggerAttackRelease(note, "8n"); // 8n = eighth note duration
    } else {
        console.warn("Synth not initialized yet!");
    }
}

// Add event listener to detect key presses
document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const note = keyToNote[key];
    if (note) {
        playNote(note);

        // Highlight the corresponding key
        const keyElement = document.querySelector(`.key[data-key="${key}"]`);
        if (keyElement) {
            keyElement.classList.add("active");
            setTimeout(() => keyElement.classList.remove("active"), 200); // Remove highlight after 200ms
        }
    }
});
