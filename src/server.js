const express = require("express"); // imports the whole express library
const app = express(); // creates app object, this houses the server instructions
const port = process.env.PORT || 5001;

app.use("/static", express.static("public"));
// telling the app to use the public folder when a request is made to "/static"

app.listen(5001, () => {
  console.log(`listening on port ${port}`);
});
// listening on local:host5001 for requests to our webserver
