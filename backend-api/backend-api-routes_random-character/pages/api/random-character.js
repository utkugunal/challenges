import Chance from "chance";

export default function handler(request, response) {
  const chance = new Chance();

  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    phone: chance.phone(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
    profession: chance.profession(),
  };

  response.status(200).json(character);
}
