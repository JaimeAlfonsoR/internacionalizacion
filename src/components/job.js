import React from "react";
import {FormattedDate, FormattedNumber, FormattedMessage} from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td><FormattedMessage
          id="Million"
          defaultMessage={`{salario} Millones`}
          values={{ salario: props.offer.salary }}
        />
      </td>
      <td>{props.offer.city}</td>
      <FormattedDate
        value={new Date(props.offer.date)}
        year='numeric'
        month='long'
        day='numeric'
        weekday='long'
      />
      <td><FormattedNumber 
            value={new Number(props.offer.views)}
            useGrouping={true}
            ></FormattedNumber></td>
      <td>
      </td>
    </tr>
  );
};

export default Job;
