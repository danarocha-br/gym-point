import React from 'react';

import { TitleRow, Title, Time, Content, ContentContainer } from './styles';

export default function ModalDetails({ data }) {
  console.tron.log(data);

  return (
    <>
      <ContentContainer>
        <TitleRow>
          <Title>Question</Title>
          <Time>Question</Time>
        </TitleRow>
        <Content>test</Content>
      </ContentContainer>

      <ContentContainer>
        <TitleRow>
          <Title>Answer</Title>
          <Time>Question</Time>
        </TitleRow>
        <Content>test</Content>
      </ContentContainer>
    </>
  );
}
