// Redirect to login page
function redirectToLogin() {
    window.location.href = "/login";
}

// Redirect to register page
function redirectToRegister() {
    window.location.href = "/register";
}

// Function to select role and redirect accordingly
function selectRole(role) {
    if (role === 'Farmer') {
        window.location.href = "/farmer-dashboard";
    } else if (role === 'Pathologist') {
        window.location.href = "/pathologist-dashboard";
    } else if (role === 'Marketing Person') {
        window.location.href = "/marketing-dashboard";
    } else if (role === 'Customer') {
        window.location.href = "/customer-dashboard";
    }
}
