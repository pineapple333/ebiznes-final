import axios from 'axios';

class UserService {

    async signIn(email, password) {
        // return axios.post(`https://whiskeyshop-backend.azurewebsites.net/signIn`, {
            // return axios.post(`https://localhost:9000/signIn`, {
        console.log(`Signing in. Email: ${email}, pwd: ${password}`)
        return axios.post(`http://localhost:12345/signIn`, {
            email : email,
            password : password
        })
    }

    async signOut(email, password) {
        // return axios.post(`https://whiskeyshop-backend.azurewebsites.net/signOut`, {
        return axios.post(`http://localhost:12345/signOut`, {
            email : email,
            password : password
        })
    }

    async postUser(email, password) {
        console.log("Signing up")
        // return axios.post('https://whiskeyshop-backend.azurewebsites.net/signUp', {
        return axios.post(`http://localhost:12345/signUp`, {
            email : email,
            password : password
        })
    }

    async Oauth(path){
        // return axios.get("https://whiskeyshop-backend.azurewebsites.net" + path)
        return axios.post(`http://localhost:12345` + path)
    }
}

export default new UserService();
