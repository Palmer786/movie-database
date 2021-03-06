import React from 'react';
import {NavLink} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

const DesktopNavLinks: React.FC = () => {
  const links = [
    {header: 'Movies', endpoint: 'popular', id: 'movies'},
    {header: 'Discover', endpoint: 'discover', id: 'discover'},
  ];

  const activeStyle: React.CSSProperties = {
    border: '1px solid rgba(255,255,255,0.6)',
  };

  return (
    <div className="list">
      <ul>
        {links.map(link => {
          const {header, endpoint, id} = link;
          return (
            <NavLink to={`/${endpoint}`} key={id} activeStyle={activeStyle}>
              <li>
                <FormattedMessage defaultMessage={header} id={`navbar.${id}`}>
                  {message => message}
                </FormattedMessage>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopNavLinks;
