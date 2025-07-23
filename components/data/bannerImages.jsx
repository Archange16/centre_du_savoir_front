import equipeImage from '../../public/assets/img/equipeImage/equipe.jpg';
import FormationequipeImage from '../../public/assets/img/equipeImage/imagesban1.jpg';
import servicesImage from '../../public/assets/img/equipeImage/imagesban2.jpg';
import contactImage from '../../public/assets/img/equipeImage/imagesban3.jpg';

const bannerData = [
  {
    page: 'equipe',
    src: equipeImage.src,
    title: 'Notre Équipe',
    innerTitle: 'Équipe',
    description: 'Une équipe dédiée à votre réussite',
  },
  {
    page: 'formation',
    src: FormationequipeImage.src,
    title: 'Notre Équipe',
    innerTitle: 'Équipe',
    description: 'Une équipe dédiée à votre réussite',
  },
  {
    page: 'services',
    src: servicesImage.src,
    title: 'Nos Services',
    innerTitle: 'Services',
    description: 'Découvrez nos solutions sur mesure',
  },
  {
    page: 'contact',
    src: contactImage.src,
    title: 'Contactez-nous',
    innerTitle: 'Contact',
    description: 'Prenez rendez-vous ou écrivez-nous',
  },
];

export default bannerData;
