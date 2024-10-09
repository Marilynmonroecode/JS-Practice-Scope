// Function to create a new event
function createEvent(eventName) {
    // Private list of registered users
    const registeredUsers = new Set();

    // Function to register a user for the event
    function registerUser(username) {
        if (typeof username !== 'string' || username.trim() === '') {
            console.error("Please provide a valid username.");
            return;
        }
        registeredUsers.add(username);
        console.log(`${username} has been registered for ${eventName}.`);
    }

    // Function to check if a user is registered for the event
    function checkRegistration(username) {
        if (registeredUsers.has(username)) {
            return `${username} is registered for ${eventName}.`;
        } else {
            return `${username} is not registered for ${eventName}.`;
        }
    }

    // Return the nested functions
    return {
        registerUser,
        checkRegistration,
    };
}

// Example usage
const concert = createEvent("Concert");
const workshop = createEvent("Workshop");

concert.registerUser("Alice"); // "Alice has been registered for Concert."
console.log(concert.checkRegistration("Alice")); // "Alice is registered for Concert."
console.log(concert.checkRegistration("Bob")); // "Bob is not registered for Concert."

workshop.registerUser("Bob"); // "Bob has been registered for Workshop."
console.log(workshop.checkRegistration("Bob")); // "Bob is registered for Workshop."
console.log(workshop.checkRegistration("Alice")); // "Alice is not registered for Workshop."
