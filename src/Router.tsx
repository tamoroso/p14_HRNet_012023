import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateEmployee, EmployeeList, Error } from './pages';

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<CreateEmployee />} />
            <Route path='/employee-list' element={<EmployeeList />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
