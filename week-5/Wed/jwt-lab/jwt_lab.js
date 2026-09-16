const jwt = require('jsonwebtoken');

const secretKey = 'yourSecretKey';

// Step 4: create and sign a JWT
function createJWT() {
  const payload = {
    userId: 1234,
    username: 'savy'
  };

  const token = jwt.sign(payload, secretKey);
  console.log('JWT Token:', token);
  return token;
}

// Step 5: verify a JWT
function verifyJWT(token, key) {
  jwt.verify(token, key, (err, decoded) => {
    if (err) {
      console.error('JWT Verification Failed:', err.message);
    } else {
      console.log('JWT Verified. Decoded:', decoded);
    }
  });
}

// Step 6: decode a JWT (no signature check)
function decodeJWT(token) {
  const decoded = jwt.decode(token);
  console.log('Decoded JWT:', decoded);
}

const token = createJWT();
verifyJWT(token, secretKey);     // correct secret -> verified
verifyJWT(token, 'wrongSecret'); // wrong secret -> fails
decodeJWT(token);                // works without the secret