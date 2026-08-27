const fs = require('fs');
const os = require('os');


fs.writeFile('sample.txt', 'Hello from Node.js!\nThis is the sample file.\n', (err) => {
  if (err) {
    console.error('Error creating sample.txt:', err.message);
    return;
  }
  console.log('sample.txt created.');

  
  fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading sample.txt:', err.message);
      return;
    }
    console.log('Contents of sample.txt:');
    console.log(data);

   
    fs.writeFile('output.txt', data.toUpperCase(), (err) => {
      if (err) {
        console.error('Error writing output.txt:', err.message);
        return;
      }
      console.log('Data written to output.txt successfully.');
    });
  });
});



console.log('--- OS Info ---');
console.log('Hostname:', os.hostname());
console.log('Platform:', os.platform());
console.log('CPU cores:', os.cpus().length);
console.log('Architecture:', os.arch());
console.log('Total memory (GB):', (os.totalmem() / 1024 ** 3).toFixed(2));
console.log('Free memory (GB):', (os.freemem() / 1024 ** 3).toFixed(2));
console.log('Home directory:', os.homedir());
console.log('Uptime (hours):', (os.uptime() / 3600).toFixed(1));