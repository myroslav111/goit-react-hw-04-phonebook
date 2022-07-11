import React from 'react';
import { ButtonDelete, Item, Name, Number } from './ListContactItem.styled';
import PropTypes from 'prop-types';

const ListContactItem = ({ arrContacts, onDeleteContact }) => {
  return (
    <Item>
      <div>
        <Name>{arrContacts.name}: </Name>
        <Number>{arrContacts.number} </Number>
      </div>

      <ButtonDelete
        type="button"
        onClick={() => onDeleteContact(arrContacts.id)}
      >
        delete
      </ButtonDelete>
    </Item>
  );
};

ListContactItem.propTypes = {
  arrContacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default ListContactItem;
