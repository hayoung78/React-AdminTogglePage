import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./button";

function Pagination({ total, limit, currentPage, curParams, setCurParams }) {
    const numPages = Math.ceil(total / limit);
    const [searchParams, setSearchParams] = useSearchParams();
    // + 일 때와, - 일 때
    const handlePageChange = (page) => {
        searchParams.set("currentPage", page);
        setSearchParams(searchParams);
    };
    return (
        <ButtonWrapper>
            <Button color="lemon" size="mini" text="&lt;&lt;" />
            <SButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </SButton>
            {Array(numPages)
                .fill()
                .map((_, i) => (
                    <SButton
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </SButton>
                ))}
            <SButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === numPages}
            >
                &gt;
            </SButton>
            <Button color="lemon" size="mini" text="&gt;&gt;" />
        </ButtonWrapper>
    );
}
const ButtonWrapper = styled.div`
    gap: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SButton = styled.button`
    border: none;
    border-radius: 8px;
    padding: 10px;
    margin: 0;
    background: pink;
    color: black;
    font-size: 1rem;

    &:hover {
        background: tomato;
        cursor: pointer;
    }
`;

export default Pagination;
