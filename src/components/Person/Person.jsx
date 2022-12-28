import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const checkSex = () => {
    if (sex === 'm') {
      return 'wife';
    }

    return 'husband';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${checkSex()}`
          : 'I am not married'
      }
      </p>
    </section>
  );
};
