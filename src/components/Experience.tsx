import { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import {blue} from '@mui/material/colors';
import html from '../assets/techno/html.png'
import css from '../assets/techno/css.png'
import js from '../assets/techno/js.png'
import react from '../assets/techno/react.png'
import Vue from '../assets/techno/Vue.ico'
import Figma from '../assets/techno/Figma.png'
import tailwind from '../assets/techno/tailwind.png'
import Photoshop from '../assets/techno/Photoshop.png'
import Illustrator from '../assets/techno/Illustrator.png'
import Pr from '../assets/techno/Pr.png'
import Xd from '../assets/techno/XD.png'
import Id from '../assets/techno/ID.webp'
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
import microsoft from '../assets/techno/microsoft.webp'

        const Experience = () => {

            const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
            <Tooltip {...props} arrow classes={{ popper: className }} />
            ))(({ theme }) => ({
            [`& .${tooltipClasses.arrow}`]: {
                color: blue[700],
            },
            [`& .${tooltipClasses.tooltip}`]: {
                backgroundColor: blue[700],
            },
            }));

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

                <div className="max-w-4xl mx-auto flex flex-col-reverse items-center justify-center space-y-10 space-y-reverse lg:flex-row lg:space-y-0 lg:space-x-6">

                {/* Stack skills */}
                <div className="flex flex-col">
                    <h1 className="fade-in text-white text-center font-bold text-3xl my-10 mt-5 mb-4 md:mr-12">Compétences</h1>
                <div className=' fade-in grid grid-cols-4 gap-6 justify-items-center lg:mb-9 lg:mr-10 xl:mr-10'>
            
                <BootstrapTooltip title="95%" arrow> 
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-orange-600 cursor-pointer">
                <img src={html} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">HTML</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="70%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-sky-600 cursor-pointer">
                <img src={css} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">CSS</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="45%" arrow> 
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-yellow-300 cursor-pointer">
                <img src={js} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">JavaScript</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="60%" arrow> 
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-sky-600 cursor-pointer">
                <img src={react} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">React</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="40%" arrow> 
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-green-600 cursor-pointer">
                <img src={Vue} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">Vue.js</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="85%" arrow> 
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-gray-700 cursor-pointer">
                <img src={Figma} alt="" className='w-13 h-12 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">Figma</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="90%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-sky-700 cursor-pointer">
                <img src={tailwind} alt="" className='w-12 h-8 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">Tailwind CSS</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="90%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-gray-900 cursor-pointer">
                <img src={Photoshop} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">Photoshop</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="60%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-orange-950 cursor-pointer">
                <img src={Illustrator} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">Illustrator</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="60%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-blue-950 cursor-pointer">
                <img src={Pr} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">Premiere Pro</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="85%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-pink-900 cursor-pointer">
                <img src={Xd} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">Adobe XD</p>
                </div>
                </BootstrapTooltip>
                
                <BootstrapTooltip title="70%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-pink-950 cursor-pointer">
                <img src={Id} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs whitespace-nowrap">Adobe ID</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="70%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-gray-100 cursor-pointer">
                <img src={Capcut} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">Capcut</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="70%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-black/80 cursor-pointer">
                <img src={Vercel} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">Vercel</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="80%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-gray-100 cursor-pointer">
                <img src={GitHub} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">GitHub</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="80%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-red-400 cursor-pointer">
                <img src={Git} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">Git</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="80%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-blue-300 cursor-pointer">
                <img src={VS} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">VS Code</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="60%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-orange-400 cursor-pointer">
                <img src={Blender} alt="" className='w-10 h-10 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">Blender</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="65%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-orange-900 cursor-pointer">
                <img src={Firebase} alt="" className='w-10 h-10 rounded-full' />
                <p className="absolute text-white mt-25 text-xs">Firebase</p>
                </div>
                </BootstrapTooltip>

                <BootstrapTooltip title="95%" arrow>
                <div className="w-16 h-16 rounded-full border-2 border-sky-700 items-center justify-center flex mb-4 hover:bg-gradient-to-tr from-orange-700 via-green-900  to-sky-600 cursor-pointer">
                <img src={microsoft} alt="" className='w-11 h-11 rounded-full' />
                <p className="absolute text-white mt-25 text-xs whitespace-nowrap">Microsoft Office</p>
                </div>
                </BootstrapTooltip>
            </div>
                </div>

                    
            {/* Experiences */}
            <div className='from-right mb-3 space-y-3'>

                    <h1 className="text-white text-center font-bold text-3xl mb-4">Expériences</h1>

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
                    <img src={GBA} alt="" className='w-10 h-11 rounded-md'/>
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
                    <img src={GBAN} alt="" className='w-10 h-11 rounded-md'/>
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