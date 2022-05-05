import React from "react";
import "./footer.css"

function Footer(){
    return(   
     <div className="footer">
        <button type="button" className="btn btn-sm btn-outline-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Trabalho feito por
        </button>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Trabalho feito por:</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <p>Pedro Jorge a2021142041</p>
                <p>Luis Travassos a2021136600</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    
}

export default Footer;