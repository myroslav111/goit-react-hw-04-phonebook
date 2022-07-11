import React from 'react';
import { ListWraper, BoxList } from './ContainerContact.styled';
import ListContactItem from './ListContactItem';
import PropTypes from 'prop-types';

const ContainerContact = ({ arrContacts, onDeleteContact }) => {
  return (
    <BoxList>
      <ListWraper>
        {arrContacts.map(contact => (
          <ListContactItem
            key={contact.id}
            arrContacts={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ListWraper>
    </BoxList>
  );
};

ContainerContact.propTypes = {
  arrContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default ContainerContact;
