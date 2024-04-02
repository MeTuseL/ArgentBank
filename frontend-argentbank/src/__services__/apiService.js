/**
 * An object that contains a list of API services.
 *
 * @category Services
 * @namespace ApiService
 */
const apiService = {
    /**
     * Fetches user token from the API for the specified username and password.
     *
     * @memberOf ApiService
     * @param {Object} user - The user object containing username and password.
     * @returns  { Promise<Object> } A promise containing user token for the specified username and password.
     */
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
    /**
     * Fetches user information from the API for the specified user token.
     *
     * @memberOf ApiService
     * @param {String} token - The user token.
     * @returns  { Promise<Object> } A promise containing user information for the specified user token.
     */
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
    /**
     * Updates user information for the specified user token, username, and last name.
     *
     * @memberOf ApiService
     * @param {String} token - The user token.
     * @param {Object} user - The user object containing username and last name.
     * @returns  { Promise<Object> } A promise containing updated user information.
     */
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
