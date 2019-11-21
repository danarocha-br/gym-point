import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadOrdersRequest } from '~/store/reducers/helpOrders/actions';
import { showModal } from '~/store/reducers/modals/actions';

import { PageWrapper, ColLeft, ColRight, ButtonWrapper } from '~/styles/layout';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';
import Stats from '~/components/Stats';
import Error from '~/components/Error';

export default function HelpOrders() {
  const orders = useSelector(state => state.orders.list);
  const isLoading = useSelector(state => state.orders.loading);
  const hasError = useSelector(state => state.orders.showError);
  const modal = useSelector(state => state.modals.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrdersRequest());
  }, []);

  const ordersTotal = useMemo(() => orders && orders.length, [orders]);

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
        <Stats
          label="Current Open Questions"
          data={ordersTotal <= 0 || null ? '0' : `${ordersTotal}`}
        />
        <Stats label="Total Questions Asked" data="10" />
        <Stats label="Avg Questions Asked per Student" data="10" />
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
              data={orders}
              ariaLabel="orders"
            />
          )}
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
