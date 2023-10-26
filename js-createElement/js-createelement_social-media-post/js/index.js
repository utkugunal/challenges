console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("section");
newPost.classList.add("post");

const newPostText = document.createElement("p");
newPostText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newPostText.classList.add("post__content");

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

const newSpan = document.createElement("span");
newSpan.textContent = "@username";
newSpan.classList.add("post__username");

const newLikeButton = document.createElement("button");
newLikeButton.textContent = "♥ Like";
newLikeButton.classList.add("post__button");
newLikeButton.addEventListener("click", handleLikeButtonClick);

newPost.append(newPostText);
newFooter.append(newSpan);
newFooter.append(newLikeButton);
newPost.append(newFooter);

document.body.append(newPost); // !!!!NOTE: "body" is not a variable in js file here, so we need to define it "document.body"
