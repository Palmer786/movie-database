import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import api from '../../api/axiosConfig';
import {LanguageContext} from '../../contexts/LanguageContext';
import HeaderDetails from './HeaderDetails';
import MovieDetails from './MovieDetails';

interface Genre {
  id: number;
  name: string;
}

export interface Data {
  original_language?: string;
  release_date?: string;
  overview?: string;
  poster_path?: string;
  budget?: number;
  runtime?: number;
  title?: string;
  vote_count?: number;
  vote_average?: number;
  genres?: Genre[];
  tagline?: string;
  original_title?: string;
  backdrop_path?: string;
}

type Params = {
  id: string;
};

const Details: React.FC = () => {
  const params: Params = useParams();
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
      <HeaderDetails data={data} />
      <MovieDetails data={data} />
    </>
  );
};

export default Details;
