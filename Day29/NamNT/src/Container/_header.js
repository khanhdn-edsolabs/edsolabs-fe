import React from "react";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router";

const Header = () =>{
    const history = useHistory();
    const handleLogout = ()=>{
        history.push("/");
    }

    const showButton = ()=>{
        let arrow = document.querySelector(".hover-icon");
        let button = document.querySelector(".Logout");
        arrow.addEventListener("click",function(){
            button.classList.toggle("showButton");
        })
    }

    return(
        <div className="header">
            <div className="header__admin">
                <span className="header__title">
                    Welcome, Admin
                    <i className="hover-icon fas fa-chevron-down" onClick={showButton}></i>
                </span>
                <Button 
                    className="Logout" 
                    variant="primary"
                    onClick={handleLogout}
                >
                    Log out
                </Button>
            </div>
        </div>
    )
}

export default Header;