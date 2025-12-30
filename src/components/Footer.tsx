const Footer = () => {
  return (
  <div className=" text-center py-3 mt-9 overflow-x-hidden">

    {/* LOGO */}
    <a
          href="#accueil"
          className="flex flex-col items-center gap-2 mb-5"
        >
          <p className="text-sm font-bold text-white break-words">
            <span className="fonte">Claudy</span><span className="text-sky-700 accent">Corne</span>
          </p>
        </a>

    {/* COPYRIGHT */}
    <p className="text-white text-md leading-relaxed mb-5 px-2 break-words">
      © 2025 Claudyce <span className="text-sky-700 font-bold">Corneille</span>. Tous droits réservés.
    </p>

    {/* RÉSEAUX */}
    <div className="flex justify-center gap-4 mt-9 mb-6">
      <a
        href="https://www.facebook.com/profile.php?id=61584962302104"
        aria-label="Facebook"
        className="text-white text-3xl transition hover:text-sky-700 icon-hover"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>

      <a
        href="https://x.com/DyceNKJ"
        aria-label="Twitter / X"
        className="text-white text-3xl transition hover:text-sky-700 icon-hover"
      >
        <i className="fa-brands fa-x-twitter"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/claudyce-salabanzi-01aa39394/"
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