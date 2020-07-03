import noImage from '../../images/no_image_trans.png';

const getImage = (path?: string) =>
  !path ? noImage : `https://image.tmdb.org/t/p/w300_and_h450_bestv2${path}`;

export default getImage;
