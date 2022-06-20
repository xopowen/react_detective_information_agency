import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
        //передаём this в колбэк
        this.move_to_select = this.move_to_select.bind(this);

    }

    //перемещаемся к элементу по id.
    //получаем событие.
    //принемает -  таргет с атребутом href.
    //дейстиеи -  перехоим к id по href.
    //если такого нет пишем об ошибке в консоль.
    move_to_select(event) {
        // переделать на способ перехвата react (пока не изучил)
        try {
            //получаем y вершины элемента
            //let  header = document.querySelector(".header").getBoundingClientRect().height
            let y_href = document.querySelector('#' + event.target.attributes['href'].value).getBoundingClientRect().y
            window.scrollTo(0, y_href)
        } catch (e) {
            console.log('TypeError')
        }
        event.preventDefault()
    }

    render() {
        return <a href={this.props.data.section.toString()} onClick={this.move_to_select}
                  key={this.props.data.id.toString()}
                  className="menu_item">{this.props.data.name.toString()}</a>
    }
}


class Header_nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let nav_list = this.props.nav_list;
        return <nav>
            <ul className="menu_list">
                {nav_list.map((v, i, arr) => {
                    return <li key={v.id}><Item data={v}/></li>
                })}
            </ul>
        </nav>
    }
}

export default Header_nav