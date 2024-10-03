import React from "react";
import "../css/UserInfo.css";
import "../css/AdminPanel.css";
import Button from "./Button";
import profileImage from "../img/profile.png"; // Импортируем изображение профиля
import search from "../img/search.png";
import path from "../img/path.png";
import {SimpleModal} from "./modal/SimpleModal.js";

    class UserInfo extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                modalIsOpen: false
            };
        }
        handleInputChange = (event) => {
            // Обработка изменений в поле ввода
        }
        componentDidMount() {
            // Устанавливаем цвет фона страницы
            document.body.style.backgroundColor = '#FFFFFF'; // Легкий голубой цвет
    
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
                    <div id="menu1">
                        <div id = "firstMenu">
                            <span class="menu-title">Действия</span>
                            <div id = "button4124341">
                                <Button  text = "Редактировать данные" className="button-style-menu2" url = ""/> 
                            </div>
                            <div id = "button4124341231">
                                <Button  text = "Пользователь активен" className="button-style-menu3" url = ""/> 
                            </div>
                        </div>


                        <div id = "secondMenu">
                            <span class="menu-title"> ㅤИнформация о пользователе</span>
                            <div id = "q">
                                <div id = "q1"><span class="menu-title">Фото профиля</span></div>
                                <div id = "q2"></div>
                            </div>
                            <div id = "w">
                                <div id = "w1"><span class="menu-title">Фамилия</span></div>
                                <div id = "w2"></div>
                            </div>
                            <div id = "e">
                                <div id = "e1"><span class="menu-title">Имя</span></div>
                                <div id = "e2"></div>
                            </div>
                            <div id = "r">
                                <div id = "r1"><span class="menu-title">Отчество</span></div>
                                <div id = "r2"></div>
                            </div>
                            <div id = "t">
                                <div id = "t1"><span class="menu-title">Должность</span></div>
                                <div id = "t2"></div>
                            </div>
                            <div id = "y">
                                <div id = "y1"><span class="menu-title">Номер телефона</span></div>
                                <div id = "y2"></div>
                            </div>
                            <div id = "u">
                                <div id = "u1"><span class="menu-title">Почтовый адрес</span></div>
                                <div id = "u2"></div>
                            </div>
                        </div>


                        <div id = "thirdMenu">
                            <span class="menu-title">ㅤㅤПоследняя активность</span>
                            <div id = "a">
                                <div id = "a1"><span class="menu-title">Дата</span></div>
                                <div id = "a2"></div>
                            </div>
                            <div id = "s">
                                <div id = "s1"><span class="menu-title">Время</span></div>
                                <div id = "s2"></div>
                            </div>
                        </div>
                        
                    </div>
                    <div id = "RightSide1">
                        <div>
                            <span class="menu-title">ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</span>
                            <span class="menu-title">ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤОперации пользователя за последнюю неделю</span>
                        </div>
                        <div id="Polya">
                            <p class="field-title time">Время</p>
                            <p class="field-title date">Дата</p>
                            <p class="field-title team">Тип операции</p>
                            <p class="field-title participants">Участники помимо пользователя</p>
                        </div>


                    </div>
                </div>
            )
        }
    }
  

export default UserInfo