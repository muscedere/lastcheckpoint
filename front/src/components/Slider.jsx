import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-09/A_Star_is_Born_OK.jpg',
    altText: 'Protec',
    caption: '',
    header: ''
  },
  {
    src: 'http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-09/a_star_is_born.jpg',
    altText: 'Protec',
    caption: '',
    header: ''
  },
  {
    src: 'https://video.timeout.com/thumbs/fOHVbBf1-1280.jpg',
    altText: 'Protec',
    caption: '',
    header: ''
  }
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;