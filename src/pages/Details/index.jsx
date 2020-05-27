import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import api from '../../api/axiosConfig';
import {LanguageContext} from '../../contexts/LanguageContext';
import HeaderDeatils from './HeaderDetails';
import MovieDetails from './MovieDetails';

const Details = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const {id} = params;
  const [language] = useContext(LanguageContext);

  const fetchMovieDetails = () => {
    api
      .get(`/movie/${id}?`)
      .then(res => setData(res.data))
      .catch(() => (window.location.href = '/404'));
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [params, language]);

  return (
    <>
      <HeaderDeatils data={data} />
      <MovieDetails data={data} />
    </>
  );
};

export default Details;
