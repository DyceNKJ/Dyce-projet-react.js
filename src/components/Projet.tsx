import { useEffect } from 'react'
import Tooltip from '@mui/material/Tooltip';
import site from '../assets/site.png'
import CABICON from '../assets/CABICON.png'
import first from '../assets/first.png'
import dy from '../assets/dy.png'
import you from '../assets/you.png'
import resto from '../assets/resto.png'

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
    <section id='projets' className='mb-9 overflow-x-hidden overflow-y-hidden'>
                {/* Projets */}
        <div className="max-w-7xl mx-auto">
            <h1 className="text-white text-center font-bold text-3xl my-6 mb-6">Mes Projets</h1>
        </div>

        {/* Card */}
        <div className=' items-center justify-center mx-auto space-y-10 sm:flex-col md:flex lg:flex-row lg:space-x-16 lg:space-y-0'>

            <div className='md:max-w-2xl lg:max-w-4xl grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0 lg:gap-x-20 lg:space-y-7 md:space-y-6 items-center justify-center md:mx-12 md:gap-x-5 mx-auto lg:mx-0 lg:mr-14 '>
                
                {/* Card 1 */}
                <div className="from-left max-w-4xl bg-gray-900 rounded-lg shadow-lg p-4 w-75 h-120">
                    <img src={site} alt="" className="w-full rounded-lg" />
                    <h3 className="mt-2 font-bold text-white">Dyce NEKOMONJI.Tech.</h3>
                    <p className="text-white text-sm whitespace-normal mt-2">Site web développé avec Vue.js 3 & TypeScript avec filtrage, pagination, formulaire EmailJS (historique des contacts enregistré pour relances), effets de parallaxe, et backend Firebase (Firestore) avec interface admin sécurisée.</p>

                    <div className="flex flex-wrap gap-2 text-left text-sm">
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">Vue.js</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-18 h-7 rounded-lg">TypeScript</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-22 h-7 rounded-lg">Tailwind CSS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">EmailJS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-15 h-7 rounded-lg">Firebase</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-29 h-7 rounded-lg">Google Analytics</p>
                    </div>
                        <div className="flex space-x-2 mt-4">
                            <button type='button' className='bg-sky-700 hover:bg-sky-800 p-3 mt-3 w-51 rounded-xl cursor-pointer'>
                            <a href="https://claudyce-corneille.vercel.app/" className="">Demo <i className="fa-regular fa-circle-play"></i></a>
                        </button>
                        <button type='button' className='bg-sky-600 hover:bg-sky-400 p-3 mt-3 w-30 rounded-xl cursor-pointer'>
                            <a href="https://github.com/DyceNKJ" className=""><i className="fab fa-github text-white"></i></a>
                        </button>
                        </div>
                </div>

                {/* Card 2 */}
                <div className="from-left max-w-4xl bg-gray-900 rounded-lg shadow-lg p-4 w-75 h-120">
                    <img src={CABICON} alt="" className="w-full rounded-lg" />
                    <h3 className="mt-2 font-bold text-white">CABICONS</h3>
                    <p className="text-white text-sm whitespace-normal mt-2">Site web développé pour CABICONS, cabinet conseils.
