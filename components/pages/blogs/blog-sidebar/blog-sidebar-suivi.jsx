
//import blogData from '@/components/data/blog-data';
import Link from 'next/link';
import FormInscription from '../../contacts/form-inscription';
import FormSuiviProjet from '../../contacts/form-suivi-projet';

const BlogSidebarSuivi = () => {
    //const blogPost = blogData.slice(0, 3);
    return (
        <div className="all__sidebar dark_image ml-25 xl-ml-0">
            
            <div className="all__sidebar-item">
                <h6>Formulaire de Suivi de Projet</h6>
                <div className="all__sidebar-item-post">
                    <FormSuiviProjet />
                </div>
            </div>
        </div>
    );
};

export default BlogSidebarSuivi;