import React from "react"
import Button from "./Button"
import "../css/authorizationWin.css"

class AuthorizationWin extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            
        }
    }

    render() {return (<div id = "all_Id">
        <div id = "authWindow_Id">
            <div id = "button">
                <Button/>
            </div>
            <div>
                <div id  = "Frame_57">
                    <div id = "Group_5">
                        <div id = "Frame_55_1">
                            <div>
                                <h1 id = "Frame_52">Логин</h1>
                            </div>
                            <div>
                                <input id = "Frame_53_1"/>
                            </div>
                        </div>
                            <div id = "Frame_55">
                                <div>
                                    <h1 id = "Frame_52_1">Пароль</h1>
                                </div>
                            <div>
                                <input id = "Frame_53"/>
                            </div>
                            
                        </div>
                        <div id = "Frame_51">
                            <div id = "Frame_51_1">Авторизация</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id =  "logo_zelyony_3">
        </div>
        
        <div id =  "logo_а_4">
        </div>
    </div>)
    }
    
    
}

export default AuthorizationWin