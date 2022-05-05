import React from "react";
import "./footer.css"

function Footer(){
    return(   
        <div className="card">
        <div className="card-body text-center shadow p-3 mb-5 bg-body rounded main">
            <blockquote className="blockquote mb-0"> 
            <p><b>Trabalho realizador por</b></p>
            <footer className="blockquote-footer name-footer">Pedro Jorge a2021142041 </footer>
            <footer className="blockquote-footer name-footer">Luiz Travassos a2021136600 </footer>
            </blockquote>
        </div>
        </div>
    )
    
}

export default Footer;