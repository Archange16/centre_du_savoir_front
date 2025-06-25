import Link from 'next/link';
import image2 from '../../../../public/assets/img/service/service-details.png';
import { useParams } from 'next/navigation';
import servicesData from '@/components/data/services-data';
import BlogSidebar from '../../blogs/blog-sidebar/blog-sidebar';
import WorkArea from '../../homes/home/work';



const FormationSingleMain = ({selectedFormation}) => {

    const params = useParams();
    const { id } = params;

    // Chercher le service correspondant dans la data
    const service = selectedFormation/* .find((item) => item.id === id) */;
    // Vérifier si le service existe
   
      //const category = singleData?.title.split(' ').slice(0, 2).join(' ') + '..';

    return (
        <>
        <WorkArea />
        </>
    );
};

export default FormationSingleMain;