import Link from 'next/link';
import React from 'react';

const Social = () => {
    return (
        <>
            <ul>
                <li><Link href="https://web.facebook.com/people/Centre-Professionnel-Du-Savoir/61568398310360/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="https://www.instagram.com/centreprofessionneldusavoir" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                <li><Link href="https://www.linkedin.com/company/centre-professionnel-du-savoir" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
            </ul>            
        </>
    );
};

export default Social;