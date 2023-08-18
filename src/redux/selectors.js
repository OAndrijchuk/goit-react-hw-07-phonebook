import { createSelector } from '@reduxjs/toolkit';

export const contactsSelector = createSelector(
  [state => state.contacts],
  contacts => contacts
);
export const filterSelector = createSelector(
  [state => state.filter.filter],
  filter => filter
);
