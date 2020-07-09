import React from 'react';
import {ArrowUpward} from '@material-ui/icons';
import styled from 'styled-components';

const StyledArrow = styled(ArrowUpward).attrs({fontSize: 'large'})`
  color: #166bc1;
`;

const ScrollUp: React.FC = () => {
  const handleOnClick = (): void => {
    window.scroll(0, 0);
  };

  return (
    <div className="button-container" onClick={() => handleOnClick()}>
      <StyledArrow />
    </div>
  );
};

export default ScrollUp;
