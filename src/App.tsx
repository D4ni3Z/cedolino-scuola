import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[var(--sfondo-primaria)] text-[var(--colore-testo)] flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg border border-[var(--colore-bordo-box)] p-8">
        <h1 className="text-3xl font-bold text-[var(--colore-brand)] mb-4">
          Benvenuto nella Cedola Digitale 🎓
        </h1>
        <p className="mb-6 leading-relaxed">
          Questa è una pagina d’esempio che utilizza <strong>Tailwind CSS</strong> per il layout
          e <code>variabili CSS</code> per i colori personalizzati definiti nel tuo <code>App.css</code>.
        </p>
        <button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-scuro)] text-[var(--colore-testo)] font-semibold py-2 px-4 rounded transition">
          Inizia ora
        </button>
      </div>
    </div>
  )
}

export default App

