import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

function Pagination({ total, limit, currentPage, curParams, setCurParams }) {
    const numPages = Math.ceil(total / limit);
    const [searchParams, setSearchParams] = useSearchParams();
    // + 일 때와, - 일 때
    const handlePageChange = (page) => {
        searchParams.set("currentPage", page);
        setSearchParams(searchParams);
    };
    return (
        <>
            <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </Button>
            {Array(numPages)
                .fill()
                .map((_, i) => (
                    <Button key={i + 1} onClick={() => handlePageChange(i + 1)}>
                        {i + 1}
                    </Button>
                ))}
            <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === numPages}
            >
                &gt;
            </Button>
        </>
    );
}

const Button = styled.button`
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
