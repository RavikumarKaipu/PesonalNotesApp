const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const notesRouter = require('./routes/notes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', notesRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
