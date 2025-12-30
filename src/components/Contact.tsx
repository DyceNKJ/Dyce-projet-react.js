import { useEffect } from "react"

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.25 }
    )

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      className="bg-gray-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      {/* TITRE */}
      <div className="max-w-5xl mx-auto text-center fade-in">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Parlons de votre projet
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-12">
          Une idée, une collaboration, un besoin précis ?  
          Écrivez-moi. Les bons projets commencent toujours par une conversation.
        </p>
      </div>

      {/* FORMULAIRE */}
      <form
        className="
          max-w-4xl mx-auto
          bg-gray-800
          p-6 sm:p-8 lg:p-10
          rounded-2xl
          shadow-xl
          fade-in
          space-y-6
        "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Nom
            </label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-sky-700 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="vous@email.com"
              className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-sky-700 transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Sujet
          </label>
          <input
            type="text"
            placeholder="Collaboration, site web, application…"
            className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-sky-700 transition"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Message
          </label>
          <textarea
            
            placeholder="Expliquez nous votre besoin"
            className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-sky-700 transition resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="
            w-full
            bg-sky-700
            text-gray-900
            font-semibold
            py-3 sm:py-4
            rounded-lg
            text-sm sm:text-base
            hover:bg-sky-900
            transition duration-300
            cursor-pointer
          "
        >
          Envoyer le message
        </button>
      </form>
    </section>
  )
}

export default Contact
