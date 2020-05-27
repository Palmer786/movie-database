import React, {useContext} from 'react';
import gridActive from '../../images/grid_active.png';
import grid from '../../images/grid.png';
import flexActive from '../../images/flex_active.png';
import flex from '../../images/flex.png';
import {DisplayContext} from '../../contexts/DisplayContext';

const DisplayType = () => {
  const [displayType, setDisplayType] = useContext(DisplayContext);
  return (
    <div className="display-type">
      <img
        className={displayType === 'grid' ? null : 'inactive'}
        src={displayType === 'grid' ? gridActive : grid}
        alt="grid"
        onClick={() => setDisplayType('grid')}
      />
      <img
        className={displayType === 'flex' ? null : 'inactive'}
        src={displayType === 'flex' ? flexActive : flex}
        alt="flex"
        onClick={() => setDisplayType('flex')}
      />
    </div>
  );
};

export default DisplayType;
