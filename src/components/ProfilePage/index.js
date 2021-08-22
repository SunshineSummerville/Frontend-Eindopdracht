import React  from 'react';


const Profile = () => {
    const getCurrentUser = () => {
        return JSON.parse(localStorage.getItem("user_id"));
    };

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{getCurrentUser.username}</strong> Profile
                </h3>
            </header>
            {/*<p>*/}
            {/*    <strong>Token:</strong> {getCurrentUser.accessToken.substring(0, 20)} ...{" "}*/}
            {/*    {getCurrentUser.accessToken.substr(getCurrentUser.accessToken.length - 20)}*/}
            {/*</p>*/}
            <p>
                <strong>Id:</strong> {getCurrentUser.id}
            </p>
            <p>
                <strong>Email:</strong> {getCurrentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
                {getCurrentUser.roles &&
                getCurrentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
        </div>
    );
};

export default Profile;
