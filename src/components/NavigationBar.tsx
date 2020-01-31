import { Link } from 'gatsby';
import React from 'react';

const NavigationBar: React.FC<unknown> = () => {
  return (
    <header className='ailrun-blog-navigation-bar'>
      <h1>
        <Link to='/'>
          Valhala of Valkyrie
        </Link>
      </h1>
      <ul>
        <NavigationBarItem to='/' text='Main' />
        <NavigationBarItem to='/projects' text='Projects' />
        <NavigationBarItem to='/about' text='About' />
      </ul>
    </header>
  );
};
export default NavigationBar;

interface ItemProps {
  to: string;
  text: string;
}

const NavigationBarItem: React.FC<ItemProps> = ({ to, text }) => {
  return (
    <li>
      <Link to={to}>
        {text}
      </Link>
    </li>
  );
}
