import React, {useContext} from 'react';
import gridActive from '../../images/grid_active.png';
import grid from '../../images/grid.png';
import flexActive from '../../images/flex_active.png';
import flex from '../../images/flex.png';
import {DisplayContext} from '../../contexts/DisplayContext';

const DisplayType: React.FC = () => {
  const [displayType, setDisplayType] = useContext(DisplayContext);

  const handleDisplayOnClick = (type: string) => {
    setDisplayType(type);
  };

  return (
    <div className="display-type">
      <img
        className={displayType === 'grid' ? undefined : 'inactive'}
        src={displayType === 'grid' ? gridActive : grid}
        alt="grid"
        onClick={() => handleDisplayOnClick('grid')}
      />
      <img
        className={displayType === 'flex' ? undefined : 'inactive'}
        src={displayType === 'flex' ? flexActive : flex}
        alt="flex"
        onClick={() => handleDisplayOnClick('flex')}
      />
    </div>
  );
};

export default DisplayType;
