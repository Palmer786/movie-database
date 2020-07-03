import React from 'react';
import {ArrowUpward} from '@material-ui/icons';

const ScrollUp: React.FC = () => {
  const handleOnClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="button-container" onClick={() => handleOnClick()}>
      <ArrowUpward fontSize="large" style={{color: '#166bc1'}} />
    </div>
  );
};

export default ScrollUp;
