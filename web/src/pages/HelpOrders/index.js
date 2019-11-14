import React, { useEffect, useState, useMemo } from 'react';
import { format, parseISO, differenceInDays } from 'date-fns';

import api from '~/services/api';
import history from '~/services/history';
import { formatPrice } from '~/util/format';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import { ButtonWrapper } from './styles';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';

export default function HelpOrders() {
  const [orders, setOrders] = useState([]);

  async function loadOrders() {
    const response = await api.get('help-orders');

    const data = response.data.map(order => {
      const parsedDate = parseISO(order.createdAt);
      const openFor = differenceInDays(new Date(), parsedDate);
      return {
        ...order,
        student: order.student.name,
        createdAt: `${openFor === 0 ? 'today' : `${openFor} ago`}`,
      };
    });

    setOrders(data);
  }

  useEffect(() => {
    loadOrders();
  }, []);

  const ordersTotal = useMemo(() => orders.length, [orders]);

  function handleAddPlan() {}

  const [columns] = useState([
    { path: 'student', label: 'Student' },
    { path: 'createdAt', label: 'Open Since' },
    {
      key: 'empty',
      content: order => '',
    },
    {
      key: 'answer',
      content: order => (
        <Button
          label="Answer"
          kind="icon"
          icon="edit"
          color="transparent"
          onClick={() => 'clicked'}
        />
      ),
    },
  ]);

  return (
    <PageWrapper>
      <ColLeft>
        <h3>Managing Student Questions</h3>
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <ButtonWrapper>
            <h4>
              Total of <strong>{ordersTotal}</strong> orders.
            </h4>
            <Button kind="icon" icon="plus" onClick={handleAddPlan} />
          </ButtonWrapper>

          <Table columns={columns} data={orders} ariaLabel="orders" />
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
