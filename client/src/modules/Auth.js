class Auth {
    // https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt
    static authenticateToken(token) {
        localStorage.setItem('token', token);
    }

    static authenticateUser(user) {
        localStorage.setItem('user', user)
    }

    static isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    static deauthenticateUser() {
        localStorage.removeItem('token');
    }

    static getToken() {
        return localStorage.getItem('token');
    }
    static getUser() {
        return localStorage.getItem('user')
    }

}

export default Auth;