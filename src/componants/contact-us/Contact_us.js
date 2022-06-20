import React from "react";
import Main_button from "../Main_button";
import Img_up from "./../../img/down.png"

//label котроый отрендерится если экран больше 375
function Label_full_screen(props) {
    return <label>{props.data.text}
        <input type={props.data.type} name={props.data.name} placeholder
            ={props.data.placeholder}/> </label>
}

//label котроый отрендерится если экран меньше 375
function Label_minc_screen(props) {
    return <label>
        <input type={props.data.type} name={props.data.name} placeholder
            ={props.data.text}/> </label>
}

//компонент с формой (форма не обрабатывается)
class Contact_us extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //образец json объекта
            list: [{
                text: 'Меня зовут',
                type: "text",
                name: "full-name",
                placeholder: "Караникола Евгений"
            }, {text: 'Мой email', type: "email", name: "email", placeholder: "example@gmail.com"}, {
                text: 'Мой номер',
                type: "tel",
                name: "number",
                placeholder: "+7 (___) ___-____."
            }]
        }
    }

    //скролит на верх при любом вызове (претпологается что при  клике )
    scroll_to_up(event) {
        window.scrollTo(0, 0)
    }

    render() {

        let list_label;
        // выбор варианта по размерам экрана
        if (window.innerWidth > 375) {
            list_label = this.state.list.map((v, i) => {
                return <Label_full_screen key={i} data={v}/>
            })
        } else {
            list_label = this.state.list.map((v, i) => {
                return <Label_minc_screen key={i} data={v}/>
            })
        }
        return <div id={this.props.sectionData.section} className="contact-us container">
            <div className="contact-us_header">
                <h2>Связаться с нами</h2>
                <div className="go-up">
                    <img src={Img_up} alt="" onClick={this.scroll_to_up}/>
                </div>
            </div>
            <form className="contact-us_form" name="contact-us" id="contact-us">
                {list_label}

                { //претпологлась что форма будит отелна но нет
                    this.props.sectionData.section == 'contact-us' &&
                    <label className="contact-us_subtext"><input type="checkbox"/>Согласие на обработку персональных
                        данных</label>}
                <Main_button form='contact-us'/>
            </form>
        </div>
    }
}

export default Contact_us