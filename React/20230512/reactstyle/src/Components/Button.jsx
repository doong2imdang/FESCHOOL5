// import React from 'react'
import styled from  "styled-components"

const ContentBtn1 = styled.button`
  background-color: royalblue;
  padding: 10px;
  color: #fff;
`;

const ContentBtn2 = styled.button`
  background-color: purple;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
`;

const ContentBtn3 = styled(ContentBtn2)`
  border: 1px solid hotpink;
  padding: 2px 7px;
  color: #fff;
`;

const ContentBtn4 = styled(ContentBtn2)`
  border-radius: 20px;
  background-color: hotpink;
  color: #fff;
`;

export { ContentBtn1, ContentBtn2, ContentBtn3, ContentBtn4 }
