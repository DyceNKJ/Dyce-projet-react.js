import { useEffect } from 'react'

const Footer = () => {

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
  <div className="bg-gray-900 text-center py-16  overflow-x-hidden">

    {/* LOGO */}
    <a href="#accueil" className="flex flex-col items-center gap-2 mb-5 zoom-in">
          <p className="text-sm font-bold text-white ">
            <span className="font">Claudy</span><span className="text-sky-700 accent text-2xl">Corne</span>
          </p>
        </a>

    {/* COPYRIGHT */}
    <p className="from-left text-white text-md leading-relaxed mb-5 px-2 break-words">
      ©{new Date().getFullYear()} Claudyce <span className="text-sky-700 font-bold">Corneille</span>. Tous droits réservés.
    </p>

    {/* RÉSEAUX */}
    <div className="from-right flex justify-center gap-4 mt-9 mb-6">
      <a
        href="https://wa.me/064883655" target="_blank"
        aria-label="Facebook"
        className="text-white text-3xl transition hover:text-sky-700 icon-hover"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      
      <a
        href="https://www.facebook.com/profile.php?id=61584962302104" target="_blank"
        aria-label="Facebook"
        className="text-white text-3xl transition hover:text-sky-700 icon-hover"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>

      <a
        href="https://x.com/DyceNKJ" target="_blank"
        aria-label="Twitter / X"
        className="text-white text-3xl transition hover:text-sky-700 icon-hover"
      >
        <i className="fa-brands fa-x-twitter"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/claudyce-salabanzi-01aa39394/" target="_blank"
        aria-label="LinkedIn"
        className="text-white text-3xl transition hover:text-sky-700 icon-hover"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>

  </div>
  )
}

export default Footer