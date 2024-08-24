// Always validate user inputs

// Suppose you are taking an image url from user as input and user passes this url in query
const url = `https://localhost:3001/usr/image?imageURL=
                http//:169.393.388.883/latest/meta-data/iam/security-credentials/Admin-Role`

// where http:169.393.388.883 is the server host and 
// /latest/meta-data/iam/security-credentials/Admin-Role is the path to get Admint Credentials.
// Than this will send create some mess

// So before performing anything with the user input first validate it
// Example

// Implement function to validate URL
function isValidURL(url) {
    // User libraries like url-parser or regext to validate url
    return true;
}

const userURL = req.query.url // get the user provided url
if (!isValidURL(userURL)) {
    return res.status(400).send("Invalid URL");
}
