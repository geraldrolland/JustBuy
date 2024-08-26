import axios from 'axios'


const UseLogIn = () => {

    const logIn =  async (url, data) => {
        try {
            const response = await axios.post(url, data)
            if (response) {
            const userStatus = {
                email: response.data.email,
                isUserLoggedIn: true,
                statusCode: response.status,
                access: response.data.access,
                refresh: response.data.refresh,
                first_name: response.data.first_name,
                last_name: response.data.last_name
            }
            
            sessionStorage.setItem("userStatus", JSON.stringify(userStatus))
            console.log("saved")
            console.log(response.status)
            console.log(response.data.email)
            return userStatus
        }
        }
        catch(error) {
            const userStatus = {
                email: "",
                isUserLoggedIn: false,
                statusCode: error.response.status,
                access: "",
                refresh: "",
            }
            sessionStorage.setItem("userStatus", JSON.stringify(userStatus))
            console.log("catched error")
            return userStatus
        }

    }
    return logIn
}

export default UseLogIn
