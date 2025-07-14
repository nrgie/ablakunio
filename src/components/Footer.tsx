export default function Footer() {
  return (
    <footer className="bg-ablakunio-blue text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left text-sm">
          <span className="font-bold text-lg">AblakUnio Kft.</span><br />
          <span>© {new Date().getFullYear()} Minden jog fenntartva.</span><br />
          <span>Adószám: 12345678-2-42 • Cégjegyzék: 01-09-999999</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-3">
            <a href="mailto:info@ablakunio.com" className="hover:underline">info@ablakunio.com</a>
            <span>|</span>
            <a href="tel:+36301234567" className="hover:underline">+36 30 123 4567</a>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com/ablakunio" target="_blank" rel="noopener" aria-label="Facebook">
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.877h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/></svg>
            </a>
            <a href="https://instagram.com/ablakunio" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.415.582.228 1 .499 1.44.938.44.44.71.858.938 1.44.175.457.36 1.257.415 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.415 2.427-.228.582-.499 1-.938 1.44-.44.44-.858.71-1.44.938-.457.175-1.257.36-2.427.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.415-.582-.228-1-.499-1.44-.938-.44-.44-.71-.858-.938-1.44-.175-.457-.36-1.257-.415-2.427C2.175 15.797 2.163 15.417 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.415-2.427.228-.582.499-1 .938-1.44.44-.44.858-.71 1.44-.938.457-.175 1.257-.36 2.427-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.053.07 5.78.126 4.73.326 3.872.634 3.005.943 2.36 1.427 1.634 2.153.907 2.88.423 3.525.114 4.392-.194 5.26-.394 6.31-.45 7.583-.507 8.862-.52 9.266-.52 12c0 2.734.013 3.138.07 4.417.056 1.273.256 2.323.564 3.19.309.867.793 1.512 1.519 2.238.726.727 1.371 1.211 2.238 1.519.867.308 1.917.508 3.19.564C8.862 23.493 9.266 23.507 12 23.507c2.734 0 3.138-.013 4.417-.07 1.273-.056 2.323-.256 3.19-.564.867-.309 1.512-.793 2.238-1.519.727-.726 1.211-1.371 1.519-2.238.308-.867.508-1.917.564-3.19.057-1.279.07-1.683.07-4.417 0-2.734-.013-3.138-.07-4.417-.056-1.273-.256-2.323-.564-3.19-.309-.867-.793-1.512-1.519-2.238-.726-.727-1.371-1.211-2.238-1.519-.867-.308-1.917-.508-3.19-.564C15.138.013 14.734 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
          <a href="/impresszum" className="text-xs underline hover:text-ablakunio-yellow mt-2">Impresszum & Adatvédelem</a>
        </div>
      </div>
    </footer>
  );
}