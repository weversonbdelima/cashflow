const express = require('express');
const bodyParser = require('body-parser');
const { Launch } = require('./models');

const app = express();
app.use(bodyParser.json());

app.post('/launchs', async (req, res) => {
    const { type, value, date } = req.body;
    try {
        const launch = await Launch.create({ type, value, date });
        res.status(201).json(launch);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/launchs', async (req, res) => {
    try {
        const launchs = await Launch.findAll();
        res.status(200).json(launchs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Serviço de Lançamentos rodando na porta ${PORT}`);
});
