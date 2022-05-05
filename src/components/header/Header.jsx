import React from "react";

function Header(){
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width={30} height={24} className="d-inline-block align-text-top"/>
                    <h1>Sopa de Letras</h1>
                </a>
            </div>
        </nav>
    );
}

export default Header;