import React from 'react';
import './App.css';
import ChooseRoles from './components/choose-roles/ChooseRoles';
import { RolesService } from './services/roles.service';

function App() {
    return (
        <div className="App dark-theme">
            <ChooseRoles roles={RolesService.roles} />
        </div>
    );
}

export default App;
