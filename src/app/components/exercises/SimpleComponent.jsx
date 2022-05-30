import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    if (isAuth) {
            return (
                <button className="btn btn-secondary" onClick={onLogOut}>Выйти из системы</button>
        );
    };
    return (
        <button className="btn btn-primary" onClick={onLogin}>Войти</button>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
