import axios from "axios"


const UseSignUp = () => {
    const signUp = async (url, data) => {
        try {
            const response = await axios.post(url, data)
            console.log("error")
            return response.status
        }
        catch(error) {
            console.log('error occured')
            return error.response.status
        }
    }

    return signUp
}

export default UseSignUp
