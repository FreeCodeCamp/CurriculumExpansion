const firstPrime = 2;
const secondPrime = 5;
const N = firstPrime * secondPrime;
const phiOfN = (firstPrime - 1) * (secondPrime - 1);
let publicKey = 0;

function hashTheMessage(message) {
  let hashValue = 0;
  for (let i = 0, msgLength = message.length; i < msgLength; ++i) {
    hashValue += message.charCodeAt(i);
  }
  return hashValue;
}

function isCoPrime(smallerNum, largerNum) {
  for (let i = 2; i <= smallerNum; ++i) {
    if (smallerNum % i === 0 && largerNum % i === 0) {
      return false;
    }
  }
  return true;
}

function generatePrivateKey() {
  for (let privateKey = 2; privateKey < phiOfN; ++privateKey) {
    if (isCoPrime(privateKey, N) && isCoPrime(privateKey, phiOfN)) {
      return privateKey;
    }
  }

  console.log("Private key can't be generated.");
  return 0;
}

function generatePublicKey(privateKey) {
  while (privateKey) {
    if ((publicKey * privateKey) % phiOfN === 1 && privateKey !== publicKey) {
    }
  }
}

function generateSignature() {}

function decryptSignature() {}

/*
We need to increment `publicKey` on every iteration to check the conditions.

Increment `publicKey` on every iteration of loop.
*/
