console.clear();

//handleUserlogin is our higher order function. we define a function with 3 parameters, and 2 of them are already functions.
function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin"); // this function has 2 arguments.
  } else {
    onError(`Unknown user "${userName}"`); // this function has 1 argument. this argument will be used as whole, whenever it is called later.
  }
}

// The exercise starts here!

function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}

function showErrorMessage(errorMessage) {
  //
  console.log(`Login error: ${errorMessage}`);
}

handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");

handleUserLogin(showWelcomeMessage, showErrorMessage, "John Doe");
