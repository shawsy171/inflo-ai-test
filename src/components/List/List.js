import React from 'react'

// components
import ListItem from './../ListItem/ListItem';

const List = ({ testApis }) => {
  return (
    <ul>
      {
        testApis.map((apiName, index) =>
          <ListItem index={index} key={apiName} label={apiName} />)
      }
    </ul>
  )
}

export default List;
