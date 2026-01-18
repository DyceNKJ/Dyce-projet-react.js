import { useEffect } from 'react'
import moii from '../assets/moii.jpg'

const About = () => {
      useEffect(() => {
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible')
              }
            })
          },
          { threshold: 0.3 }
        )
    
        const elements = document.querySelectorAll('.from-left, .from-down')
        elements.forEach(el => observer.observe(el))
    
        return () => observer.disconnect()
      }, [])
    
  return (
<section id="profil" className="bg-gray-900 overflow-x-hidden">
        <div className="max-w-4xl mx-auto md:px-[6%] sm:px-10 px-5 py-10 items-center">
        <h1 className="text-white text-center font-bold text-3xl my-10 mt-5 mb-20">A propos de moi</h1>

        <div className="flex flex-col md:flex-row items-start space-x-5 gap-y-9">
        <div className="from-left md:mr-4 mx-auto md:mx-6 flex-shrink-0">
            <img src={moii} alt="" className="w-80 h-106 object-cover rounded-2xl hover:scale-105 hover:shadow-[0_0_4px_4px_rgba(19,145,230,0.3)] transition-all duration-700 opacity-65" />
        </div>

        <div className="from-down flex-col space-y-5 lg:mt-10 md:mt-0">
            <div className='flex bg-gray-800 text-white p-3 font-bold rounded-xl gap-3 hover:shadow-[0_4px_8px_rgba(19,145,230,0.3)] transition duration-500 ease-in-out hover:-translate-y-3'>
            <i className="fas fa-code mt-7 text-2xl text-sky-700"></i>
            <p className="mb-2">
                Développeur Frontend< br />
                <span className="font-normal">Je suis un développeur frontend, présent pour concevoir vos site internet.</span>
            </p>
            </div>

            <div className="flex bg-gray-800 text-white p-3 font-bold rounded-xl gap-3 hover:shadow-[0_4px_8px_rgba(19,145,230,0.3)] transition duration-500 ease-in-out hover:-translate-y-3">
                <i className="fas fa-wand-magic-sparkles mt-7 text-2xl text-sky-700"></i>
                <p className="mb-2">
                Designer< br />
                <span className="font-normal">Je maitrise les outils du Design pour concevoir vos identités visuelles.</span>
            </p>
            </div>
            
            <div className="flex bg-gray-800 shadow-md text-white p-3 font-bold rounded-xl gap-3 hover:shadow-[0_4px_8px_rgba(19,145,230,0.3)] transition duration-500 ease-in-out hover:-translate-y-3">
                <i className="fas fa-layer-group mt-7 text-2xl text-sky-700"></i>
                <p className="mb-2">
                UI/UX Designer< br />
                <span className="font-normal">Créer des interfaces utilisateurs attrayantes et fonctionnelles est ma priorité.</span>
            </p>
            </div>

        </div>
        </div>

    </div>
</section>
  )
}

export default About