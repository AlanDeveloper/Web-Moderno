import './Nav.css';
import React from 'react';
import NavItem from './NavItem';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem url="" icon="home" item="Início"/>
            <NavItem url="users" icon="users" item="Usuários"/>
        </nav>
    </aside>