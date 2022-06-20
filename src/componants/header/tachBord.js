import React from 'react';
import tachBord from "../../img/tachBord.png";
import imgClose from "./../../img/close.png"

class TachBord extends React.Component {
    //показываем бургер если экран меньше 376, при нажати изображение изменится
    constructor(props) {
        super(props);
        this.changeOpen = this.changeOpen.bind(this)
        this.state = {
            open: false
        }
    }

    //дейстие -  смены значения Bord_menu у компонента Header,
    //изменит состояние open
    changeOpen(event) {
        this.setState({open: !this.state.open});

        this.props.setBord_menu(event);
    }

    render() {
        //boolen значения
        let show = this.props.screon_Width < 376
        let imgs = [tachBord, imgClose]
        if (show) {
            return <img className="menu_tachBord" src={imgs[this.state.open + 0]} onClick={this.changeOpen} alt='x'/>
        }
        return null
    }
}

export default TachBord