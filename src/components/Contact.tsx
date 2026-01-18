import { useState, useRef, useMemo, useEffect } from "react";
import emailjs from "@emailjs/browser";
import countries from "../data/countries.json";

type Country = {
  code: string;
  name: string;
  dial: string;
  example: string;
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  // ======================
  // Champs contrôlés
  // ======================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // ======================
  // Dropdown pays
  // ======================
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");

  const [selectedCountry, setSelectedCountry] = useState<Country>(
    countries.find((c: Country) => c.code === "CG") as Country
  );

  const filteredCountries = useMemo(() => {
    return countries.filter(
      (c: Country) =>
        c.code.toLowerCase().includes(search.toLowerCase()) ||
        c.dial.includes(search)
    );
  }, [search]);

  const selectCountry = (country: Country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
    setSearch("");
  };

  // ======================
  // INIT EMAILJS
  // ======================
  useEffect(() => {
    emailjs.init("6Ef4lFaK4TBqL-TJ7");
  }, []);

  // ======================
  // Mettre à jour le hidden phone
  // ======================
  useEffect(() => {
    if (formRef.current) {
      const hiddenPhone = formRef.current.querySelector<HTMLInputElement>(
        'input[name="phone"]'
      );
      if (hiddenPhone) hiddenPhone.value = `${selectedCountry.dial} ${phone}`;

      const hiddenName = formRef.current.querySelector<HTMLInputElement>(
        'input[name="name"]'
      );
      if (hiddenName) hiddenName.value = name;

      const hiddenEmail = formRef.current.querySelector<HTMLInputElement>(
        'input[name="email"]'
      );
      if (hiddenEmail) hiddenEmail.value = email;

      const hiddenSubject = formRef.current.querySelector<HTMLInputElement>(
        'input[name="subject"]'
      );
      if (hiddenSubject) hiddenSubject.value = subject;

      const hiddenMessage = formRef.current.querySelector<HTMLTextAreaElement>(
        'textarea[name="message"]'
      );
      if (hiddenMessage) hiddenMessage.value = message;
    }
  }, [name, email, phone, subject, message, selectedCountry]);

  // ======================
  // ENVOI EMAIL
  // ======================
  const sendEmail = async () => {
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_rjvypi5",
        "template_4els3k8",
        formRef.current
      );

      alert("Message envoyé avec succès ✅");

      // Reset tous les champs
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      formRef.current.reset();
    } catch (error: any) {
      console.error("Erreur EmailJS :", error.text || error);
      alert(`Erreur lors de l’envoi ❌ : ${error.text || error}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail();
  };

  // ======================
  // ANIMATION FADE-IN
  // ======================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="bg-gray-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      <div className="max-w-5xl mx-auto text-center fade-in">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Parlons de votre projet
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-12">
          Une idée, une collaboration, un besoin précis ? Écrivez-moi.
          Les bons projets commencent toujours par une conversation.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl fade-in space-y-6"
      >
        {/* CHAMPS VISIBLES */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Nom</label>
          <input
            type="text"
            placeholder="Nom complet"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="claudycornesala@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3"
            />
          </div>

          {/* PHONE */}
          <div className="relative">
            <label className="block text-sm text-gray-300 mb-1">
              Numéro de téléphone
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-24 rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3 flex justify-between"
              >
                {selectedCountry.dial}
                <span className="text-xs mt-1">▾</span>
              </button>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={selectedCountry.example}
                className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3"
              />
            </div>

            {showDropdown && (
              <div className="absolute z-50 mt-2 w-35 bg-gray-800 rounded-xl p-2 border border-gray-700">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="CG / +242"
                  className="w-full mb-2 rounded-lg bg-gray-900 border border-gray-700 text-white px-3 py-2"
                />
                <ul className="max-h-48 overflow-y-auto">
                  {filteredCountries.map((country: Country) => (
                    <li
                      key={country.code}
                      onClick={() => selectCountry(country)}
                      className="w-full px-3 py-2 cursor-pointer hover:bg-gray-700 rounded flex justify-between"
                    >
                      <span>{country.code}</span>
                      <span>{country.dial}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* SUJET */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Sujet</label>
          <input
            type="text"
            placeholder="Collaboration, site web, application..."
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Message</label>
          <textarea
            placeholder="Décrivez votre demande..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-700 text-gray-900 font-semibold py-3 rounded-lg hover:bg-sky-900 transition cursor-pointer"
        >
          Envoyer
        </button>

        {/* HIDDEN INPUTS POUR EMAILJS */}
        <input type="hidden" name="name" value={name} />
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="phone" value={`${selectedCountry.dial} ${phone}`} />
        <input type="hidden" name="subject" value={subject} />
        <textarea name="message" style={{ display: "none" }} value={message} readOnly />
      </form>
    </section>
  );
};

export default Contact;
