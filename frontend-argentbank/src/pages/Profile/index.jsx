import { useDispatch, useSelector } from 'react-redux'
import {
    editUserInfos,
    selectTokenUser,
    selectUserInfos,
} from '../../__features__/userInfos'
import { useEffect, useState } from 'react'
import apiService from '../../__services__/apiService'
import { useNavigate } from 'react-router-dom'

function Profile() {
    document.title = 'Argent Bank - Profile'
    const navigate = useNavigate()
    const user = useSelector(selectUserInfos)
    const userToken = useSelector(selectTokenUser)
    const dispatch = useDispatch()
    const [isEdit, setIsEdit] = useState(false)
    const [userInfos, setUserInfos] = useState({
        firstName: '',
        lastName: '',
    })
    //
    useEffect(() => {
        if (user.connected === false) {
            navigate('/')
        }
    }, [navigate, user.connected])
    //
    const saveChangeName = () => {
        apiService
            .updateProfileUser(userToken.token, userInfos)
            .then((updateUser) => {
                dispatch(editUserInfos(updateUser.success))
            })
            .finally(() => setIsEdit(false))
    }
    //
    const onFieldChange = (e) => {
        //onchange field
        const { name, value } = e.target
        const userInfos_ = { ...userInfos }
        userInfos_[name] = value
        setUserInfos(userInfos_)
    }

    console.log(user)
    return (
        <>
            <main className="main bg-dark">
                {isEdit === false ? (
                    <div className="header">
                        <h1>
                            Welcome back
                            <br />
                            {`${user.firstName} ${user.lastName} !`}
                        </h1>
                        <button
                            className="edit-button"
                            onClick={() => setIsEdit(true)}
                        >
                            Edit Name
                        </button>
                    </div>
                ) : (
                    <div className="header">
                        <h1>Welcome back</h1>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            autoComplete="firstName"
                            value={userInfos.firstName}
                            placeholder={user.firstName}
                            onChange={onFieldChange}
                        />
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            autoComplete="lastName"
                            value={userInfos.lastName}
                            placeholder={user.lastName}
                            onChange={onFieldChange}
                        />
                        <button
                            className="save-button"
                            onClick={saveChangeName}
                        >
                            Save
                        </button>
                        <button
                            className="cancel-button"
                            onClick={() => setIsEdit(false)}
                        >
                            Cancel
                        </button>
                    </div>
                )}
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">
                            Argent Bank Checking (x8349)
                        </h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">
                            Available Balance
                        </p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">
                            View transactions
                        </button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">
                            Argent Bank Savings (x6712)
                        </h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">
                            Available Balance
                        </p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">
                            View transactions
                        </button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">
                            Argent Bank Credit Card (x8349)
                        </h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">
                            Current Balance
                        </p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">
                            View transactions
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Profile
