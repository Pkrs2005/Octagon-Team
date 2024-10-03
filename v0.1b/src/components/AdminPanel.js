import React from "react";
import "../css/AdminPanel.css";
import Button from "./Button";
import profileImage from "../img/profile.png"; // Импортируем изображение профиля
import search from "../img/search.png";
import path from "../img/path.png";
import {SimpleModal} from "./modal/SimpleModal.js";

    class AdminPanel extends React.Component {
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
                            <Button  text = "Админ панель" className="button-style-menu" url = ""/> 
                        </div>
                        
                        <div id = "Frame_75">
                            {/* добавить ссылки к кнопкам*/}
                            <Button id = "button1" text = "Документы" className="button-menu" url = ""/> 
                            <Button id = "button1" text = "Все запросы" className="button-menu" url = ""/>
                            <Button id = "button1" text = "Принятые запросы" className="button-menu" url = ""/>
                            <Button id = "button1" text = "Отклонённые запросы" className="button-menu" url = ""/>
                            <Button id = "button1" text = "Добавить нового пользователя" className="button-menu" url = ""/> 
                            <Button id = "button1" text = "База пользователй" className="button-menu" url = ""/>
                            <Button id = "button1" text = "База документов" className="button-menu" url = ""/>
                            <Button id = "button1" text = "История операций" className="button-menu" url = ""/>

                        </div>
                        <div id = "CreateRequest">
                            <Button  text = "Создать запрос"  className="button-style1"  url = ""/>
                        </div>
                        
                    </div>
                    <div id = "RightSide">
                        <div id = "text_adminpanel">
                            <p>Добавление пользователя</p>
                        </div>
                        <div id="PlaceProfilePhoto1">
                                <div id="ProfilePhoto"  style={{ backgroundImage: `url(${profileImage})` }}></div>
                        </div>
                        <div id="PlaceForForm">
                            <div id="Place1">
                                <label htmlFor="username">Имя пользователя</label>
                                <input type="text" id="username" placeholder="Введите имя пользователя" />
                            </div>
                            <div id="Place2">
                                <label htmlFor="position">Должность</label>
                                <input type="text" id="position" placeholder="Введите должность" />
                            </div>
                            <div id="Place3">
                                <label htmlFor="lastname">Фамилия пользователя</label>
                                <input type="text" id="lastname" placeholder="Введите фамилию" />
                            </div>
                            <div id="Place4">
                                <label htmlFor="email">Почтовый адрес</label>
                                <input type="email" id="email" placeholder="Введите почтовый адрес" />
                            </div>
                            <div id="Place5">
                                <label htmlFor="middleName">Отчество пользователя</label>
                                <input type="text" id="middleName" placeholder="Введите отчество" />
                            </div>
                            <div id="Place6">
                                <label htmlFor="phone">Номер телефона</label>
                                <input type="tel" id="phone" placeholder="Введите номер телефона" />
                            </div>
                            <div id="Place7">
                                <label htmlFor="login">Логин</label>
                                <input type="text" id="login" placeholder="Введите логин" />
                            </div>
                            <div id="Place8">
                                <label htmlFor="password">Пароль</label>
                                <input type="password" id="password" placeholder="Введите пароль" />
                            </div>
                            <div id = "button87987979123">
                                <Button  text = "Добавить пользователя" className="button-style-menu1" url = ""/> 
                            </div>
                        </div>


                    </div>
                </div>
            )
        }
    }
  

export default AdminPanel