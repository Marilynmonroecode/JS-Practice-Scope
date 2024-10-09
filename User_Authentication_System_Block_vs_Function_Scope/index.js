// Simulated user database
const userDatabase = {
    'adminUser': 'adminPass',
    'viewerUser': 'viewerPass'
};

function loginUser(username, password) {
    // Check if the username exists in the database
    const storedPassword = userDatabase[username];

    // Function scope for handling password verification
    if (!storedPassword) {
        return "Username does not exist.";
    }

    if (storedPassword !== password) {
        return "Invalid password.";
    }

    // If the username and password match
    return "Access granted.";
}

// Example Usage
console.log(loginUser('adminUser', 'adminPass')); // "Access granted."
console.log(loginUser('viewerUser', 'viewerPass')); // "Access granted."
console.log(loginUser('unknownUser', 'somePass')); // "Username does not exist."
console.log(loginUser('adminUser', 'wrongPass')); // "Invalid password."
