import React from "react";
import line_left from "./../../img/pointer-left.png"
import graphics from "./../../img/graphics.png"
//элемент карточек
function Card_work(props) {
    return <div className="how-we-work_card card-work">
        <div className="card-work_header">
            <div className="card-work_icon">
                <img src={props.data.imgLink} alt=""/>
            </div>
            <div className="card-work_left-text">
                <p className="card-work_subtext">
                    {props.data.id}
                </p>
            </div>
        </div>
        <div className="card-work_main">
            <p>{props.data.text}</p>
        </div>
    </div>
}

class How_we_work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //пример набора данных
            list: [
                {
                    id: 1,
                    imgLink: line_left,
                    text: 'Разбираемся в ситуации'
                },
                {
                    id: 2,
                    imgLink: line_left,
                    text: 'Составляем план действий'
                },
                {
                    id: 3,
                    imgLink: line_left,
                    text: 'Предоставляем результат'
                }]
        }
    }


    render() {
        //перебераем список с применением элемента Card_work
        let cards = this.state.list.map((v) => {
            return <Card_work key={v.id} data={v}/>
        })

        return <div id={this.props.sectionData.section} className="how-we-work container">
            <div className="how-we-work_left">
                <div className="how-we-work_header">
                    <h2>{this.props.sectionData.name}</h2>
                </div>
                <div className="how-we-work_main">
                    {cards}
                </div>
            </div>
            {window.innerWidth > 375 && <div className="how-we-work_right">
                <img src={graphics} alt=""/>
            </div>}
        </div>
    }
}

export default How_we_work