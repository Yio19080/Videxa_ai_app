export default function Home() {
  const templates = Array.from({length: 20}, (_, i) => ({
    id: i, title: `Template ${i+1}`, category: "Trending"
  }))

  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold text-center">Videxa AI - 150 Template</h1>
      <p className="text-center mt-2">حول صورتك لفيديو AI</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {templates.map(t => (
          <div key={t.id} className="border rounded-xl p-2 hover:scale-105">
            <div className="bg-gray-800 h-40 rounded"></div>
            <p className="mt-2 font-bold">{t.title}</p>
            <button className="bg-purple-600 text-white w-full py-2 rounded mt-2">Use</button>
          </div>
        ))}
      </div>
    </main>
  )
}
