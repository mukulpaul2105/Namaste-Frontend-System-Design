const sessionId = 'abcdef123456';
document.cookie = `sessionId=${sessionId}; HttpOnly; Secure`

// HttpOnly -> Only can be Accessible on the server. Cannot use JS code to access this
// Secure -> Only accessible through HTTP