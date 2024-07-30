import axios from 'axios'


const UseLogOut = () => {
    const logOut = async (url) => {
        try {
            const userStatus = JSON.parse(sessionStorage.getItem("userStatus"))
            sessionStorage.setItem("userStatus", JSON.stringify({
                email: "",
                isUserLoggedIn: false,
                statusCode: 401,
                access: "",
                refresh: ""
            }))
            const response = await axios.post(url, {refresh: userStatus.refresh})
            response.status
        }
        catch(error) {
            return 400
        }

    }
    return logOut
}

export default UseLogOut
