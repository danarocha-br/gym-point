import React, { useEffect, useState, useMemo } from 'react';

import api from '~/services/api';
import history from '~/services/history';
import { formatPrice } from '~/util/format';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import { ButtonWrapper } from './styles';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  async function loadPlans() {
    const response = await api.get('plans');

    const data = response.data.map(plan => ({
      ...plan,
      duration: `${plan.duration}/month`,
      price: formatPrice(plan.price),
    }));

    setPlans(data);
  }

  useEffect(() => {
    loadPlans();
  }, []);

  const plansTotal = useMemo(() => plans.length, [plans]);

  function handleAddPlan() {}

  async function handleDelete(plan) {
    if (
      window.confirm(
        `'Are you sure you want to delete the ${plan.title} plan?`
      ) === true
    ) {
      await api.delete(`plans/${plan.id}`);

      setPlans(plans.filter(p => p.id !== plan.id));
      loadPlans();
    }
  }

  function handleEdit(plan) {}

  const [columns] = useState([
    { path: 'title', label: 'Plan' },
    { path: 'duration', label: 'Duration' },
    { path: 'price', label: 'Price per Month' },
    {
      key: 'edit',
      content: plan => (
        <Button
          kind="icon"
          icon="trash"
          color="transparent"
          onClick={() => handleDelete(plan)}
        />
      ),
    },
    {
      key: 'delete',
      content: plan => (
        <Button
          kind="icon"
          icon="edit"
          color="transparent"
          onClick={() => history.push(`/plans/${plan.id}`)}
        />
      ),
    },
  ]);

  return (
    <PageWrapper>
      <ColLeft>
        <h3>Managing Gym Plans</h3>
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <ButtonWrapper>
            <h4>
              Total of <strong>{plansTotal}</strong> plans
            </h4>
            <Button kind="icon" icon="plus" onClick={handleAddPlan} />
          </ButtonWrapper>

          <Table columns={columns} data={plans} ariaLabel="plans" />
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
