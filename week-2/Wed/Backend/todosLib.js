let todosArray = [];
let nextId = 1;

function getAll() {
    return todosArray;
}

function addOne(task, dueDate) {
    if (!task || !dueDate) {
        return false;
    }
    const newTodo = {
        id: nextId++,
        task,
        completed: false,
        dueDate
    };

    todosArray.push(newTodo);
    return newTodo;
}

function findById(id) {
    const numericId = Number(id);
    const todo = todosArray.find(item => item.id === numericId);
    return todo || false;
}

function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (todo) {
        if (updatedData.task) todo.task = updatedData.task;
        if (updatedData.completed !== undefined) todo.completed = updatedData.completed;
        if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
        return todo;
    }
    return false;
}
function deleteOneById(id) {
    const todo = findById(id);
    if (todo) {
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(item => item.id !== Number(id));
        return todosArray.length < initialLength;
    }
    return false;
}

if (require.main === module) {

    let result = addOne("Buy groceries", "2025-08-30");
    console.log(result);
    result = addOne("Finish lab assignment", "2025-09-02");
    console.log(result);

    console.log("addOne called with missing data:", addOne("No due date"));

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));
    console.log("findById called with bad id:", findById(99));

    console.log("updateOneById called:", updateOneById(1, { completed: true, dueDate: "2025-08-31" }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
    console.log("getAll called at the end:", getAll());
}

const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;