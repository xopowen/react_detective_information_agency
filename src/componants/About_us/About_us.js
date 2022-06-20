import React from "react";
import attachment from "./../../img/attachment.png"
import edit_alt from "./../../img/edit-alt.png"
import imgClose from "./../../img/close.png"
import imgPolaroid from "./../../img/Polaroid 600 Format.png"
import imgWrapper from "./../../img/wrapper.png"
import imgStar from "./../../img/star.png"

class About_us extends React.Component {
    //обычный компонент нечего интересного
    constructor(props) {
        super(props);
    }

    render() {
        return <div id={this.props.sectionData.section} className="about-us ">
            <div className="container">
                <div className="about-us_header">
                    <h2 className="about-us_heat">Кто мы?</h2>
                    <p className="about-us_subtext">О нас не пишут рейтинговые агентства и поисковые системы</p>
                </div>
                <div className="about-us_list-card">
                    <div className="about-us_card card card__one">
                        <div className="card_header">
                            <div className="card_left">
                                <div className="card_icon">
                                    <img src={attachment} alt=""/>
                                </div>
                                <p className="card_note">заметка </p>
                            </div>
                            <div className="card_right">
                                <div className="card_icon">
                                    <img src={edit_alt} alt=""/>
                                </div>
                                <div className="card_icon">
                                    <img src={imgClose} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="card_body">
                            <div className="card_img">
                                <img src="" alt=""/>
                            </div>
                            <p><span>1.</span> Работаем только
                                по рекомендации
                                от "своих"</p>
                        </div>
                        <div className="card_footer">
                            <div className="card_left">

                            </div>
                            <div className="card_right">
                                <div className="card_attachmet">
                                    <img src="img/Group%201390.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-us_card card card__two">
                        <div className="card_body">
                            <div className="card_img">
                                <img src={imgPolaroid} alt=""/>
                            </div>
                            <p><span>2.</span>Применяем
                                агентскую сеть
                                по всему миру</p>
                        </div>
                    </div>
                    <div className="about-us_card card card__three">

                        <div className="card_body">

                            <p><span>3.</span> Используем арсенал профессиональных технических средств
                            </p>
                            <div className="card_img">
                                <img src={imgWrapper} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="about-us_card card card__four">

                        <div className="card_body">
                            <div className="card_img">
                                <img src={imgStar} alt=""/>
                            </div>
                            <p><span>4.</span> Считаем
                                что репутация важнее денег
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    }
}

export default About_us