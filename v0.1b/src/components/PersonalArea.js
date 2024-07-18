import React from "react";
import "../css/PersonalArea.css";
import Button from "./Button";
import profileImage from "../img/profile.png"; // Импортируем изображение профиля
import search from "../img/search.png";
import path from "../img/path.png";
    class PersonalArea extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        handleInputChange = (event) => {
            // Обработка изменений в поле ввода
        }
        componentDidMount() {
            // Устанавливаем цвет фона страницы
            document.body.style.backgroundColor = '#F0E8F4'; // Легкий голубой цвет
    
            // Получаем элемент с id 'RightSide'
            const rightSideDiv = document.getElementById('RightSide');
            
            // Устанавливаем цвет фона для элемента 'RightSide'
            if (rightSideDiv) {
                rightSideDiv.style.backgroundColor = '#FFFFFF'; // Белый цвет фона для RightSide
            }
        }
       
        componentWillUnmount() {
            // Возвращаем цвет фона по умолчанию при размонтировании компонента
            document.body.style.backgroundColor = ''; // Убираем изменения, чтобы вернуть цвет по умолчанию
        }
       
        render() {
            return (
                <div id="all_Id">
                    <div id="menu">
                        <div id="Profile">
                            <div id = "Name"><p>Name123123</p></div>
                            <div id = "Admin"><p>Name123123</p></div>
                            <div id="PlaceProfilePhoto">
                                <div id="ProfilePhoto"  style={{ backgroundImage: `url(${profileImage})` }}>
                            </div></div>
                        </div>
                        <div id = "button87987979">
                        <Button  text = "Меню" className="button-style-menu" url = ""/> 
                            </div>
                        
                        <div id = "Frame_75">
                            {/* добавить ссылки к кнопкам*/}
                            <Button id = "button1" text = "Документы" className="button-menu" url = ""/> 
                            <Button id = "button1" text = "Все запросы" className="button-menu" url = ""/>
                            <Button id = "button1" text = "Принятые запросы" className="button-menu" url = ""/>
                            <Button id = "button1" text = "Отклонённые запросы" className="button-menu" url = ""/>
                        </div>
                        <div id = "CreateRequest">
                            <Button  text = "Создать запрос" className="button-style1" url = ""/>
                        </div>
                        
                    </div>
                    <div id = "RightSide">
                    
                        <input id="SearchBar" style={{ backgroundImage: `url(${search})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left center' }} onChange={this.handleInputChange} />
                        <div id = "Indicator">
                            <div id = "Line"></div>
                            {/*добавить ссылки */}
                            <button id = "ic-keyboard-arrow-right-24px" style={{ backgroundImage: `url(${path})`, backgroundRepeat: 'no-repeat'}} />
                            <button id = "ic-keyboard-arrow-left-24px" style={{ backgroundImage: `url(${path})`, backgroundRepeat: 'no-repeat'}} />
                        </div>
                        <div className="massage" id = "firstMassage">
                            <Button id = "Frame_60" text = "Поделиться" className="button-style2" url = ""/>
                            <Button id = "Frame_59" text = "Отклонить" className="button-style3" url = ""/>
                            <input id = "CheckBox"type="checkbox"></input>
                            <p id = "OurBachelorofComm">Запрос паспортных данных клиента</p>
                            <p id = "JulluJalal2">Начальник отдела продаж</p>
                            <p id = "JulluJalal1">Сидорова А. С.</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
  

export default PersonalArea