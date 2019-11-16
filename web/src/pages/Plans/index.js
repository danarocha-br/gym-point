import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadPlansRequest,
  deletePlanRequest,
  updatePlanRequest,
} from '~/store/reducers/plans/actions';
import { showModal } from '~/store/reducers/modals/actions';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';
import { ButtonWrapper } from './styles';

import Card from '~/components/Card';
import Button from '~/components/Button';
import Table from '~/components/Table';
import Error from '~/components/Error';

export default function Plans() {
  const plans = useSelector(state => state.plans.list);
  const isLoading = useSelector(state => state.plans.loading);
  const hasError = useSelector(state => state.plans.showError);
  const modal = useSelector(state => state.modals.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlansRequest());
  }, []); // eslint-disable-line

  const plansTotal = useMemo(() => plans && plans.length, [plans]);

  // async function handleDelete(plan) {
  //   if (
  //     window.confirm(
  //       `'Are you sure you want to delete the ${plan.title} plan?`
  //     ) === true
  //   ) {
  //     await api.delete(`plans/${plan.id}`);

  //     setPlans(plans.filter(p => p.id !== plan.id));
  //     loadPlans();
  //   }
  // }

  const [columns] = useState([
    { path: 'title', label: 'Plan' },
    { path: 'duration', label: 'Duration' },
    { path: 'price', label: 'Price per Month' },
    {
      key: 'delete',
      content: plan => (
        <Button
          kind="icon"
          icon="trash"
          color="transparent"
          onClick={() => dispatch(deletePlanRequest(plan.id))}
        />
      ),
    },
    {
      key: 'edit',
      content: plan => (
        <Button
          kind="icon"
          icon="edit"
          color="transparent"
          onClick={() => dispatch(showModal('ModalUpdatePlan', { plan }))}
        />
      ),
    },
  ]);

  const pose = modal !== null ? 'withModal' : 'init';

  return (
    <PageWrapper pose={pose}>
      <ColLeft>
        <h3>Managing Gym Plans</h3>
      </ColLeft>

      <ColRight>
        <Card fullHeight>
          <ButtonWrapper>
            <h4>
              <h4>
                {plansTotal <= 0 || null
                  ? 'No plans found.'
                  : `Total of ${plansTotal} plans.`}
              </h4>
            </h4>
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
