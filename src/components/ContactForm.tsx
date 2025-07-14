import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      // Itt lehetne integrálni pl. Formspree, Resend, Google Forms vagy saját backend API-t.
      // Demó: csak szimuláljuk a küldést.
      await new Promise((res) => setTimeout(res, 1200));
      setState("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setState("error");
    }
  }

  return (
    <section className="bg-ablakunio-blue/5 py-12 md:py-20" id="ajanlat">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-7 text-ablakunio-blue">
          Kérjen visszahívást vagy árajánlatot!
        </h2>
        <form
          className="bg-white rounded-lg shadow-lg p-6 grid gap-6"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-1 text-gray-700">
                Név*
                <input
                  required
                  type="text"
                  className="mt-1 w-full border rounded px-3 py-2"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </label>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-700">
                Email*
                <input
                  required
                  type="email"
                  className="mt-1 w-full border rounded px-3 py-2"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </label>
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Telefonszám*
              <input
                required
                type="tel"
                className="mt-1 w-full border rounded px-3 py-2"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              />
            </label>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Üzenet / Milyen ablakot vagy szolgáltatást keres?
              <textarea
                className="mt-1 w-full border rounded px-3 py-2 min-h-[88px]"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-ablakunio-blue text-white font-bold py-3 px-8 rounded shadow hover:bg-blue-700 transition disabled:opacity-60"
            disabled={state === "sending"}
          >
            {state === "sending" ? "Küldés..." : "Ajánlatot kérek"}
          </button>
          {state === "success" && (
            <div className="text-green-600 text-center font-semibold">
              Köszönjük! Hamarosan keresni fogjuk.
            </div>
          )}
          {state === "error" && (
            <div className="text-red-600 text-center font-semibold">
              Hiba történt a küldéskor, próbálja újra!
            </div>
          )}
        </form>
        <div className="mt-8 text-center text-gray-600 text-sm">
          <span className="block">Vagy hívjon minket: <b>+36 30 123 4567</b></span>
          <span className="block">E-mail: <b>info@ablakunio.com</b></span>
          <span className="block">Cím: Budapest, Példa utca 1.</span>
        </div>
      </div>
    </section>
  );
}