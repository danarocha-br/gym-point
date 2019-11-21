import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaUserGraduate, FaCheckCircle } from 'react-icons/fa';
import { MdGroup } from 'react-icons/md';

import { loadStudentsRequest } from '~/store/reducers/students/actions';
import { loadPlansRequest } from '~/store/reducers/plans/actions';
import { loadEnrollmentsRequest } from '~/store/reducers/enrollments/actions';
import { loadOrdersRequest } from '~/store/reducers/helpOrders/actions';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import {
  SummaryCard,
  SummaryWrapper,
  Container,
  SecondaryContainer,
  Overview,
  IconFrame,
} from './styles';

import Card from '~/components/Card';
import Gym from '~/assets/gym.svg';

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStudentsRequest());
    dispatch(loadPlansRequest());
    dispatch(loadEnrollmentsRequest());
    dispatch(loadOrdersRequest());
  }, []); // eslint-disable-line

  const profile = useSelector(state => state.user.profile);

  const students = useSelector(state => state.students.list);
  const enrollments = useSelector(state => state.enrollments.list);
  const plans = useSelector(state => state.plans.list);
  const studentsTotal = useMemo(() => students && students.length, [students]);

  // AVG Active Registered Students

  const getStudentTotal = students && students.length;
  const getEnrollmentsTotal = enrollments && enrollments.length;

  const activeMembersAvg = getEnrollmentsTotal / getStudentTotal;

  // AVG Plans
  const getPlansTotal = plans && plans.length;

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
        <Card fullHeight>
          <h3 style={{ marginBottom: '30px' }}>
            <strong>Feed</strong>
          </h3>
          <Container>
            <SummaryWrapper>
              <SummaryCard student>
                <IconFrame>
                  <FaUserGraduate size="25px" />
                </IconFrame>

                <p>{students && `${studentsTotal} Students`}</p>
              </SummaryCard>

              <SummaryCard enrollment>
                <IconFrame>
                  <FaCheckCircle size="25px" />
                </IconFrame>

                <p>{`${getEnrollmentsTotal} Active Members`}</p>
              </SummaryCard>

              <SummaryCard orders>
                <IconFrame>
                  <MdGroup size="25px" />
                </IconFrame>

                <p>{`${activeMembersAvg} Avg Active`}</p>
              </SummaryCard>
            </SummaryWrapper>

            <Overview>
              <strong>Gym Plans</strong>
              <ul>
                <li>
                  Total Plans <strong>{getPlansTotal}</strong>
                </li>
                <li>
                  Most Popular Plan <strong>10</strong>
                </li>
                <li>
                  Least Popular Plan <strong>10</strong>
                </li>
              </ul>
              <img src={Gym} alt="gym" />
            </Overview>

            <Overview bordered>
              <strong style={{ color: 'var(--color-blue)' }}>
                Help Orders
              </strong>
            </Overview>
          </Container>
          <SecondaryContainer>
            <p>some content goes here ... </p>
          </SecondaryContainer>
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
