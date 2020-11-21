import React, {Component} from 'react'
import APIReturn from "./APIReturn";



const Item = (props) =>{
    return(
        <div>
            <form>
                <input type="checkbox" hidden/>
                <input type="submit" value="Пришёл"/>
            </form>
        </div>
    )
}
class Checked extends Component{
    render() {
        return(
            <div>
                <APIReturn />
                <Item/>
            </div>
        )
    }
}
export default Checked;