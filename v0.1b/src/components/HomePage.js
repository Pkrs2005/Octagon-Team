import React from "react"
import Button from "./Button"

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            
        }
        
    }
    
    
    render() {
        return (
            <div>
                <h1>Типо хоумпейдж</h1>
                <div id="button">
                    <Button url="http://localhost:3000/AuthorizationWin" />
                </div>
            </div>
        )
    }
    
    
}

export default HomePage