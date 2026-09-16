# Superhero battle nextjs

Superheroes and villains are always battling it out, but how do we know who wins? In this test we will create a Next.js application to find out.

The superhero and villain characters along with their stats are stored in a public json file stored in AWS S3 - https://s3.eu-west-2.amazonaws.com/build-circle/characters.json

During a battle the character with the highest score wins.

We expect the solution to be simple, readable, and to be supported by good unit tests (reliable, fast, and asserting behaviour).

## 1. Run the app

```
npm install
npm run dev
```

Open http://localhost:3000

## 2. Run the tests

```
npm test
```

## 3. Check the code

Familiarise yourself with the code. What does it all do? What do the tests do? Feel free to point out any issues or opinions you have about it.

## 4. Hero and villain name input

We need a way of taking in a hero name and a villain name as inputs, and a battle button to trigger the fight!

## 5. Triggering the battle

When the battle button is clicked, we need to load the characters JSON file and find the characters by their name. We can then compare the scores of each character, the winner has the higher score. We should show the winner on the page after the battle is over.

There is also an `/api/battle` route. Have a look at it. How would you make this better?

Currently the `getCharacters` function is mocked in our tests. The real implementation throws an error. Make this function work by loading and parsing the characters from the JSON document in S3.

## 6. Weaknesses

Each hero usually has a nemesis. This is captured in the weakness field in the JSON. If a hero is fighting a villain that matches the villain in their weakness field their score is weakened by 1 point. Lets write some code to handle this.

## Acceptance tests

Run the application.

1. Should return Joker - http://localhost:3000/api/battle?hero=Batman&villain=Joker
2. Should return Superman - http://localhost:3000/api/battle?hero=Superman&villain=Lex%20Luthor
