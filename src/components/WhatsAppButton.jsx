export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94725879636?text=Hello%20Lanka%20360,%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:bg-emerald-600 hover:scale-110 transition z-40"
    >
      <i className="fab fa-whatsapp" />
    </a>
  );
}