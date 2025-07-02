import team1 from "../../public/assets/img/team/team-1.jpg";
import team2 from "../../public/assets/img/team/team-2.jpg";
import team3 from "../../public/assets/img/team/team-3.jpg";
import team4 from "../../public/assets/img/team/team-4.jpg";
import team5 from "../../public/assets/img/team/team-5.jpg";
import team6 from "../../public/assets/img/team/team-6.jpg";

const teamData = [
    {
        id: 'derya-kurtulus',
        image: team1,
        name: 'Belardi IPAYE',
        position: 'Ingénieur en Génie Civil',
        mail: 'derya@gmail.com',
        phone: '+125 (564) 656 156',
        category: 'founder',
        social_link: [
            { link: 'https://www.linkedin.com/in/belardi-ipaye-6a437017b/', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://x.com/BelardiIpaye', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://web.facebook.com/belardi.fred', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'steve-rhodes',
        image: team2,
        name: 'Dauchel ITOUA',
        position: 'Ingénieur en Génie Civil',
        mail: 'rhodes@gmail.com',
        phone: '+125 (261) 564 232',
        category: 'writer',
        social_link: [
            { link: 'https://www.linkedin.com/in/dauchel-itoua-aba227292/', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
           /*  { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> }, */
            { link: 'https://web.facebook.com/dauchel.itoua.2025', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'lisa-thompson',
        image: team3,
        name: 'Marchellon NGABIRA',
        position: 'Ingénieur en Génie Civil',
        mail: 'lisa@gmail.com',
        phone: '+125 (564) 226 781',
        category: 'founder',
        social_link: [
            { link: 'https://web.facebook.com/marchellon.ngabira', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://www.linkedin.com/in/marchellon-ngabira-b59971172/', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://x.com/MNgabira27492', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
        ],
    },
    {
        id: 'david-martinez',
        image: team4,
        name: 'Donald NIOKY',
        position: 'Ingénieur en Génie Civil',
        mail: 'martinez@gmail.com',
        phone: '+125 (231) 562 156',
        category: 'writer',
        social_link: [
            { link: 'https://www.linkedin.com/in/donald-nioky-bb0606162/', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://web.facebook.com/best.nioki', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://x.com/best_nioky', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
        ],
    },
    {
        id: 'cansu-tuman',
        image: team5,
        name: 'Cansu Tuman',
        position: 'Project Manager',
        mail: 'cansu@gmail.com',
        phone: '+125 (456) 121 894',
        category: 'manager',
        social_link: [
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'devon-lane',
        image: team6,
        name: 'Devon Lane',
        position: 'Technician',
        mail: 'devon@gmail.com',
        phone: '+125 (544) 897 488',
        category: 'designer',
        social_link: [
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
        ],
    },
];

export default teamData;