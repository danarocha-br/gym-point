import React from 'react';
import { useSelector } from 'react-redux';
import {
  FaUserGraduate,
  FaCheckCircle,
  FaQuestionCircle,
} from 'react-icons/fa';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import { SummaryCard, VerticalContainer, Container } from './styles';

import Card from '~/components/Card';

export default function Dashboard() {
  const profile = useSelector(state => state.user.profile);

  return (
    <PageWrapper>
      <ColLeft>
        <h3>
          Hello {profile.name}, <br />
          check what is new.
        </h3>
        <p>
          Have a look at the Gym Summary <br />
          and check what is new.
        </p>
      </ColLeft>

      <ColRight>
        <Card>
          <h3 style={{ marginBottom: '30px' }}>
            <strong>Feed</strong>
          </h3>
          <Container>
            <VerticalContainer small>
              <SummaryCard student>
                <p>30 students</p>

                <FaUserGraduate size="25px" />
              </SummaryCard>

              <SummaryCard enrollment>
                <p>20 active students</p>
                <FaCheckCircle size="25px" />
              </SummaryCard>

              <SummaryCard orders>
                <p>20 open help orders</p>
                <FaQuestionCircle size="25px" />
              </SummaryCard>
            </VerticalContainer>

            <VerticalContainer>
              <SummaryCard student>30 students</SummaryCard>
            </VerticalContainer>
            <VerticalContainer small>test</VerticalContainer>
          </Container>
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
