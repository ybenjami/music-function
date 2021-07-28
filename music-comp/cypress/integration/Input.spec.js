import React from 'react';
import { mount } from '@cypress/react';
import Input from '../../src/components/input';

it('renders Info Bar', () => {
  let data = '';
  const handleCallback = (childData) => {
    data = childData;
  };

  mount(<Input parentCallback={handleCallback} />);
  cy.get('input').type('Grateful Dead');
  cy.get('input').invoke('val').should('not.be.empty');
  cy.get('button')
    .click()
    .then(() => {
      expect(data).to.be.an('array');
    });
});
