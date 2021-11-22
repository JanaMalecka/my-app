import './App.css';

import Students from './Students';

const App = () => {
  /* const students = dataArray.map((student) => {
    const isThisFemale = student.gender === 'F';
    console.log(isThisFemale);

    const initials = `${student.firstName.charAt(0)}${student.lastName.charAt(
      0,
    )}`;

    console.log(initials);
    return (
      <li className={isThisFemale ? 'item girls' : 'item'}>
        <div className="name">
          <div className="initials">{initials}</div>
          <div>
            {student.firstName} {student.lastName}
          </div>
        </div>
        <div>{student.house}</div>
      </li>
    );
  }); */

  /*  const girls = dataArray
    .filter((girls) => girls.gender === 'F')
    .map((girl) => <div>{girl.firstName}</div>); */

  /*  const filteredGirls = dataArray.filter((girls) => girls.gender === 'F');

  const mappedGirls = filteredGirls.map((girl) => <div>{girl.firstName}</div>);

  const isThereFemale = dataArray.some((girls) => girls.gender === 'F');
  console.log(isThereFemale, 'isThereFemale');

  const findFirstFemale = dataArray.find((female) => female.gender === 'F'); */

  return (
    <div className="App">
      <Students />
    </div>
  );
};

export default App;
