import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import styles from './OurTeam.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AlexMarin from '../../Static/AlexMarin.jpeg';
import ChristianQuevedo from '../../Static/ChristianQuevedo.jpeg';
import Gaspar from '../../Static/Gaspar.jpeg'
import Valentin from '../../Static/Valentin.jpg'

import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const OurTeam = () => {
    return (
        <>
            <Navbar />
            <div className={styles.ourteamcontainer}>
                <div className={styles.titlecontainer}>
                    <h1>Conoce nuestro equipo</h1>
                    <h3>Full Stack Web Developers - Cohorte Ft15a</h3>
                </div>
                <div className={styles.wholeteam}>
                <div className={styles.personaldiv}>
                    <div className={styles.picpersonal} style={{ backgroundImage: `url(${Valentin})` }}></div>
                        <div className={styles.nameperson}>
                            <h2>Valentin Alessandrini </h2>
                            <h3>Full Stack Web Developer</h3>
                            <p>Me encontré con este mundo de forma inesperada y me sorprendió. Al momento de iniciar el bootcamp no tenia grandes conocimientos en la programación y logré llegar a ser Full Stack Developer, algo que nunca me imaginé.</p>
                            <div>
                                <a href="https://www.linkedin.com/in/valentin-alessandrini-zapata/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faLinkedin} />
                                </a>
                                <a href="https://www.linkedin.com/in/valentin-alessandrini-zapata/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faWhatsapp} />
                                </a>
                                <a href="https://github.com/valentinaless07" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.personaldiv}>
                        <div className={styles.picpersonal} style={{ backgroundImage: "url(" + "https://scontent.fmga3-1.fna.fbcdn.net/v/t1.6435-9/119025870_3909033542447401_4722914994352697087_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=cYzCpjBYOo4AX-GR7tW&_nc_ht=scontent.fmga3-1.fna&oh=d4a03cbdaa002c585b39487748a3fc8a&oe=616867F0" + ")" }}></div>
                        <div className={styles.nameperson}>
                            <h2>Benjamín Cáceres</h2>
                            <h3>Full Stack Web Developer</h3>
                            <p>Aunque descubri un poco tarde el mundo de la programacion siempre me encanto la tecnologia y encontrar nuevos retos y algo que requiera de constante aprendizaje es algo que me hace sentir comodo.</p>
                            <div>
                                <a href="https://www.linkedin.com/in/benjamin-caceres/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faLinkedin} />
                                </a>
                                <a href="https://wa.link/a9hfcd" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faWhatsapp} />
                                </a>
                                <a href="https://github.com/benjamin-caceres" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.personaldiv}>
                        <div className={styles.picpersonal} style={{ backgroundImage: `url(${ChristianQuevedo})`}}></div>
                        <div className={styles.nameperson}>
                            <h2>Christian Quevedo</h2>
                            <h3>Full Stack Web Developer</h3>

                            <p>La programación es como un videojuego en el que susbes de nivel y cada uno es mas dificil que el anterior, ¿a quien no le gusta un buen juego? a mi me fascina, aprender, practicar, asimilar y repetir, por eso lo considero mi mundo.</p>
                            <div>
                                <a href="https://www.linkedin.com/in/cristian-quevedo/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faLinkedin} />
                                </a>
                                <a href="https://wa.link/fitsg3" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faWhatsapp} />
                                </a>
                                <a href="https://github.com/xerxes97" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                  

                </div>
                <div className={styles.wholeteam}>
                    <div className={styles.personaldiv}>
                    <div className={styles.picpersonal} style={{ backgroundImage: "url(" + "https://www.w3schools.com/howto/img_avatar.png" + ")" }}></div>
                        <div className={styles.nameperson}>
                            <h2>Alejandro Abad</h2>
                            <h3>Full Stack Web Developer</h3>
                            <p>Apasionado de la programación desde muy chico y con experiencia en la parte técnica, gracias a Henry pude cristalizar mi sueño y convertirme en FullStack Developer.</p>
                            <div>
                                <a href="linkedin.com/in/alejandro-abad-761ba0212" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faLinkedin} />
                                </a>
                                <a href="linkedin.com/in/alejandro-abad-761ba0212" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faWhatsapp} />
                                </a>
                                <a href="https://github.com/abadalejandro" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.personaldiv}>
                    <div className={styles.picpersonal} style={{ backgroundImage: `url(${AlexMarin})` }}></div>
                        <div className={styles.nameperson}>
                            <h2>Alex Marin</h2>
                            <h3>Full Stack Web Developer</h3>
                            <p>Apasionado por la tecnología. Orientado a la solución de problemas.</p>
                            <div>
                                <a href="https://www.linkedin.com/in/alexmarinmendez/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faLinkedin} />
                                </a>
                                <a href="https://wa.link/a9hfcd" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faWhatsapp} />
                                </a>
                                <a href="https://github.com/alexmarinmendez" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.personaldiv}>
                    <div className={styles.picpersonal} style={{ backgroundImage: `url(${Gaspar})` }}></div>
                        <div className={styles.nameperson}>
                            <h2>Gaspar Almada</h2>
                            <h3>Full Stack Web Developer</h3>
                            <p>Con varios años de experiencia en la industria de la animación y diseño 3D, he iniciando un nuevo camino profesional al adquirir mis primeras experiencias en el desafiante y apasionante mundo del desarrollo IT. Actualmente me encuentro buscando formar parte de un equipo creador de soluciones tecnológicas, para aportar mis capacidades y crecer profesionalmente.</p>
                            <div>
                                <a href="https://www.linkedin.com/in/gaspar-almada/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faLinkedin} />
                                </a>
                                <a href="https://wa.link/a9hfcd" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faWhatsapp} />
                                </a>
                                <a href="https://github.com/almadagaspar" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.wholeteam}>
                    <div className={styles.personaldiv}>
                    <div className={styles.picpersonal} style={{ backgroundImage: "url(" + "https://media-exp1.licdn.com/dms/image/C4D03AQFkWUyT4VCPVQ/profile-displayphoto-shrink_800_800/0/1630428625173?e=1637193600&v=beta&t=h7oHVv6vdonXw7wd3CRVxa-f41-YdPAXGN9rMuv1IDc" + ")" }}></div>
                        <div className={styles.nameperson}>
                            <h2>Emiliano Duartes</h2>
                            <h3>Full Stack Web Developer</h3>
                            <p>Me defino como una persona emprendedora, comunicativa y positiva. Durante los últimos años colaboré activamente con equipos de desarrollo en empresas con modelos de negocios digitales. Esto me generó curiosidad por aprender a programar e interés en esa dinámica de trabajo. Así fue que inicié mi camino participando del bootcamp de Henry.</p>
                            <div>
                                <a href="https://www.linkedin.com/in/emilianoduartes/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faLinkedin} />
                                </a>
                                <a href="https://wa.link/a9hfcd" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faWhatsapp} />
                                </a>
                                <a href="https://github.com/emilianoduartes" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.personaldiv}>
                    <div className={styles.picpersonal} style={{ backgroundImage: "url(" + "https://media-exp1.licdn.com/dms/image/C4E03AQFrOvcsq0o5eg/profile-displayphoto-shrink_800_800/0/1626391224513?e=1637193600&v=beta&t=D0eMnM_1QLX5ja8LW9HtRjUUU0CAc0wuYe_wLj0PJMo" + ")" }}></div>
                        <div className={styles.nameperson}>
                            <h2>Gustavo Riera</h2>
                            <h3>Full Stack Web Developer</h3>
                            <p>Siempre me sentí atraído al mundo tecnológico, la idea de crear cosas increíbles desde un lienzo en blanco es el verdadero arte, creo firmemente que todos podemos hacer cualquier cosa si nos dedicamos, esforzamos y persistimos. El único camino que conozco es el de la senda del esfuerzo.</p>
                            <div>
                                <a href="https://www.linkedin.com/in/gustavo-riera-fullstackdev/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faLinkedin} />
                                </a>
                                <a href="https://wa.link/a9hfcd" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faWhatsapp} />
                                </a>
                                <a href="https://github.com/Gustavitory" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={styles.footericon} icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default OurTeam;
