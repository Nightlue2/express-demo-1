const a = fetch("http://localhost:3070", {
  method: "post",
  body: "xxxxxx",
  headers: {
    "Content-Type": "text/plain",
  },
});
a.then((x) => {
  console.log(x);
  x.text().then((x) => console.log(x));
});
