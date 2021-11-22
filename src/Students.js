import React from 'react';
import { dataArray } from './Data';
import ListItem from './ListItem';

const Students = () =>
  dataArray.map((student) => {
    const isThisFemale = student.gender === 'F';
    console.log(isThisFemale);

    return (
      <ListItem
        initials={`${student.firstName.charAt(0)}${student.lastName.charAt(0)}`}
        firstName={student.firstName}
        lastName={student.lastName}
        house={student.house}
      />
    );
  });

export default Students;
