import styled from "styled-components";
import UserPage from "./userpage";

const MainPage = () => {
    return (
        <MainWrapper>
            <UserPage />
        </MainWrapper>
    );
};
export default MainPage;

const MainWrapper = styled.div`
    width: 100%;
    height: fit-content;
`;
