import { useEffect } from 'react'
import Tooltip from '@mui/material/Tooltip';
import site from '../assets/site.png'
import CABICON from '../assets/CABICON.png'
import first from '../assets/first.png'
import dy from '../assets/dy.png'
import you from '../assets/you.png'
import resto from '../assets/resto.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projet = () => {  

    useEffect(() => {
        const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
        if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                observer.unobserve(entry.target) //
        }
            })
        },
        { threshold: 0.3 }
        )
    
        const elements = document.querySelectorAll('.fade-in, from-left, .from-right')
        elements.forEach(el => observer.observe(el))
    
        return () => observer.disconnect()
        }, [])

    return (
    <section id='projets' className='bg-gray-900  overflow-x-hidden overflow-y-hidden'>
                {/* Projets */}
        <div className="max-w-7xl mx-auto">
            <h1 className="text-white text-center font-bold text-3xl my-16 mb-2">Mes Projets</h1>
            <p className='text-white text-center text-xl mb-8'>Parcourez mes réalisations et mesurez l’impact concret de mes solutions.</p>
        </div>

        {/* Card */}
        <div className='mb-16'>

            <div className='flex flex-col p-5 md:p-5 space-y-8'>
                
                {/* Card 1 */}
                <div className='lg:flex md:flex-row space-x-5 group'>
                <div className="from-left bg-gray-800 rounded-lg shadow-lg shadow-black/50 p-4 w-full md:w-100 lg:w-300 lg:h-90 h-60 hover:scale-105 group-hover:-translate-x-4 transition-transform duration-400 lg:ml-3 xl:ml-9">
                    <img src={site} alt="" className="w-full h-full rounded-lg hover:scale-96 transition-transform duration-600" />
                </div>

                    <div className='from-right flex flex-col group-hover:translate-x-4 lg:ml-3 transition-transform duration-1000'>
                        <div className='flex space-x-4'>
                            <div className='bg-gray-950 p-3 h-13 rounded-lg mt-3 hover:rotate-10 hover:scale-105 transition-all duration-300'> <DesktopWindowsIcon  style={{color: "white"}}/></div>
                            <div className='flex flex-col'>
                                <h3 className="mt-2 font-bold text-white md:text-2xl">Dyce NEKOMONJI.Tech.</h3>
                            <p className='text-sky-600 font-bold'>App Web</p>
                            </div>
                        </div>
                    <p className="text-white text-sm whitespace-normal mt-2 lg:w-4/5 xl:w-4/5">Site web développé avec Vue.js 3 & TypeScript avec filtrage, pagination, formulaire EmailJS (historique des contacts enregistré pour relances), effets de parallaxe, et backend Firebase (Firestore) avec interface admin sécurisée.</p>

                    <div className="flex flex-wrap gap-3 text-left text-sm">
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">Vue.js</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-18 h-7 rounded-lg">TypeScript</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-22 h-7 rounded-lg">Tailwind CSS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">EmailJS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-15 h-7 rounded-lg">Firebase</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-29 h-7 rounded-lg">Google Analytics</p>
                    </div>
                        <div className="flex space-x-2 mt-4">
                            <button type='button' className='bg-sky-700 hover:bg-sky-800 p-3 mt-3 w-51 rounded-xl cursor-pointer'>
                            <OpenInNewIcon /><a href="https://claudyce-corneille.vercel.app/" className="font-bold ml-3">Voir le projet </a>
                        </button>
                        <button type='button' className='bg-sky-600 hover:bg-sky-400 p-3 mt-3 w-30 rounded-xl cursor-pointer'>
                            <a href="https://github.com/DyceNKJ" className=""><GitHubIcon className="text-white" /></a>
                        </button>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='lg:flex md:flex-row-reverse space-x-5 group'>
                <div className="from-right bg-gray-800 rounded-lg shadow-lg shadow-black/50 p-4 w-full md:w-100 lg:w-300 lg:h-90 h-60 hover:scale-105 group-hover:-translate-x-5 transition-transform duration-600 lg:mr-9">
                    <img src={CABICON} alt="" className="w-full h-full rounded-lg hover:scale-96 transition-transform duration-600" />
                </div>

                    <div className='from-left xl:ml-9 flex flex-col group-hover:translate-x-5 lg:ml-3 transition-transform duration-700'>
                        <div className='flex space-x-4'>
                            <div className='bg-gray-950 p-3 h-13 rounded-lg mt-3 hover:rotate-10 hover:scale-105 transition-all duration-300'> <LanguageIcon   style={{color: "white"}}/></div>
                            <div className='flex flex-col'>
                                <h3 className="mt-2 font-bold text-white md:text-2xl">CABICONS</h3>
                            <p className='text-sky-600 font-bold'>Site web</p>
                            </div>
                        </div>
                    <p className="text-white text-sm whitespace-normal mt-2 lg:w-4/5 xl:w-4/5">Site web développé pour CABICONS, cabinet conseils. Services : Formations, Communication, Études & Conseil, Conseil en Affaires, Création & Gestion d’Entreprise (accompagnement juridique, business plan, partenaires, systèmes d’information).</p>

                    <div className="flex flex-wrap gap-2 text-left text-sm">
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">HTML</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-22 h-7 rounded-lg">Tailwind CSS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-20 h-7 rounded-lg">JavaScript</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">EmailJS</p>
                    </div>
                        <div className="flex space-x-2 mt-5">
                            <button type='button' className='bg-sky-700 hover:bg-sky-800 p-3 mt-3 w-51 rounded-xl cursor-pointer'>
                            <OpenInNewIcon /><a href="https://cabicons.vercel.app/" className="font-bold ml-3">Voir le projet</a>
                        </button>
                        <button type='button' className='bg-sky-600 hover:bg-sky-400 p-3 mt-3 w-30 rounded-xl cursor-pointer'>
                            <a href="https://github.com/DyceNKJ" className=""><GitHubIcon className="text-white" /></a>
                        </button>
                        </div>
                    </div>
                </div>

                 {/* Card 3 */}
                <div className='lg:flex md:flex-row space-x-5 group'>
                <div className="from-left bg-gray-800/70 rounded-lg shadow-lg shadow-black/50 p-4 w-full md:w-100 lg:w-181 lg:h-90 h-60 hover:scale-105 group-hover:-translate-x-4 transition-transform duration-400 lg:ml-3 xl:ml-9">
                    <img src={first} alt="" className="w-full h-full rounded-lg hover:scale-96 transition-transform duration-600" />
                </div>

                    <div className='from-right flex flex-col group-hover:translate-x-4 lg:ml-3 transition-transform duration-1000'>
                        <div className='flex space-x-4'>
                            <div className='bg-gray-950 p-3 h-13 rounded-lg mt-3 hover:rotate-10 hover:scale-105 transition-all duration-300'> <LanguageIcon   style={{color: "white"}}/></div>
                            <div className='flex flex-col'>
                                <h3 className="mt-2 font-bold text-white md:text-2xl">Dyce PORTFOLIO</h3>
                            <p className='text-sky-600 font-bold'>Site web</p>
                            </div>
                        </div>
                    <p className="text-white text-sm whitespace-normal mt-2 lg:w-4/5 xl:w-4/5">Portfolio moderne et immersif conçu pour mettre en valeur mes compétences en développement front-end et en design d’interfaces.</p>

                    <div className="flex flex-wrap gap-2 text-left text-sm">
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-26 h-7 rounded-lg">React.js + Vite</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-18 h-7 rounded-lg">TypeScript</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">EmailJS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-22 h-7 rounded-lg">TailwindCSS</p>
                    </div>
                        <div className="flex space-x-2 mt-5">
                            <button type='button' className='bg-sky-700 hover:bg-sky-800 p-3 mt-3 w-51 rounded-xl cursor-pointer hidden'>
                            <a href="" className="font-bold">Demo <i className="fa-regular fa-circle-play"></i></a>
                        </button>
                        <button type='button' className='bg-sky-600 hover:bg-sky-400 p-3 mt-3 w-80 rounded-xl cursor-pointer'>
                            <a href="https://github.com/DyceNKJ/Dyce-projet-react.js" className=""><GitHubIcon className="text-white" /></a>
                        </button>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='lg:flex md:flex-row-reverse space-x-5 group'>
                <div className="from-right bg-gray-800 rounded-lg shadow-lg shadow-black/50 p-4 w-full md:w-100 lg:w-236 lg:h-90 h-60 hover:scale-105 group-hover:-translate-x-5 transition-transform duration-600 lg:mr-9">
                    <img src={dy} alt="" className="w-full h-full rounded-lg hover:scale-96 transition-transform duration-600" />
                </div>

                    <div className='from-left xl:ml-9 flex flex-col group-hover:translate-x-5 lg:ml-3 transition-transform duration-700'>
                        <div className='flex space-x-4'>
                            <div className='bg-gray-950 p-3 h-13 rounded-lg mt-3 hover:rotate-10 hover:scale-105 transition-all duration-300'> <LanguageIcon   style={{color: "white"}}/></div>
                            <div className='flex flex-col'>
                                <h3 className="mt-2 font-bold text-white md:text-2xl">Portfolio Front-End</h3>
                            <p className='text-sky-600 font-bold'>Site web</p>
                            </div>
                        </div>
                    <p className="text-white text-sm whitespace-normal mt-2 lg:w-4/5 xl:w-4/5">Découvrez un exemple complet de portfolio, mettant l’accent sur la maîtrise des fondamentaux du front-end, la structuration du code, la gestion des interactions et l’optimisation de l’interface.</p>

                    <div className="flex flex-wrap gap-2 text-left text-sm mb-5">
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">HTML</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-22 h-7 rounded-lg">Tailwind CSS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-20 h-7 rounded-lg">JavaScript</p>
                    </div>
                        <div className="flex space-x-2 mt-1">
                        <button type='button' className='bg-sky-600 hover:bg-sky-400 p-3 mt-3 w-80 rounded-xl cursor-pointer'>
                            <a href="https://github.com/DyceNKJ" className=""><GitHubIcon className="text-white" /></a>
                        </button>
                        </div>
                    </div>
                </div>

                {/* Card 5 */}
                <div className='lg:flex md:flex-row space-x-5 group'>
                <div className="from-left bg-gray-800 rounded-lg shadow-lg shadow-black/50 p-4 w-full md:w-100 lg:w-263 lg:h-90 h-60 hover:scale-105 group-hover:-translate-x-4 transition-transform duration-400 lg:ml-3 xl:ml-9">
                    <img src={you} alt="" className="w-full h-full rounded-lg hover:scale-96 transition-transform duration-600" />
                </div>

                    <div className='from-right flex flex-col group-hover:translate-x-4 lg:ml-3 transition-transform duration-1000'>
                        <div className='flex space-x-4'>
                            <div className='bg-gray-950 p-3 h-13 rounded-lg mt-3 hover:rotate-10 hover:scale-105 transition-all duration-300'> <YouTubeIcon  style={{color: "white"}}/></div>
                            <div className='flex flex-col'>
                                <h3 className="mt-2 font-bold text-white md:text-2xl">Portfolio Créations Vidéo – AMV & Montages</h3>
                            <p className='text-sky-600 font-bold'>Chaîne YouTube</p>
                            </div>
                        </div>
                    <p className="text-white text-sm whitespace-normal mt-2 lg:w-4/5 xl:w-4/5">Explorez mes AMV et montages vidéo publiés sur YouTube, avec un accent sur le rythme, les transitions, les effets visuels et l’impact émotionnel, afin de créer des vidéos dynamiques et captivantes.</p>

                    <div className="flex flex-wrap gap-2 text-left text-sm">
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-15 h-7 rounded-lg">CapCut</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-23 h-7 rounded-lg">Premiere Pro</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-20 h-7 rounded-lg">YouTube</p>
                    </div>
                        <div className="flex space-x-2 mt-3">
                            <button type='button' className='bg-sky-700 hover:bg-sky-800 p-3 mt-3 w-80 rounded-xl cursor-pointer'>
                            <a href="https://www.youtube.com/@Dyce_Nekomonji/videos" className="font-bold">Demo <i className="fa-regular fa-circle-play"></i></a>
                        </button>
                        </div>
                    </div>
                </div>

                 {/* Card 6 */}
                <div className='lg:flex md:flex-row-reverse space-x-5 group'>
                <div className="from-right bg-gray-800 rounded-lg shadow-lg shadow-black/50 p-4 w-full md:w-100 lg:w-236 lg:h-90 h-60 hover:scale-105 group-hover:-translate-x-5 transition-transform duration-600 lg:mr-9">
                    <img src={resto} alt="" className="w-full h-full rounded-lg hover:scale-96 transition-transform duration-600" />
                </div>

                    <div className='from-left xl:ml-9 flex flex-col group-hover:translate-x-5 lg:ml-3 transition-transform duration-700'>
                        <div className='flex space-x-4'>
                            <div className='bg-gray-950 p-3 h-13 rounded-lg mt-3 hover:rotate-10 hover:scale-105 transition-all duration-300'> <DesktopWindowsIcon  style={{color: "white"}}/></div>
                            <div className='flex flex-col'>
                                <h3 className="mt-2 font-bold text-white md:text-2xl">Le Bistrot Élégant, Restaurant virtuel</h3>
                            <p className='text-sky-600 font-bold'>App Web</p>
                            </div>
                        </div>
                    <p className="text-white text-sm whitespace-normal mt-2 lg:w-4/5 xl:w-4/5">Bistrot Élégant est restaurant virtuel conçu pour démontrer la capacité à concevoir une expérience utilisateur cohérente, allant de la sélection des plats jusqu’à la réservation et pré-commande.</p>

                    <div className="flex flex-wrap gap-2 text-left text-sm">
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-24 h-7 rounded-lg">React.js + Vite</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-18 h-7 rounded-lg">TypeScript</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-22 h-7 rounded-lg">Tailwind CSS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-15 h-7 rounded-lg">Firebase</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">EmailJS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-26 h-7 rounded-lg">Framer Motion</p>

                    </div>
                        <div className="flex space-x-2 mt-1 md:mt-2 disabled:cursor-not-allowed">
                        <Tooltip title="En cours de maintenance" arrow>
                        <button type='button' className='bg-sky-700 hover:bg-sky-800 p-3 mt-3 w-51 rounded-xl cursor-not-allowed'>
                            <OpenInNewIcon /><a className="font-bold ml-3 cursor-not-allowed">Voir le projet</a>
                        </button>
                        </Tooltip>
                        <button type='button' className='bg-sky-600 hover:bg-sky-400 p-3 mt-3 w-30 rounded-xl cursor-not-allowed'>
                            <a className="cursor-not-allowed"><GitHubIcon className="text-white" /></a>
                        </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    )
}

export default Projet