import React from "react";

const login = () => {


    return (
        <>
            <div className="login">
                <div className="login-triangle"></div>
                <h2 className="login-header">Log in</h2>
                <form>
                    <div className="login-details">
                        <input type="email" id="email" placeholder="Email" />
                        <input type="password" id="psw" placeholder="Password" autoComplete="off" />
                    </div>
                    <div>
                        <button type="button" value="Log in" onclick="saveData()" autoComplete="off">
                            login
                        </button>
                    </div>
                    <div>
                        <a href="D:\React_CRUD\react_crud\src\Signup.js">
                            <input type="signup_submit" value="Sign Up" />
                        </a>

                    </div>
                </form>
            </div>
        </>
    );
};

export default login;
