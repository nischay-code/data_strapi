const fetch = require("node-fetch");
const path = require("path");

const fs = require("fs");

async function create({ title }) {
  return fetch("http://localhost:1337/api/states", {
    method: "POST",
    body: JSON.stringify({
      data: {
        title,
      },
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// create({ title: "Himank" })
//   .then((res) => console.dir(res, { depth: null }))
//   .catch((err) => console.dir(err, { depth: null }));

// fetch("http://localhost:1337/api/states", {
//   headers: {
//     "Content-Type": "application/json",
//   },
// }).then(async (res) => console.dir(await res.json()), { depth: null });

// Use fs.readFile() method to read the file
fs.readFile("./state.json", "utf8", function (err, list) {
  // Display the file content
  // console.log(list);
  const array = JSON.parse(list);
  // console.log(array);
  // return;

  for (let i = 0; i < array.data.length; i += 1) {
    const item = array.data[i];
    console.log(item);
    // create(item);
  }
});
