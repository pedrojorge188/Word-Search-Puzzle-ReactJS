import React from "react";

function Header(){
    return (
        <div class="shadow-sm p-3 mb-5 bg-body rounded">
            <nav className="navbar navbar-light bg-light header text-center">
                <div className="container-fluid box">
                    <a className="navbar-brand" href="#">
                        <img src="%PUBLIC_URL%/Images/HeaderImage.jpg"></img>
                        <h1 className="text-center">Sopa de Letras</h1>
                    </a>
                </div>
            </nav>
        </div>
        
    );
}

export default Header;