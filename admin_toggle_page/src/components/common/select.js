import { StyleSelect } from "../styleTheme/selectBox.style";

const Select = ({ color, option, value, onChange }) => {
    return (
        <StyleSelect color={color} value={value} onChange={onChange}>
            {option?.map((option) => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </StyleSelect>
    );
};
export default Select;
