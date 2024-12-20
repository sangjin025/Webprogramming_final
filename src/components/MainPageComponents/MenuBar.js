import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <MenuWrapper>
      <ul>
        <CategoryFont>카테고리</CategoryFont>
        <KoreaLi>
          한국
          <RegionUl>
            <li>
              <Link to="/seoul">서울</Link>
            </li>
            <li>
              <Link to="/daejeon">대전</Link>
            </li>
            <li>
              <Link to="/daegu">대구</Link>
            </li>
            <li>
              <Link to="/busan">부산</Link>
            </li>
            <li>
              <Link to="/jeonju">전주</Link>
            </li>
            <li>
              <Link to="/suncheon">순천</Link>
            </li>
            <li>
              <Link to="/gangsok">강릉/속초</Link>
            </li>
            <li>
              <Link to="/jeju">제주도</Link>
            </li>
          </RegionUl>
        </KoreaLi>
      </ul>
    </MenuWrapper>
  );
}

const MenuWrapper = styled.div`
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  a {
    text-decoration: none;
    border: 0px;

    &:hover {
      color: blue;
    }
    &:active {
      color: blue;
    }
  }
`;
const CategoryFont = styled.div`
  font-size: 64px;
  color: #a3aaea;
`;
const KoreaLi = styled.li`
  font-size: 40px;
`;
const RegionUl = styled.ul`
  font-size: 32px;
`;