Services : Formations, Communication, Études & Conseil, Conseil en Affaires, Création & Gestion d’Entreprise (accompagnement juridique, business plan, partenaires, systèmes d’information).</p>

                    <div className="flex flex-wrap gap-2 text-left text-sm">
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">HTML</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-22 h-7 rounded-lg">Tailwind CSS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-20 h-7 rounded-lg">JavaScript</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">EmailJS</p>
                    </div>
                        <div className="flex space-x-2 mt-5">
                            <button type='button' className='bg-sky-700 hover:bg-sky-800 p-3 mt-3 w-51 rounded-xl cursor-pointer'>
                            <a href="https://cabicons.vercel.app/" className="">Demo <i className="fa-regular fa-circle-play"></i></a>
                        </button>
                        <button type='button' className='bg-sky-600 hover:bg-sky-400 p-3 mt-3 w-30 rounded-xl cursor-pointer'>
                            <a href="https://github.com/DyceNKJ" className=""><i className="fab fa-github text-white"></i></a>
                        </button>
                        </div>
                </div>

                {/* Card 3 */}
                <div className="from-right max-w-4xl bg-gray-900 rounded-lg shadow-lg p-4 w-75 h-120">
                    <img src={first} alt="" className="w-full rounded-lg" />
                    <h3 className="mt-2 font-bold text-white">Dyce PORTFOLIO</h3>
                    <p className="text-white text-sm whitespace-normal mt-2">Portfolio moderne et immersif conçu pour mettre en valeur mes compétences en développement front-end et en design d’interfaces.</p>

                    <div className="flex flex-wrap gap-2 text-left text-sm">
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-26 h-7 rounded-lg">React.js + Vite</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-18 h-7 rounded-lg">TypeScript</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">EmailJS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-22 h-7 rounded-lg">TailwindCSS</p>
                    </div>
                        <div className="flex space-x-2 mt-5">
                            <button type='button' className='bg-sky-700 hover:bg-sky-800 p-3 mt-3 w-51 rounded-xl cursor-pointer hidden'>
                            <a href="" className="">Demo <i className="fa-regular fa-circle-play"></i></a>
                        </button>
                        <button type='button' className='bg-sky-600 hover:bg-sky-400 p-3 mt-13 w-full rounded-xl cursor-pointer'>
                            <a href="https://github.com/DyceNKJ/Dyce-projet-react.js" className=""><i className="fab fa-github text-white"></i></a>
                        </button>
                        </div>
                </div>

                {/* Card 4 */}
                <div className="from-right max-w-4xl bg-gray-900 rounded-lg shadow-lg p-4 w-75 h-120">
                    <img src={dy} alt="" className="w-full rounded-lg" />
                    <h3 className="mt-2 font-bold text-white">Portfolio Front-End – HTML, TailwindCSS & JavaScript</h3>
                    <p className="text-white text-sm whitespace-normal mt-2">Découvrez un exemple complet de portfolio, mettant l’accent sur la maîtrise des fondamentaux du front-end, la structuration du code, la gestion des interactions et l’optimisation de l’interface.</p>

                    <div className="flex flex-wrap gap-2 text-left text-sm mb-5">
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">HTML</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-22 h-7 rounded-lg">Tailwind CSS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-20 h-7 rounded-lg">JavaScript</p>
                    </div>
                        <div className="flex space-x-2 mt-13">
                            <button type='button' className='bg-sky-700 hover:bg-sky-800 p-3 mt-3 w-51 rounded-xl cursor-pointer'>
                            <a href="https://github.com/DyceNKJ/Fichier-zip" className="">Demo <i className="fa-regular fa-circle-play"></i></a>
                        </button>
                        <button type='button' className='bg-sky-600 hover:bg-sky-400 p-3 mt-3 w-30 rounded-xl cursor-pointer'>
                            <a href="https://github.com/DyceNKJ" className=""><i className="fab fa-github text-white"></i></a>
                        </button>
                        </div>
                </div>

                {/* Card 5 */}
                <div className="from-down max-w-4xl bg-gray-900 rounded-lg shadow-lg p-4 w-75 h-120">
                    <img src={you} alt="" className="w-full rounded-lg" />
                    <h3 className="mt-2 font-bold text-white">Portfolio Créations Vidéo – AMV & Montages</h3>
                    <p className="text-white text-sm whitespace-normal mt-2">Explorez mes AMV et montages vidéo publiés sur YouTube, avec un accent sur le rythme, les transitions, les effets visuels et l’impact émotionnel, afin de créer des vidéos dynamiques et captivantes.</p>

                    <div className="flex flex-wrap gap-2 text-left text-sm">
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-15 h-7 rounded-lg">CapCut</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-23 h-7 rounded-lg">Premiere Pro</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-20 h-7 rounded-lg">YouTube</p>
                    </div>
                        <div className="flex space-x-2 mt-13">
                            <button type='button' className='bg-sky-700 hover:bg-sky-800 p-3 mt-3 w-51 rounded-xl cursor-pointer'>
                            <a href="https://www.youtube.com/@Dyce_Nekomonji/videos" className="">Demo <i className="fa-regular fa-circle-play"></i></a>
                        </button>
                        <button type='button' className='bg-sky-600 hover:bg-sky-400 p-3 mt-3 w-30 rounded-xl cursor-pointer'>
                            <a href="https://github.com/DyceNKJ" className=""><i className="fab fa-github text-white"></i></a>
                        </button>
                        </div>
                </div>

                {/* Card 6 */}
                <div className="from-down max-w-4xl bg-gray-900 rounded-lg shadow-lg p-4 w-75 h-120 mb-7">
                    <img src={resto} alt="" className="w-full h-35 rounded-lg" />
                    <h3 className="mt-2 font-bold text-white">Le Bistrot Élégant, Restaurant virtuel</h3>
                    <p className="text-white text-sm whitespace-normal mt-2">Bistrot Élégant est restaurant virtuel conçu pour démontrer la capacité à concevoir une expérience utilisateur cohérente, allant de la sélection des plats jusqu’à la réservation et pré-commande.</p>

                    <div className="flex flex-wrap gap-2 text-left text-sm">
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-24 h-7 rounded-lg">React.js + Vite</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-22 h-7 rounded-lg">Tailwind CSS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-13 h-7 rounded-lg">EmailJS</p>
                        <p className=" text-black bg-sky-700 text-center p-1 mt-2 gap-2 w-26 h-7 rounded-lg">Framer Motion</p>

                    </div>
                        <div className="flex space-x-2 mt-1 md:mt-2 disabled:cursor-not-allowed">
                        <Tooltip title="En cours de maintenance" arrow>
                        <button type='button' className='bg-sky-700 hover:bg-sky-800 p-3 mt-3 w-51 rounded-xl cursor-not-allowed'>
                            <a className="cursor-not-allowed">Demo <i className="fa-regular fa-circle-play"></i></a>
                        </button>
                        </Tooltip>
                        <button type='button' className='bg-sky-600 hover:bg-sky-400 p-3 mt-3 w-30 rounded-xl cursor-not-allowed'>
                            <a className="cursor-not-allowed"><i className="fab fa-github text-white"></i></a>
                        </button>
                        </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Projet