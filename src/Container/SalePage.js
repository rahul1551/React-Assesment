import React from "react"
import classes from "./AdminPage.module.css"
import Createpage from "../Components/Createpage";
import Viewpage from "../Components/viewpage";


class SalePage extends React.Component{
    constructor() {
        super();
        this.state = {
            activeTask:{salecreateorder:true,salevieworder:false}
        }
    }

    componentDidMount() {
        const salecreateorder = document.getElementById("salecreateorder")
        const salevieworder = document.getElementById("salevieworder")
        salecreateorder.addEventListener("click",() => {
            this.setState({activeTask:{salecreateorder:true,salevieworder:false}})
            salecreateorder.style.backgroundColor = "#000000"
            salevieworder.style.backgroundColor = "rgba(175, 40, 40, 0.15)"
        })
        salevieworder.addEventListener("click",() => {
            this.setState({activeTask:{salecreateorder:false,salevieworder:true}})
            salecreateorder.style.backgroundColor = "rgba(175, 40, 40, 0.15)"
            salevieworder.style.backgroundColor = "#000000"
        })
    }

    signoutbutton = () => {
        localStorage.setItem("isLogged",false)
        localStorage.setItem("loginby",null)
        window.location.assign("/");
    }

    render() {
        return(
            <div>
                <div className={classes.heading}>
                    <h1 className={classes.panel}>SALES PANEL</h1>
                    <button onClick={this.signoutbutton} className={classes.signoutbutton}>Sign Out</button>
                </div>
                <div className={classes.maincontainer}>
                    <div className={classes.sidecontainer}>
                        <div className={classes.sidesubcontainer}>
                            <p id={"salecreateorder"} className={classes.p} style={{backgroundColor:"#000000"}}>
                                Add Order to Inventory
                            </p>
                            <p id={"salevieworder"} className={classes.p}>
                                View Order
                            </p>
                        </div>
                    </div>
                    <div className={classes.headcontainer}>
                    {this.state.activeTask.salecreateorder ? <Createpage /> : this.state.activeTask.salevieworder ? <Viewpage /> : <h1>Nothing</h1>}

                    </div>
                </div>
            </div>
        );
    }
}

export default SalePage