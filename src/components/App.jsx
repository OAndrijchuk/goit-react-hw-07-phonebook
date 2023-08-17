import React, { useEffect } from 'react';
import { Section } from './Section/Section';
import { SimpleForm } from './Form/SimpleForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container, GeneralTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/asyncThuncs';
import { contactsSelector } from 'redux/selectors';
import { ThreeDots } from 'react-loader-spinner';

export const App = () => {
  const { isLoading } = useSelector(contactsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <Container>
      <GeneralTitle>Phonebook</GeneralTitle>
      <Section>
        <SimpleForm />
      </Section>
      <Section title="Find contacts by name">
        <Filter />
      </Section>
      {isLoading ? (
        <ThreeDots
          height="100"
          width="100"
          radius="9"
          color="gray"
          wrapperStyle={{ justifyContent: 'center' }}
          visible={true}
        />
      ) : (
        <Section title="Contacts">
          <ContactsList />
        </Section>
      )}
    </Container>
  );
};
