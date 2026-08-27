const { format, addDays } = require('date-fns');

const currentDate = new Date();

const formattedDate = format(currentDate, 'MMMM dd, yyyy');
console.log('Formatted Date:', formattedDate);

const futureDate = addDays(currentDate, 7);
console.log('Future Date:', format(futureDate, 'MMMM dd, yyyy'));