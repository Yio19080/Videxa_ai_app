export default function Home() {
  const templates = Array.from({length: 20}, (_, i) => ({
    id: i, title: `Template ${i+1}`, category: "Trending"
  }))

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Videxa AI - 150 Template</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {templates.map(t => (
          <div key={t.id} className="border rounded-xl p-2">
            <div className="bg-gray-800 h-40 rounded"></div>
            <p className="mt-2">{t.title}</p>
            <button className="bg-purple-600 text-white w-full py-2 rounded mt-2">Use</button>
          </div>
        ))}
      </div>
    </div>
  )
}
