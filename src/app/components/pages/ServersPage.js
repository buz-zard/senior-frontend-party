import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import i18n from '~/i18n';
import auth from '~/auth';

import {Page, Badge, Button, FAIcon, Servers} from '../';


const ServersPage = ({logout}) => (
  <Page>
    <Page.Header>
      <Badge small />
      <Button styleType='link' className='pull-right' onClick={logout}>
        <FAIcon type='sign-out' className='fa-rotate-180' />&nbsp;&nbsp;{i18n.t('button.logout')}
      </Button>
    </Page.Header>
    <Page.Body>
      <Servers />
    </Page.Body>
  </Page>
);

ServersPage.propTypes = {
  logout: PropTypes.func.isRequired,
};


const enhance = connect(
  null,
  dispatch => ({
    logout() {
      return dispatch(auth.actions.logout());
    },
  }),
);

export default enhance(ServersPage);
