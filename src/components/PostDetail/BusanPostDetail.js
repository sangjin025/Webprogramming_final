import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../datas/BusanData";
import styled from "styled-components";

export default function BusanPostDetail() {
  const { id } = useParams();
  const post = data.find((item) => item.id === parseInt(id)); // id에 해당하는 데이터 찾기

  const renderText = (text) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  }; // 줄바꿈 처리하는 함수

  return (
    <LayOut>
      <StyledDiv>
        <div style={{ fontSize: "128px" }}>{post.name}</div>
        <FontSizeDiv>여행날짜: {post.visitDate}</FontSizeDiv>
        <FontSizeDiv>평점: {post.rating}</FontSizeDiv>
        <div>
          <StyledImg src={post.imgSrc} alt={post.name} />
        </div>
        <FontSizeDiv>{renderText(post.contents)}</FontSizeDiv>
      </StyledDiv>
    </LayOut>
  );
}

const LayOut = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledImg = styled.img`
  height: 800px;
  width: 1300px;
  border: 1px solid black;
  border-radius: 10px;
`;

const FontSizeDiv = styled.div`
  font-size: 28px;
  width: 1300px;
`;
