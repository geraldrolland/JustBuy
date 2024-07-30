import axios from "axios"


const UseSignUp = () => {
    const signUp = async (url, data) => {
        try {
            const response = await axios.post(url, data)
            return response.status
        }
        catch(error) {
            return error.status
        }
    }

    return signUp
}

export default UseSignUp
