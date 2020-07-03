import React, {useContext} from 'react';
import {DisplayContext} from '../../contexts/DisplayContext';

const DisplayType: React.FC = () => {
  const [displayType, setDisplayType] = useContext(DisplayContext);

  const handleDisplayOnClick = (type: string) => {
    setDisplayType(type);
  };

  return (
    <div className="display-type">
      <div
        onClick={() => handleDisplayOnClick('grid')}
        className={
          displayType === 'grid' ? 'grid-container' : 'grid-container inactive'
        }
      >
        <div className="grid-box" />
        <div className="grid-box" />
        <div className="grid-box" />
        <div className="grid-box" />
      </div>
      <div
        onClick={() => handleDisplayOnClick('flex')}
        className={
          displayType === 'flex' ? 'flex-container' : 'flex-container inactive'
        }
      >
        <div className="flex-line" />
        <div className="flex-line" />
        <div className="flex-line" />
      </div>
    </div>
  );
};

export default DisplayType;
