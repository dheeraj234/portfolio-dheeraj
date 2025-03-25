import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';


/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImgApp = require.context('../../img', true);

function ProjectApp() {
    // const [estadoModal18, cambiarEstadoModal18] = useState(false);
    // const [estadoModal17, cambiarEstadoModal17] = useState(false);
    // const [estadoModal16, cambiarEstadoModal16] = useState(false);
    // const [estadoModal15, cambiarEstadoModal15] = useState(false);
    // const [estadoModal14, cambiarEstadoModal14] = useState(false);
    // const [estadoModal13, cambiarEstadoModal13] = useState(false);
    // const [estadoModal12, cambiarEstadoModal12] = useState(false);
    // const [estadoModal11, cambiarEstadoModal11] = useState(false);
    // const [estadoModal10, cambiarEstadoModal10] = useState(false);
    // const [estadoModal9, cambiarEstadoModal9] = useState(false);
    // const [estadoModal8, cambiarEstadoModal8] = useState(false);
    // const [estadoModal7, cambiarEstadoModal7] = useState(false);
    // const [estadoModal6, cambiarEstadoModal6] = useState(false);
    // const [estadoModal5, cambiarEstadoModal5] = useState(false);
    // const [estadoModal4, cambiarEstadoModal4] = useState(false);
    // const [estadoModal3, cambiarEstadoModal3] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    return (
        <div>

            <HeaderPage />

            <ParticleBackground />

            <main>
                <section className="proyectos mas-proyect" id="proyectos">
                    <h1 className="heading">
                        <FormattedMessage
                            id='projects'
                            defaultMessage='Projects'
                        />
                    </h1>
                    <nav className="navbar nav-proj">
                        <NavLink to="/project/" offset={-150} duration={500}>
                            <FormattedMessage
                                id='site-web'
                                defaultMessage='websites'
                            />
                        </NavLink>
                        <NavLink to="/project/app" offset={-150} duration={500}>
                            Apps
                        </NavLink>
                        <NavLink to="/project/game" offset={-150} duration={500}>
                            <FormattedMessage
                                id='games'
                                defaultMessage='games'
                            />
                        </NavLink>
                    </nav>
                </section>
                <section className="projects__grid apps">

                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal2(!estadoModal2)}>
                            <img src={proyectsImgApp(`./emetly.webp`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal1(!estadoModal1)}>
                            <img src={proyectsImgApp(`./bible.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                </section>
            </main>


            <Modal
                estado={estadoModal2}
                cambiarEstado={cambiarEstadoModal2}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./emetly.webp`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-2-p1'
                                    defaultMessage='Emetly App'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-2-p2'
                                    defaultMessage='Discover the Bible in a whole new way with Emetly, an app that brings the scriptures to life through audio and sign video. Emetly offers an engaging experience similar to your favorite music apps.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://play.google.com/store/apps/details?id=com.emetly.app&utm_source=na_Med" target="_blank">https://play.google.com/store/apps/details?id=com.emetly.app&utm_source=na_Med</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./bible.png`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-1-p1'
                                    defaultMessage='Rhema App'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-1-p2'
                                    defaultMessage='Rhema app is a translation tool for global church with simple design & seamless experience. Enables users to upload source language in any available format with in-built recording, comments from experts and ease in sharing the content with 100% safe and secure login.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://play.google.com/store/apps/details?id=com.marisree.bt&utm_source=na_Med" target="_blank">https://play.google.com/store/apps/details?id=com.marisree.bt&utm_source=na_Med</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/capacitor/capacitor-original.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <ScrollToTop />

            <Footer />
        </div>
    )
}

export default ProjectApp
