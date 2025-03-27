import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Experience'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Web development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-mobile"></i>
                <h3>
                    <FormattedMessage
                        id='mobile-dev'
                        defaultMessage='mobile development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='mobile-info'
                        defaultMessage='Experienced in React Native mobile development, building cross-platform apps with optimized UI, API integrations, performance tuning, and scalable architecture for iOS/Android.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-drafting-compass"></i>
                <h3>
                    <FormattedMessage
                        id='design'
                        defaultMessage='Desktop development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Experience in developing desktop applications using Electron.js, building cross-platform, high-performance apps with seamless integration of web technologies and native features.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-wrench"></i>
                <h3>
                    <FormattedMessage
                        id='maintenance'
                        defaultMessage='Web maintenance'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='maintenance-info'
                        defaultMessage='Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i className="fas fa-search"></i>
                <h3>
                    <FormattedMessage
                        id='seo'
                        defaultMessage='Database'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='seo-info'
                        defaultMessage='Strong expertise in both SQL and NoSQL databases, proficient in designing, optimizing, and managing relational and non-relational data structures efficiently.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i className="fas fa-tachometer-alt"></i>
                <h3>
                    <FormattedMessage
                        id='optimization'
                        defaultMessage='Website optimization'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='optimization-info'
                        defaultMessage='Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website'
                    />
                </p>
            </div>
        </div>
        <div className='portafolio-btn'>
            <Link to="/service">
                <ButtomGet/>
            </Link>
        </div>
    </section>
);

export default React.memo(Service);