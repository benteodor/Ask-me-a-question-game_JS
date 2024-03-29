// Define possible responses

const responses = [
  "Outlook not so good, but hey, who trusts a Spiner anyway?",
  "Reply hazy, ask again after you've had your morning coffee.",
  "Cannot predict now, I'm too busy contemplating the mysteries of the universe.",
  "Signs point to... why are you asking me? You should know better!",
  "My sources say no, but my intuition says 'maybe if you ask nicely'.",
  "Ask again later, I'm currently on vacation in the Bermuda Triangle.",
  "Don't count on it, unless you're counting on me to give you cryptic responses.",
  "Outlook not so good, unless you're looking for excuses to procrastinate.",
  "My reply is no, but don't worry, rejection builds character!",
  "Very doubtful, just like the likelihood of finding matching socks in your laundry.",
];

// Function to generate a random response
function generateResponse() {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

// Function for user input and display response
function Spiner() {
  const question = prompt("Ask your Spiner a yes-or-no question:");
  if (question) {
    const response = generateResponse();
    alert("Spiner says: " + response);
  } else {
    alert("You didn't ask anything!");
  }
}

// Get the button element
const button = document.getElementById("button");

// Add an event listener to the button
button.addEventListener("click", Spiner);

// Call the fortuneTeller function to start the program
Spiner();

// Credits to Stack Overfloww
