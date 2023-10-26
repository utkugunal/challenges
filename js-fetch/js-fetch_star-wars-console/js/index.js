console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      console.log(response);
      const data = await response.json();
      console.log(data);
      console.log(data.count);
      console.log(data.results[2]["eye_color"]);
    } else {
      console.error("--Bad Response");
    }
  } catch (error) {
    console.error("=========An Error occurred");
  }
}

fetchData();
