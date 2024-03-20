const apiService = {
    loginUser: async (user) => {
        try {
            const res = await fetch(`http://localhost:3001/api/v1/user/login`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user.username,
                    password: user.password,
                }),
            })
            const result = await res.json()
            if (result && result.body && result.body.token) {
                return { success: result.body.token }
            } else {
                return { error: 'An error occurred' }
            }
        } catch (err) {
            return { error: err }
        }
    },
    readProfileUser: async (token) => {
        try {
            const res = await fetch('localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: { Authorization: 'Bearer ' + token },
            })
            console.log(res)
            const result = await res.json()
            if (result && result.data) {
                return { success: result.data }
            } else {
                return { error: 'An error occurred' }
            }
        } catch (err) {
            return { error: err }
        }
    },
}

export default apiService
