import React from 'react';
import { useSelector } from 'react-redux';

import { PageWrapper, ColLeft, ColRight } from '~/styles/layout';

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
        <p>Have a look at the summary and latest lorem ipsum lorem ipsum.</p>
      </ColLeft>

      <ColRight>
        <Card>
          <h3>
            <strong>Feed</strong>
          </h3>
        </Card>
      </ColRight>
    </PageWrapper>
  );
}
