module.exports = class UserStore {

    static getUser() {
        try {
            return localStorage.getItem('user');
        } catch (err) {
            return null;
        }
    }

    static setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    static isLoggedIn() {
        var user = localStorage.getItem('user');
        console.log(user)
        if (user === undefined || user === null || user === 'null') {
            return false;
        } else {
            return true;
        }
    }
}