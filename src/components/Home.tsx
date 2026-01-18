import { useEffect } from 'react'
import moi from '../assets/moi.jpg'

const Home = () => {

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

    const elements = document.querySelectorAll('.from-left, .zoom-in')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="accueil" className="scroll-mt-20 md:py-0 py-25 overflow-x-hidden">
      <div className="flex flex-col-reverse md:flex-row max-w-9xl mx-auto justify-center items-center md:px-9 sm:px-10 px-5 md:my-32 my-10">

        {/* TEXTE */}
        <div className="from-left flex flex-col">
          <h1 className="font-bold text-white text-center md:text-3xl md:text-left text-xl my-5">
            Je m'appelle<br /><span className="text-sky-700">Claudyce Corneille</span>
          </h1>

          <p className="text-white mt-3 md:mt-0 text-center md:text-left whitespace-nowrap">
            Développeur frontend & Designer <br /> avec 1 ans d'expérience, utilisant React.js, Vue.js <br />Photoshop, Figma... <br />
            <span className="">Je transforme des idées en réalisations concrètes, <br />qu’il s’agisse d’un site web, d’une identité visuelle.</span>
          </p>

          <p className='mt-4 text-white text-center md:text-left'>Contactez-moi si vous avez besoin de mes services</p>

          <div className="flex flex-wrap gap-4 mx-auto md:mx-0">

          <div className="flex gap-2 rounded-sm md:w-fit bg-sky-700 hover:bg-sky-600 p-3 mt-2 hover:scale-110 transition-all duration-700 cursor-pointer text-sm lg:text-md">
          <i className="fa-solid fa-download mt-1 text-white"></i>
          <a href='/cv-claudyce-francais.pdf'
          download="cv-claudyce-francais.pdf"
          className="text-white font-bold">
          Télécharger mon CV
          </a>
          </div>

          <div className="flex gap-2 rounded-sm md:w-fit bg-sky-700 hover:bg-sky-600 p-3 mt-2 hover:scale-110 transition-all duration-700 cursor-pointer text-sm lg:text-md">
          <i className="fa-solid fa-comment-dots mt-1 text-white"></i>
          <a href='https://wa.me/064883655' target="_blank"
          className="text-white font-bold">
          Me contacter
          </a>
          </div>

          </div>
          </div>

        {/* IMAGE */}
        <div className="zoom-in md:ml-10 lg:ml-60 xl:ml-100">
          <img
            src={moi}
            alt=""
            className="w-96 h-96 object-cover border-8 border-sky-700 hover:border-sky-600 shadow-xl hover:scale-105 hover:rotate-12 transition-transform duration-1000 opacity-65"
            style={{
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            }}
          />
        </div>

      </div>
    </section>
  )
}

export default Home
