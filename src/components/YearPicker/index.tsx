import React, {useEffect, useState} from 'react';
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
  const getYearArray = (): number[] => {
    const currentYear = new Date().getFullYear();
    let firstYear = currentYear - 14;
    const array = [];
    while (firstYear <= currentYear) {
      array.push(firstYear);
      firstYear = firstYear + 1;
    }
    return array;
  };

  const yearArray = getYearArray();

  useEffect(() => {
    setYearList(yearArray);
  }, []);

  const [yearList, setYearList] = useState([0]);
  const intl = useIntl();

  const toggleYearPickerOpen = () => toggleYearPicker(!isYearPickerOpen);

  const prevButtons = () => {
    setYearList(prev => prev.map(button => button - 15));
  };

  const nextButtons = () => {
    setYearList(prev => prev.map(button => button + 15));
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
          <h2>{`${yearList[0]}-${yearList[14]}`}</h2>
          <ArrowForwardIosIcon onClick={() => nextButtons()} />
        </div>
        <div className="year-list">
          {yearList.map(button =>
            button === year ? (
              <button key={button} className="current-year">
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
