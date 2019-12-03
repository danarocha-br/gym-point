import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadOrdersRequest } from '~/store/reducers/helpOrders/actions';
import { showModal } from '~/store/reducers/modals/actions';

import { PageWrapper, ColLeft, ColRight, ButtonWrapper } from '~/styles/layout';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';
import Stats from '~/components/Stats';
import StatsContainer from '~/components/Stats/Container';
import Error from '~/components/Error';

export default function HelpOrders() {
  const orders = useSelector(state => state.orders.list);
  const isLoading = useSelector(state => state.orders.loading);
  const hasError = useSelector(state => state.orders.showError);
  const modal = useSelector(state => state.modals.modal);

  const filteredOrders = useMemo(
    () => orders && orders.filter(order => !order.answer),
    [orders]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrdersRequest());
  }, []); // eslint-disable-line

  const openOrdersTotal = orders && filteredOrders.length;
  const ordersTotal = orders && orders.length;

  const [columns] = useState([
    { path: 'student', label: 'Student' },
    { path: 'createdAt', label: 'Open Since' },
    {
      key: 'empty',
    },
    {
      key: 'answer',
      content: order => (
        <Button
          label="Answer"
          kind="icon"
          icon="edit"
          color="transparent"
          onClick={() => dispatch(showModal('ModalAnswerOrder', { order }))}
        />
      ),
    },
  ]);

  const pose = modal !== null ? 'withModal' : 'init';

  return (
    <PageWrapper pose={pose}>
      <ColLeft>
        <h3>Managing Student Questions</h3>

        <StatsContainer>
          <Stats
            label="Current Open Questions"
            data={openOrdersTotal <= 0 || null ? '0' : `${openOrdersTotal}`}
          />
          <Stats
            label="Total Questions Asked"
            data={ordersTotal <= 0 || null ? '0' : `${ordersTotal}`}
          />
        </StatsContainer>
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <ButtonWrapper>
            <h4 style={{ padding: '15px 5px' }}>Check your open questions:</h4>
          </ButtonWrapper>

          {hasError ? (
            <Error data="orders" status={hasError.response.status} />
          ) : (
            <Table
              isLoading={isLoading}
              columns={columns}
              data={filteredOrders}
              ariaLabel="orders"
            />
          )}
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
