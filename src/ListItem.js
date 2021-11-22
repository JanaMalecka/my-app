import React from 'react';

const ListItem = ({ isThisFemale, firstName, lastName, house, initials }) => {
  return (
    <li className={isThisFemale ? 'item girls' : 'item'}>
      <div className="name">
        <div className="initials">{initials}</div>
        <div>
          {firstName} {lastName}
        </div>
      </div>
      <div>{house}</div>
    </li>
  );
};

export default ListItem;
