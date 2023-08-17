import { contactsSelector, filterSelector } from 'redux/selectors';
import { Contact } from './Contact/Contact';

import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const { contacts } = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);

  const filteredCotacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {contacts.length === 0 ? (
        <li>
          <h3>Sorry, but the list is empty!</h3>
        </li>
      ) : filter ? (
        filteredCotacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))
      ) : (
        contacts.map(contact => <Contact contact={contact} key={contact.id} />)
      )}
    </List>
  );
};
