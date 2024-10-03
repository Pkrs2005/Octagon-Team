import React from "react";
import "./SimpleModal.css";
import Button from "../Button.js";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        
    }
    handleInputChange = (event) => {
        // Обработка изменений в поле ввода
    }

    state = { value: '' };
      
    handleValueChange = (event) => this.setState({ value: event.target.value });
      
    render() {
        const { active, setActive } = this.props; // Получаем active и setActive из props

        return (
            <div className={`modal ${active ? 'active' : ''}`}>
                <div className="modal-content">
                    <div id ="obshiyBlok">
                        <div id="Form_Heading">
                            <h1 id = "a123">Создание запроса</h1>
                            <h2 id = "a1233">Создайте запрос на нужный вам документ</h2>

                        </div>
                        <div id = "Frame71"> 
                            <input type="text" id = "LastName" onChange={this.handleValueChange} placeholder = "  Фамилия"/>
                            <input type="text" id = "FirstNName" onChange={this.handleInputChange} placeholder = "  Имя"/>
                            <input type="text" id = "NumberOfDoc" onChange={this.handleInputChange}   placeholder = "  Отчество"/>
                            <input type="text" id = "NumberOfDoc" onChange={this.handleInputChange}   placeholder = "    Название документа"/>
                            <input type="text" id = "AdditionalMassege" onChange={this.handleInputChange} placeholder = "  Дополнительное сообщение"/>
                        </div>
                        <Button  text = "Отправить запрос" className="button-send-request" url = "" />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Modal;