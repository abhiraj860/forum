const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/api', (req, res)=>{
    res.json({
        message: 'hello world'
    });
});

app.listen(PORT);