import React from 'react';
import Main_button from "../Main_button";
import start_page_img from "./../../img/main_img.png";
//выводит кномку связи
function Button_chat() {

    return <button className="button button__chat">
        <div className="button_img">
            <img src="img/photo.png" alt=""/>
        </div>
        <p className="button_text">открыть чат <a href="Adrasteia@mail.com"
                                                  className="button_link">Adrasteia@mail.com</a></p>
    </button>
}

class Start_page extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.sectionData)
        return <div id={this.props.sectionData.section} className="start-page container">
            <div className="start-page_left">
                <h2 className="start-page_heat">Детективно-информационное <span>агентство</span></h2>
                <p className="start-page_subtitle">Владеешь информацией - владеешь миром</p>
            </div>

            <div className="start-page_right">
                <div className="start-page_img">
                    <img src={start_page_img} alt=""/>
                </div>
                {window.innerWidth > 375 && <Button_chat/>}
            </div>
            <Main_button/>
        </div>
    }
}

export default Start_page