import React from 'react'
import { combineReducers } from 'redux'
import CompanyReducer from './CompanyReducer'
import EmployeeReducer from './EmployeeReducer'

const rootReducers = combineReducers({
    company: CompanyReducer,
    employee: EmployeeReducer
  });

export default rootReducers