// import Buffer from Buffer;

// 1. Injection Attack in SQL/NoSQL Database; (Insecure Example)

const userInput = '{"username": "admin", "password": {"$ne": null}}';
const query = `SELECT * FROM users WHERE data = '${userInput}'`;


// 2. Resource Exhauste (e.g. Denial of Service): (Insecure Example)

const userInput2 = '{"data": "' + 'A'.repeat(100000000) + '"}'; // As A is repeated so this text size become 100MB
const data = JSON.parse(userInput2)
console.log(data)



// 3. Deserialization Vulnerablities

const userInput3 = '{"type": "Buffer", "data": [72, 102, 108, 108, 111]}';
const buffer = JSON.parse(userInput3)
console.log(buffer)
const uint8Array = new Uint8Array(buffer.data);
console.log(uint8Array)
const textDecoder = new TextDecoder();
console.log(textDecoder)
const text = textDecoder.decode(uint8Array);
console.log(text)

