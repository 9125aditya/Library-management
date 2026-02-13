const express = require('express');

const app = express();
const PORT = 8081;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Library Management System API'
    });
});



app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});
