import React from 'react';

const useState=React.useState
function UseForm(){
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confimationPassword, setConfirmationPassword] = useState()
    return (
        <>
            <div>
            <form  className="formUser">
            <h1>Creating Users</h1>
            <div className="form-group">
                <input value={firstName} type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
            </div><br />
            
            <div className="form-group">
                <input value={lastName} type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
            </div><br />
            
            <div className="form-group">
                <input value={email} type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}  />
            </div><br />
            
            <div className="form-group">
                <input value={password} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </div><br />
            
            <div className="form-group">
                <input value={confimationPassword} type="password" placeholder="Confirmation Password" onChange={e => setConfirmationPassword(e.target.value)} />
                </div><br />
            
            <button>Add User</button>
        </form>
            </div>


            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirmation Password: {confimationPassword}</p>
            </div>

        </>
    )
}
export default UseForm;