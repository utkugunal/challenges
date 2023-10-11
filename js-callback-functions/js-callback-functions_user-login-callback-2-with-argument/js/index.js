console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

function showWelcomeMessage(userName) {
  console.log("Welcome Jane Doe! You are logged in now.");
}

handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  showWelcomeMessage();
});
