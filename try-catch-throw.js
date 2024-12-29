function d(a, b) {
    try {
        if (b === 0) {
            throw new Error("Can't divide by zero");
        } else {
            console.log(a / b);
        }
    } catch (err) {
        console.log(err.message);
    }
}

// Call the function with valid parameters
d(10, 0); // This will log "Can't divide by zero"