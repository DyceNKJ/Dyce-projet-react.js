import { useEffect } from 'react'
import html from '../assets/techno/html.png'
import css from '../assets/techno/css.png'
import js from '../assets/techno/js.png'
import react from '../assets/techno/react.png'
import Vue from '../assets/techno/Vue.png'
import Figma from '../assets/techno/Figma.png'
import tailwind from '../assets/techno/tailwind.png'
import Photoshop from '../assets/techno/Photoshop.png'
import Illustrator from '../assets/techno/Illustrator.png'
import Capcut from '../assets/techno/Capcut.png'
import Vercel from '../assets/techno/Vercel.png'
import GitHub from '../assets/techno/GitHub.png'
import Git from '../assets/techno/Git.png'
import VS from '../assets/techno/VS.png'
import Blender from '../assets/techno/Blender.png'
import Firebase from '../assets/techno/Firebase.png'
import NEKO from '../assets/companies/NEKO.png'
import GBA from '../assets/companies/GBA.png'
import GBAN from '../assets/companies/GBAN.png'

const Experience = () => {

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
    <section id='experiences' className="bg-gray-800 py-11 px-4 sm:px-6 lg:px-8 overflow-x-hidden">

        {/* skills */}
        <div className="max-w-7xl mx-auto">
            <h1 className="text-white text-center font-bold text-3xl my-10 mt-5 mb-4">Expériences</h1>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col-reverse items-center justify-center space-y-10 space-y-reverse lg:flex-row lg:space-y-0 lg:space-x-6">

            {/* Stack skills */}
            <div className='lg:w-1/3 fade-in grid grid-cols-4 gap-6 justify-items-center'>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-orange-400 cursor-pointer">
                    <img src={html} alt="" className='w-11 h-11 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">HTML</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-sky-400 cursor-pointer">
                    <img src={css} alt="" className='w-11 h-11 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">CSS</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-yellow-400 cursor-pointer">
                    <img src={js} alt="" className='w-11 h-11 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">JavaScript</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-sky-600 cursor-pointer">
                    <img src={react} alt="" className='w-11 h-11 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">React</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-green-600 cursor-pointer">
                    <img src={Vue} alt="" className='w-11 h-11 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">Vue.js</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-gray-600 cursor-pointer">
                    <img src={Figma} alt="" className='w-13 h-12 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">Figma</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-sky-700 cursor-pointer">
                    <img src={tailwind} alt="" className='w-11 h-11 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">Tailwind CSS</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-gray-900 cursor-pointer">
                    <img src={Photoshop} alt="" className='w-11 h-11 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">Photoshop</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-orange-700 cursor-pointer">
                    <img src={Illustrator} alt="" className='w-11 h-11 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">Illustrator</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-gray-100 cursor-pointer">
                    <img src={Capcut} alt="" className='w-11 h-11 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">Capcut</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-black/80 cursor-pointer">
                    <img src={Vercel} alt="" className='w-11 h-11 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">Vercel</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-gray-100 cursor-pointer">
                    <img src={GitHub} alt="" className='w-11 h-11 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">GitHub</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-red-400 cursor-pointer">
                    <img src={Git} alt="" className='w-11 h-11 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">Git</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-blue-300 cursor-pointer">
                    <img src={VS} alt="" className='w-11 h-11 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">VS Code</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-orange-400 cursor-pointer">
                    <img src={Blender} alt="" className='w-10 h-10 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">Blender</p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-orange-900 cursor-pointer">
                    <img src={Firebase} alt="" className='w-10 h-10 rounded-full' />
                    <p className="absolute text-white mt-25 text-xs">Firebase</p>
                </div>
            </div>

            {/* Experiences */}
            <div className='from-right mb-3 space-y-3'>
                <div className='flex bg-gray-900 text-sky-700 p-3 font-bold rounded-xl gap-3 hover:shadow-[0_4px_8px_rgba(19,145,230,0.3)] transition duration-500 ease-in-out x'>
                    <img src={NEKO} alt="" className='w-8 h-8'/>
                    <div>
                        <h5 className='leading-none'>Freelance - Designer Graphique Indépendant<br /> <span className='text-xs'>NEKOMONJI</span></h5>
                        <p className='text-xs text-white font-extralight mb-3'>2024 - Présent</p>
                        <ul>
                            <li className='text-white text-sm list-disc ml-2 mb-1 font-normal'>Conception d’identités visuelles et de supports imprimés pour particuliers et micro entreprises.</li>
                            <li className='text-white text-sm list-disc ml-2 mb-1 font-normal'> Gestion complète du cycle de création, de la commande à la livraison.</li>
                        </ul>
                    </div>
                </div>
                
                    <div className='flex bg-gray-900 text-sky-700 p-3 font-bold rounded-xl gap-3 hover:shadow-[0_4px_8px_rgba(19,145,230,0.3)] transition duration-500 ease-in-out xx'>
                    <img src={GBA} alt="" className='w-10 h-11'/>
                    <div>
                        <h5 className='leading-none'>Employé - Opérateur de Saisie & Infographe <br /> <span className='text-xs'>GROUPE BEN'K AUBINSSON</span></h5>
                        <p className='text-xs text-white font-extralight mb-3'>Juillet 2023 - Août 2025</p>
                        <ul>
                            <li className='text-white text-sm list-disc ml-2 mb-1 font-normal'>Saisie et mise en forme de documents administratifs et Bureautique.</li>
                            <li className='text-white text-sm list-disc ml-2 mb-1 font-normal'>Conception et réalisation de contenus numériques pour les activités de l’entreprise...</li>
                        </ul>
                    </div>
                </div>

                <div className='flex bg-gray-900 text-sky-700 p-3 font-bold rounded-xl gap-3 hover:shadow-[0_4px_8px_rgba(19,145,230,0.3)] transition duration-500 ease-in-out x'>
                    <img src={GBAN} alt="" className='w-10 h-11'/>
                    <div>
                        <h5 className='leading-none'>Stagiaire - Opérateur de Saisie<br /> <span className='text-xs'>GROUPE BEN'K AUBINSSON</span></h5>
                        <p className='text-xs text-white font-extralight mb-3'>Novembre 2022 - Avril 2023</p>
                        <ul>
                            <li className='text-white text-sm list-disc ml-2 mb-1 font-normal'>Saisie et mise en forme de documents à l’aide d’outils informatiques.</li>
                            <li className='text-white text-sm list-disc ml-2 mb-1 font-normal'>La vérification, le tri et le classement des documents à saisir.</li>
                            <li className='text-white text-sm list-disc ml-2 mb-1 font-normal'>Envoie et réception des mails, impression et photocopie de documents...</li>
                        </ul>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    </section>
    )
}

export default Experience