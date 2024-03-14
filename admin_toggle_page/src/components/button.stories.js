import Button from "./common/button";
//title: 컴포넌트이름
//component: 컴포넌트
//argTypes: 컴포넌트에 필요한 전달인자의 종류와 타입 , title이라는 전달인자에 text타입
export default {
    title: "Button",
    component: Button,
    argTypes: {
        text: { control: "text" },
    },
};
//템플릿 생성. 템플릿을 사용하여 스토리북에 넣어줄 스토리
const Template = (args) => <Button {...args} />;
export const PurpleBtn = Template.bind({});
PurpleBtn.args = {
    size: "medium",
    color: "mainPurple",
    text: "나빼고 다 바보",
};
