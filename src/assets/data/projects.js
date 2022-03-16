import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Gordo Delivery',
    desc: 'An app for a grocery store.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Clean City',
    desc: 'An app to help people to discard garbage safely.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Coinator',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'B X D Portfolio',
    desc: 'A portfolio from BXD Company.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'WebStats',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
];

export default projects;
