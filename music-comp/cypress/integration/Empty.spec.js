import React from 'react';
import { mount } from '@cypress/react';
import Empty from '../../src/components/empty';

it('renders Info Bar', () => {
  mount(<Empty />);
  cy.get('div').should('have.class', 'MuiAlert-message').contains('Search a song or artist! ')

});


it('does not render Info Bar', () => {
  cy.get('div').should('be.empty')

});