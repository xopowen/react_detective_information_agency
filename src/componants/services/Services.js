import React from "react";
import work_in_file from "./../../img/work_in_file.png"
import swaper from "./../../img/swaper.png"
import Slaider_list from "./Slaider_list";

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.changeSlaids = this.changeSlaids.bind(this)
        //пример наборы данных
        let item = {
            linkImg: work_in_file,
            header: 'Работа с информацией',
            ul: ['Поиск и проверка информации',
                'Составление персонального досье',
                'Работа с репутацией (защита персональных данных)',
                'Информация по номеру телефона'
            ]
        }
        let item2 = {
            linkImg: work_in_file,
            header: '2Работа с информацией',
            ul: ['Поиск и проверка информации',
                'Составление персонального досье',
                'Работа с репутацией (защита персональных данных)',
                'Информация по номеру телефона'
            ]
        }

        this.state = {
            //примерый набор данных
            listData: [item, item2, item, item, item, item],
            //start_end  - вияет на отображаемых карточек данных
            start_end: {
                start: 0,
                end: window.innerWidth > 375 ? 3 : 1,
            }
        }
    }
    //листает сладер изменением данных в start_end
    changeSlaids(event) {
        if (this.state.start_end.start >= this.state.listData.length - 1) {
            this.setState({
                start_end: {
                    end: this.state.start_end.end - this.state.start_end.start,
                    start: 0
                }
            })
        } else {
            this.setState({
                start_end: {
                    end: this.state.start_end.end + 1,
                    start: this.state.start_end.start + 1
                }
            })
        }
    }


    render() {
        return <div className="container">
            <div id={this.props.sectionData.section} className="slaider">
                <div className="slaider_headen">
                    <h2 className="slaider_heat">{this.props.sectionData.name}</h2>
                    <p className="slaider_subtext">Когда другие бессильны - мы делаем</p>
                    <img src={swaper} onClick={this.changeSlaids} alt=""/>
                </div>
                <Slaider_list list={this.state.listData} start_end={this.state.start_end}/>

            </div>
        </div>

    }

}

export default Services