import { useEffect, useState } from "react";
import Pagenation from "../components/common/pagenation";
import createUsers from "../utils/user";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

const UserPage = () => {
    const [userData, setUserData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const limit = Number(searchParams.get("limit")) || 20; //페이지당 보여줄 데이터 수/ URL에 limit 값이 없으면 기본값 20으로 설정
    const currentPage = Number(searchParams.get("currentPage")) || 1; // 현재 페이지 / URL에 currentPage값 없으면 기본값 1
    const startIndex = (currentPage - 1) * limit; //페이지 시작 인덱스
    const location = useLocation();

    //현재 url의 쿼리 파라미터를 URLSearchParams 객체로 변환
    const urlParams = new URLSearchParams(location.search);

    //첫 마운트시 초기 페이지 설정
    useEffect(() => {
        setUserData(createUsers()); //유저데이터 함수 호출 후 userData로 관리
        searchParams.set("currentPage", 1); //currentPage key값을 1로 설정
        setSearchParams(searchParams);
    }, []);

    //URL의 limit 값이 변경될때 실행
    useEffect(() => {
        //URL의 limit 값과 현재 limit 값이 다를 경우
        if (limit !== Number(searchParams.get("limit"))) {
            // URL의 limit 값으로 변경
            searchParams.set("limit", limit);
            setSearchParams(searchParams, { replace: true });
        }
        //
        const sortChange = (type) => {
            setUserData(
                [...userData].sort((a, b) => {
                    const strA = String(a[type]);
                    const strB = String(b[type]);
                    return strA.localeCompare(strB); //a,b 문자열 정렬
                })
            );
        };

        const newSort = urlParams.get("sort");
        if (newSort && userData.length > 0) {
            sortChange(newSort);
        }
    }, [searchParams]);

    // 페이지당 보여줄 데이터 수를 변경할때마다 실행되는 함수
    const handleLimitChange = (e) => {
        const newLimit = Number(e.target.value); //새로운 limit 값
        searchParams.set("limit", newLimit); //새로운 URL limit 값을 newLimit으로 변경
        setSearchParams(searchParams);
    };

    //오름차순/내림차순 정렬하는 함수
    const handleSortChange = (e) => {
        const newSort = e.target.value;
        searchParams.set("sort", newSort);
        setSearchParams(searchParams, { replace: true });
    };
    return (
        <MainWrapper>
            <select value={limit} onChange={handleLimitChange}>
                <option value="20">20개씩 보기</option>
                <option value="50">50개씩 보기</option>
            </select>
            {/* <select>
                <option value="desc">내림차순</option>
                <option value="asc">오름차순</option>
            </select> */}
            <select value={urlParams?.get("sort")} onChange={handleSortChange}>
                <option value={"name"}>이름순</option>
                <option value={"birth"}>생일순</option>
            </select>

            {userData.slice(startIndex, startIndex + limit).map((user) => (
                <UserContainer key={user.id}>
                    <UserInfo>{user.id}</UserInfo>
                    <UserInfo>{user.name}</UserInfo>
                    <UserInfo>{user.birth}</UserInfo>
                    <UserInfo>
                        {user.phone.replace(/(?<=010-).*(?=-)/, "****")}
                    </UserInfo>
                    <UserInfo>{user.lastLoginDate}</UserInfo>
                </UserContainer>
            ))}

            <Pagenation
                curParams={searchParams}
                setCurParams={setSearchParams}
                total={userData.length}
                limit={limit}
                currentPage={currentPage}
            />
        </MainWrapper>
    );
};
export default UserPage;

const MainWrapper = styled.div`
    width: 100%;
    height: fit-content;
`;
const UserContainer = styled.div`
    border-radius: 10px;
    margin: 10px;
    width: 300px;
    height: 150px;
    text-align: center;
    border: 2px solid #d7d7d7;
    display: flex;
    flex-direction: column;
`;
const UserInfo = styled.p`
    font-size: 15px;
    line-height: 0px;
`;
