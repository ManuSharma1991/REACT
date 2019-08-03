// @ts-nocheck
import './App.css';
import React from 'react';
import Loginform from './loginform';
import Submit from './submit';
import Header from './header';


function App() {

  return (
    <div>
      <table border="1">
        <thead>
          <th colSpan='2'>
            <Header value="Usage Management System" />
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <Loginform />
            </td>
            <td>
              <Loginform name="Anshulika"/>
            </td>
            </tr><tr>
            <td>
              <Loginform />
            </td>
            <td>
              <Loginform name="Rathore"/>
            </td>
          </tr>
          <tr>
          <td><Submit/></td>
          <td><Submit/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default App;
