import axios from 'axios'


const UseLogIn = () => {

    const logIn =  async (url, data) => {
        try {
            const response = await axios.post(url, data)
            const userStatus = {
                email: response.email,
                isUserLoggedIn: true,
                statusCode: response.status,
                access: response.access,
                refresh: response.refresh
            }
            sessionStorage.setItem("userStatus", JSON.stringify(userStatus))
            return userStatus
        }
        catch(error) {
            const userStatus = {
                email: "",
                isUserLoggedIn: false,
                statusCode: 401,
                access: "",
                refresh: "",
            }
            sessionStorage.setItem("userStatus", JSON.stringify(userStatus))
            return userStatus
        }

    }
    return logIn
}

export default UseLogIn
