import { StyleBtn } from "../styleTheme/button.style";

const Button = ({ color, size, text }) => {
    return (
        <StyleBtn size={size} color={color}>
            {text}
        </StyleBtn>
    );
};
export default Button;
