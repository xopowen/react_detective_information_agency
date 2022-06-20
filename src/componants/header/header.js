import React from 'react';
import Header_nav from './header_nav'
import icon from "./../../img/icon.png"
import bid_pull from "./../../img/оформить заявку.png"
import TachBord from "./tachBord";


//компонент c навигацией
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.setBord_menu = this.setBord_menu.bind(this)
        this.state = {
            Bord_menu: window.innerWidth > 376,
            //определям ширину при загруске
            screon_Width: window.innerWidth
        }
    }

    //функия показа и скрытия меню. применяется в бургере
    setBord_menu(event) {
        this.setState({Bord_menu: !this.state.Bord_menu})
    }

    render() {

        return <header className="header container">
            <div className="header_left">
                <img className="header_image" alt="" src={icon}/>
            </div>
            <div className="header_center menu">
                <TachBord screon_Width={this.state.screon_Width} setBord_menu={this.setBord_menu}/>
                {this.state.Bord_menu && <Header_nav nav_list={this.props.nav}/>}
            </div>
            <div className="header_right">
                <img src={bid_pull} alt=''/>
            </div>
        </header>
    }

}


export default Header