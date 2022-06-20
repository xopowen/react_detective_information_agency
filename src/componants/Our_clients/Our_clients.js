import React from "react";
import Frame from "./../../img/Frame 41.png"
//элемент для отображение данных
function Clients_item(props) {
    return <div className="our-clients_item">
        <div className="our-clients_icon">
            <img src={props.data.imgLink} alt=""/>
        </div>
        <div className="our-clients_subtext">
            <p>{props.data.text}</p>
        </div>
    </div>
}

class Our_clients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //пример набора данных
            list: [
                {id: 1, imgLink: Frame, text: 'Политики'},
                {id: 2, imgLink: Frame, text: 'Политики'},
                {id: 3, imgLink: Frame, text: 'Политики'},
                {id: 4, imgLink: Frame, text: 'Политики'}
            ]
        }
    }

    render() {
        //вормируем список с элементами
        let clients_list = <div className="our-clients_list">
            {this.state.list.map((v) => <Clients_item key={v.id} data={v}/>)}
        </div>
        return <div id={this.props.sectionData.section} className="our-clients container">
            <div className="our-clients_header">
                <h2>Наши клиенты</h2>
            </div>
            {clients_list}
            <p className="our-clients_subtext">Строго соблюдаем конфиденциальность и дорожим репутацией каждого
                клиента</p>
        </div>
    }
}

export default Our_clients