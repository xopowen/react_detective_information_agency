import React from "react";
import imgSubtract from "./../img/Subtract.png"

function Main_button(props) {


    function click_Buttor(event) {

        if (props.form == undefined) {
            let contact = document.querySelector("#contact-us").getBoundingClientRect()
            window.scrollTo(0, contact.y)
            event.preventDefault();
        }
    }

    return <button onClick={click_Buttor} className="button button__application" form={props.form}>
        <p className="button_text">Оформить заявку</p>
        <div className="button_img">
            <img src={imgSubtract} alt="+"/>
        </div>
    </button>
}

export default Main_button