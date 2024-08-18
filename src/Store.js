import React from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import { useState } from "react";


function Store() {
    // локальное состояние переключателя view будет принимать два положение cardView и listView, установим первое значение cardView
    const [view, setView] = useState('cardView');

    // Функция, которая запускается компанентом IconSwitch, она меняет локальное состояние view, после чего происходит перерисовывание компаненты Store
    // и в зависимости от того что находится в view, отображает либо компанент CardsView либо компанент ListView
    const switcher = () => {
        setView(view === 'cardView' ? 'listView' : 'cardView');
    }

    return (
        <div>
            <IconSwitch
                // Отправляем в компанент IconSwitch значение локального состояния view, чтобы значть какую иконку отобразить
                icon={view}

                //  onSwitch={() => console.log("change state here")}
                //Отправим в компанент IconSwitch функцию switcher, чтобы запустить её через колбек при клике по иконке
                onSwitch={switcher}
            />

            {/* в зависимости от того что находится в локальном состоянии view отображает либо компанент CardsView либо компанент ListView */}
            {view === "listView" ? <CardsView cards={products} /> : <ListView cards={products} />}
        </div>
    )
}

export default Store;

const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];