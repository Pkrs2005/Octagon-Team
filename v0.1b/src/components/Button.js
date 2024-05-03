import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { url, text } = this.props;

        return (
            <div>
                <button onClick={() => window.location.assign(url)}>{text}</button>
            </div>
        );
    }
}

Button.defaultProps = {
    text: "Войти"
};

export default Button;
