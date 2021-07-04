const path = require("path")
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.join(__dirname, 'public/build')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "/public/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});