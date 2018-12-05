import React from 'react'
import ListItem from './../ListItem/ListItem';

const List = ({ testApis }) => {
  return (
    <ul>
      {/* if response is array */}
      {
        testApis.map((apiName, index) =>
          <ListItem index={index} key={apiName} label={apiName} />)
      }
    </ul>
  )
}

export default List;
