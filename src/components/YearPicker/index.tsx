import React, {useState} from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useIntl} from 'react-intl';

interface Props {
  year: number | undefined;
  setYear: React.Dispatch<React.SetStateAction<number | undefined>>;
  isYearPickerOpen: boolean;
  toggleYearPicker: React.Dispatch<React.SetStateAction<boolean>>;
}

const YearPicker: React.FC<Props> = ({
  year,
  setYear,
  isYearPickerOpen,
  toggleYearPicker,
}) => {
  const [buttons, setButtons] = useState([
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ]);
  const intl = useIntl();

  const toggleYearPickerOpen = () => toggleYearPicker(!isYearPickerOpen);

  const prevButtons = () => {
    setButtons(prev => prev.map(button => button - 15));
  };

  const nextButtons = () => {
    setButtons(prev => prev.map(button => button + 15));
  };

  const closeYearPicker = () => {
    toggleYearPicker(false);
  };

  const buttonOnClick = (value: number): void => {
    toggleYearPicker(false);
    setYear(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setYear(+e.target.value);

  return (
    <div className="relative-container">
      <div className="year-picker-container">
        <div className="input-container">
          <input
            type="text"
            placeholder={intl.formatMessage({
              id: 'input.year',
              defaultMessage: 'Year...',
            })}
            value={year}
            onChange={handleChange}
          />
          <div className="date-icon-container">
            <DateRangeIcon onClick={() => toggleYearPickerOpen()} />
          </div>
        </div>
      </div>
      <div
        className="choose-year-container"
        style={isYearPickerOpen ? {} : {visibility: 'hidden'}}
      >
        <div className="year-slider">
          <ArrowBackIosIcon onClick={() => prevButtons()} />
          <h2>{`${buttons[0]}-${buttons[14]}`}</h2>
          <ArrowForwardIosIcon onClick={() => nextButtons()} />
        </div>
        <div className="year-list">
          {buttons.map(button =>
            button === year ? (
              <button
                key={button}
                style={{
                  cursor: 'default',
                  border: '1px solid black',
                  background: '#2235af',
                  color: 'white',
                }}
              >
                {button}
              </button>
            ) : (
              <button key={button} onClick={() => buttonOnClick(button)}>
                {button}
              </button>
            ),
          )}
        </div>
        <div className="year-reset">
          <button onClick={() => closeYearPicker()}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default YearPicker;
