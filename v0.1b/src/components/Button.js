import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { url, text, className } = this.props;

        return (
            <div>
                <button  className = { className} onClick={() => window.location.assign(url)}>{text}</button>
            </div>
        );
    }
}

Button.defaultProps = {
    text: "Войти"
};

export default Button;
