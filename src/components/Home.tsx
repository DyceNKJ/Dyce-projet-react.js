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
      <div className="flex flex-col-reverse md:flex-row max-w-9xl mx-auto justify-center items-center md:px-[3%] sm:px-10 px-5 md:my-32 my-10">

        {/* TEXTE */}
        <div className="from-left flex flex-col">
          <h1 className="font-bold text-white text-center md:text-4xl md:text-left text-xl my-5">
            Bonjour,<br /> je suis <span className="text-sky-700">Claudyce Corneille</span>
          </h1>

          <p className="text-white mt-3 md:mt-0 text-center md:text-left">
            Développeur frontend & Designer <br /> avec 1 ans d'expérience, utilisant React, Vue <br />Photoshop, Figma... Contactez-moi si vous avez besoin de mes services
          </p>

          <a href='https://wa.me/064883655' className="animate-bounce mt-5 btn btn-sm rounded-sm bg-sky-700 hover:bg-sky-600 text-black p-2 font-bold cursor-pointer md:w-fit text-center">
            Contactez-moi
          </a>
        </div>

        {/* IMAGE */}
        <div className="zoom-in md:ml-60">
          <img
            src={moi}
            alt=""
            className="w-96 h-96 object-cover border-8 border-sky-700 shadow-xl hover:scale-105 hover:rotate-12 transition-transform duration-300"
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
