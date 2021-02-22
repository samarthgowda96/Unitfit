import axios from 'axios'
const BASE_URI = "http://localhost:9001"

export default class Ajax {
    static async createUser(payload) {
        try {
            console.log(payload.data)
            let response = await axios.post(`${BASE_URI}/login`, payload)
            return response.data

        } catch (e) {
            console.error(e)

        }
    }
}