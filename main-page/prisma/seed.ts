import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getFeedback().map((feedback) => {
      return db.feedback.create({ data: feedback });
    })
  );
}

async function seedTwo() {
  await Promise.all(
    getTeam().map((team) => {
      return db.team.create({ data: team })
    })
  )
}

seed();
seedTwo();

function getFeedback() {

  return [
    {
      name: "Lloyd",
      content: `It has been so great to use the DJ devtool! It made using Remix even better!`,
    },
    {
      name: "Truett",
      content: `Wow!`,
    },
    {
      name: "Peter",
      content: `The coolest devtool around :)`,
    },
    {
      name: "Victoria's Mom",
      content: `What a creative team to make this wonderful tool`,
    },
    {
      name: "Jenny",
      content: `Simply the best`,
    },
  ];
}

function getTeam() {
  return [
    {
      name: "Adam",
      content: "Adam's bio goes here"
    },
    {
      name: "Matt",
      content: "Matt's bio goes here"
    },
    {
      name: "Molly",
      content: "Molly's bio goes here"
    },
    {
      name: "Tim",
      content: "Tim's bio goes here"
    },
    {
      name: "Victoria",
      content: "Victoria's bio goes here"
    }
  ]
}