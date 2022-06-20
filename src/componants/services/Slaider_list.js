import React from "react";


function Slaider_item(props) {
    return <div className="slaider_item slaider-item">
        <div className="slaider-item_img">
            <img src={props.data.linkImg} alt=""/>
        </div>
        <div className="slaider-item_body">

            <h2 className="slaider-item_header">
                {props.data.header}
            </h2>
            <ul className="slaider-item_main">
                {props.data.ul.map((v, i, arr) => <li key={i} className="slaider-item_li">{v}</li>)}

            </ul>
        </div>
    </div>
}

class Slaider_list extends React.Component {
    //компонет выводящий список элкментов слайдера
    render() {
        let _list = () => {
            let listdata = this.props.list
            let lenlist = listdata.length
            let result = []
            let start = this.props.start_end.start
            let end = this.props.start_end.end
            if (end <= lenlist - 1) {
                result.push(...listdata.slice(start, end + 1))
                console.log(start, end + 1)
            } else {
                result.push(...listdata.slice(start))
                result.push(...listdata.slice(0, end - lenlist + 1))
            }
            return result
        }
        return <div className="slaider_list">
            {_list().map((v, i, arr) => <Slaider_item key={i} data={v}/>)}
        </div>
    }
}

export default Slaider_list