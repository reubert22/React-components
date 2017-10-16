import React from 'react'
import reactDOM from 'react-dom'
import ClassComponent from './classComponent'

reactDOM.render(
    <ClassComponent label='Counter' initialValue={0} />
, document.getElementById('app'))