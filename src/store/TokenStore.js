module.exports = class TokenStore {

    static getToken() {
        try {
            return localStorage.getItem('Token');
        } catch (err) {
            return null;
        }
    }

    static setToken(Token) {
        localStorage.setItem('Token', JSON.stringify(Token));
    }   
}
