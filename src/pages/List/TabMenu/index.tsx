import React from 'react';
import {NavLink} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import DisplayType from '../../../components/DisplayType';

interface Props {
  links: string[];
}

const TabMenu: React.FC<Props> = ({links}) => {
  const style = {
    color: 'rgb(128, 129, 138)',
    textDecoration: 'none',
    borderBottom: '0.1rem solid rgb(128, 129, 138)',
  };

  const activeStyle = {
    color: 'rgb(8, 115, 255)',
    borderBottom: '0.1rem solid rgb(8, 115, 255)',
  };

  return (
    <div className="tab-menu">
      <ul className="tab-links">
        {links.map(link => {
          return (
            <NavLink
              to={`/${link}`}
              key={link}
              style={style}
              activeStyle={activeStyle}
            >
              <li>
                <FormattedMessage defaultMessage={link} id={`list.${link}`}>
                  {message => <p> {message} </p>}
                </FormattedMessage>
              </li>
            </NavLink>
          );
        })}
      </ul>
      <DisplayType />
    </div>
  );
};

export default TabMenu;
