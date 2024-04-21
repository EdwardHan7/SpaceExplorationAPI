const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON

const spacecraftRoutes = require('./routes/spacecraft');
const celestialBodyRoutes = require('./routes/celestialBodies');
const spaceMissionRoutes = require('./routes/spaceMissions');
// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/yourDatabaseName")
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

        app.use('/api/spaceMissions', spaceMissionRoutes);
        app.use('/api/spacecraft', spacecraftRoutes);
        app.use('/api/celestialBodies', celestialBodyRoutes);
    })
    .catch(err => console.log(err));
