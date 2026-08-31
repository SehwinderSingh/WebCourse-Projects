const express = require('express');
const app = express();
const port = 4000;

const {
    getAllTours,
    createTour,
    getTourById,
    updateTour,
    deleteTour          
} = require('./tourHandlers');

app.use(express.json());

app.get('/tours', getAllTours);
app.post('/tours', createTour);
app.get('/tours/:id', getTourById);
app.patch('/tours/:id', updateTour);
app.delete('/tours/:id', deleteTour);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
