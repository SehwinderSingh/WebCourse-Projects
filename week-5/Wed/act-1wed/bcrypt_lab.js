const bcrypt = require('bcrypt');

async function hashPassword() {
    const password = 'mySecurePassword'; 

    try{
        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(password, salt);

        console.log('Password:' ,password);
        console.log('Salt:' ,salt);
        console.log('Hashed Password:' ,hashedPassword);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function comparePassword(inputPassword, hashedPassword) {
    try {
        const isMatch = await bcrypt.compare(inputPassword, hashedPassword)
        if (isMatch) {
            console.log(`"${inputPassword}" -> Password is correct.`)
        } else {
            console.log(`"${inputPassword}" -> Password is incorrect.`)
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function hashPasswordSync() {
  const password = 'mySecurePassword';
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  console.log('Synchronous Hashed Password:', hashedPassword);
}

async function main() {
  const hash = await hashPassword();
  await comparePassword('mySecurePassword', hash); 
  await comparePassword('wrongPassword', hash);    
  hashPasswordSync();
}

main();
