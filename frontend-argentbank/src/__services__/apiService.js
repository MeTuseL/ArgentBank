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
            if (result && result.body) {
                return { success: result.body }
            } else {
                return { error: 'An error occurred' }
            }
        } catch (err) {
            return { error: err }
        }
    },
    readProfileUser: async (token) => {
        try {
            const res = await fetch(
                'http://localhost:3001/api/v1/user/profile',
                {
                    method: 'POST',
                    headers: { Authorization: 'Bearer ' + token },
                }
            )
            const result = await res.json()
            if (result && result.body) {
                return { success: result.body }
            } else {
                return { error: 'An error occurred' }
            }
        } catch (err) {
            return { error: err }
        }
    },
    updateProfileUser: async (token, user) => {
        try {
            const res = await fetch(
                'http://localhost:3001/api/v1/user/profile',
                {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token,
                    },
                    body: JSON.stringify({
                        firstName: user.firstName,
                        lastName: user.lastName,
                    }),
                }
            )
            const result = await res.json()
            if (result && result.body) {
                return { success: result.body }
            } else {
                return { error: 'An error occurred' }
            }
        } catch (err) {
            return { error: err }
        }
    },
}

export default apiService
