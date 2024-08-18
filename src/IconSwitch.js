import React from "react";

function IconSwitch({ icon, onSwitch }) {
    
    return (
        <div>
            {/* В зависимости от того, какое значение иконки стоит в локальном состоянии icon тернарным опператором устанвливаем соответствующий код из иконок гугл */}
            {icon === "listView" ? (
                // при клике по любой из этих двух иконок через колбек запускаем функциюю onSwitch в компаненте Store, которая сменить локальное состояние view* в компаненте Store
                <span className="material-icons" onClick={onSwitch}>view_list</span>
            ) : (
                <span className="material-icons" onClick={onSwitch}>view_module</span>
            )}
        </div>
    )
}

export default IconSwitch;