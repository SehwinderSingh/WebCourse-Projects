const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    res.json({ message: "Hello from getAllTours" });
};

const createTour = (req, res) => {
    res.json({ message: "Hello from createTour" });
};

const getTourById = (req, res) => {
    res.json({ message: "Hello from getTourById" });
};

const updateTour = (req, res) => {
    res.json({ message: "Hello from updateTour" });
}

const deleteTour = (req, res) => {
    res.json({ message: "Hello from deleteTour" });
}

module.exports = {
    getAllTours,
    createTour,
    getTourById,
    updateTour,
    deleteTour
};  