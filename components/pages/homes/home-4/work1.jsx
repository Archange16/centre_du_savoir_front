import workBg from "../../../../public/assets/img/work-process/work-process-bg.png";
import image1 from "../../../../public/assets/img/work-process/work-process-1.png";
import image2 from "../../../../public/assets/img/work-process/work-process-2.png";
import Count from "../../common/count";
import FormSuiviProjet from "../../contacts/form-suivi-projet";
import BlogSidebarSuivi from "../../blogs/blog-sidebar/blog-sidebar-suivi";

const WorkArea = () => {
    return (
        <div className="work-process-area__one section-padding" style={{backgroundImage: `url(${workBg.src})`}}>
            <div className="container">
                <div className="row align-items-end work-process-area__one-title">
                    <div className="col-xl-6 col-lg-6">
                        <div className="work-process-area__one-content-left">
                            <span className="subtitle-one">Suivi de projet</span>
                            <h2>Votre partenaire technique dans le BTP</h2>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 custom-offset-xl">
                        <div className="work-process-area__one-content-right">
                            <p>Vous accompagner dans la viabilisation, la solidité et la conformité technique de vos ouvrages. 📍 Disponible pour collaboration sur tout projet technique.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gy-4">
                    <div className="col-xl-6">
                        <div className="work-process-area__one-single-work">
                            <div className="work-process-area__one-single-work-content">
                                <h4>Études & Conception de Voiries, Assainissement et Routes</h4>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <div className="work-process-area__one-single-work-content">
                                <h4>Études Hydrologiques & Hydraulique</h4>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <div className="work-process-area__one-single-work-content">
                                <h4>Calculs des Structures d’Ouvrages d’Art : Ponts, Dalots, Buses, Châteaux d’eau</h4>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <div className="work-process-area__one-single-work-content">
                                <h4>Calculs de Structures Bâtiment & Métallique</h4>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <div className="work-process-area__one-single-work-content">
                                <h4>Conception des Plans d’Exécution</h4>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <div className="work-process-area__one-single-work-content">
                                <h4>Calculs de Structures Bâtiment & Métallique</h4>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <div className="work-process-area__one-single-work-content">
                                <h4>Calculs de Structures Bâtiment & Métallique</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <BlogSidebarSuivi/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkArea;