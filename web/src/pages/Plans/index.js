import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadPlansRequest,
  deletePlanRequest,
} from '~/store/reducers/plans/actions';
import { showModal } from '~/store/reducers/modals/actions';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import { ButtonWrapper } from './styles';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';
import Error from '~/components/Error';
import Stats from '~/components/Stats';

export default function Plans() {
  const plans = useSelector(state => state.plans.list);
  const isLoading = useSelector(state => state.plans.loading);
  const hasError = useSelector(state => state.plans.showError);
  const modal = useSelector(state => state.modals.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlansRequest());
  }, []);

  const plansTotal = useMemo(() => plans && plans.length, [plans]);

  // AVG Plans Price

  function getPlansAvgPrice() {
    const getPlansPrice =
      plans &&
      plans.map(plan => {
        return parseInt(plan.price.split('$', 2)[1], 0);
      });

    const getPlansPriceResult =
      plans && getPlansPrice.reduce((avg, total) => avg + total, 0);

    return parseInt(getPlansPriceResult / plansTotal, 0);
  }

  const [columns] = useState([
    { path: 'title', label: 'Plan' },
    { path: 'duration', suffix: '/month', label: 'Duration' },
    { path: 'price', label: 'Price per Month' },
    {
      key: 'actions',
      content: plan => (
        <>
          <Button
            kind="icon"
            icon="trash"
            color="transparent"
            onClick={() => dispatch(deletePlanRequest(plan.id))}
          />
          <Button
            kind="icon"
            icon="edit"
            color="transparent"
            onClick={() => dispatch(showModal('ModalUpdatePlan', { plan }))}
          />
        </>
      ),
    },
  ]);

  const pose = modal !== null ? 'withModal' : 'init';

  return (
    <PageWrapper pose={pose}>
      <ColLeft>
        <h3>Managing Gym Plans</h3>
        <p style={{ marginBottom: '30px' }}>
          Check out some data from current plans.
        </p>
        <Stats
          label="Current Plans"
          data={plansTotal <= 0 || null ? '0' : `${plansTotal}`}
        />
        <Stats
          label="Age Average Plans Price"
          data={plans ? getPlansAvgPrice() : '0'}
        />
        <Stats label="Most Popular Plan" data="Start" />
        <Stats label="Least Popular Plan" data="Gold" />
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <ButtonWrapper>
            <h4>Your current plans</h4>
            <Button
              kind="icon"
              icon="plus"
              onClick={() => dispatch(showModal('ModalAddPlan'))}
            />
          </ButtonWrapper>
          {hasError ? (
            <Error data="gym plans" status={hasError.response.status} />
          ) : (
            <Table
              isLoading={isLoading}
              columns={columns}
              data={plans}
              ariaLabel="plans"
            />
          )}
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
