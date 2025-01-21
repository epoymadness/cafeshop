const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());



// routes
app.use('/', routes());



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
