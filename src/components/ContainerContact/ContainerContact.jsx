import React from 'react';
import { ListWraper, BoxList } from './ContainerContact.styled';
import ListContactItem from './ListContactItem';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../animation/ContactItemAnimation.css';

const ContainerContact = ({ arrContacts, onDeleteContact }) => {
  return (
    <BoxList>
      {/* <ListWraper> */}
      <TransitionGroup component={ListWraper}>
        {arrContacts.map(contact => (
          <CSSTransition key={contact.id} timeout={250} classNames="fade">
            <ListContactItem
              key={contact.id}
              arrContacts={contact}
              onDeleteContact={onDeleteContact}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      {/* </ListWraper> */}
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
