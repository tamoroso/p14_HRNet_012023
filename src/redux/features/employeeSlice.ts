import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../../types/Employee';
import mockedEmployeeData from '../../mock/employeeData';

interface IEmployeeState {
   employees: Employee[];
}

const initialState: IEmployeeState = {
   employees: mockedEmployeeData,
};

export const employeeSlice = createSlice({
   initialState,
   name: 'employeeSlice',
   reducers: {
      addEmployee: (state, action: PayloadAction<Employee>) => {
         state.employees.push(action.payload);
      },
      removeEmployee: (state, action: PayloadAction<number>) => ({
         ...state,
         employees: [
            ...state.employees.slice(0, action.payload),
            ...state.employees.slice(action.payload + 1),
         ],
      }),
   },
});

export default employeeSlice.reducer;

export const { addEmployee, removeEmployee } = employeeSlice.actions;
