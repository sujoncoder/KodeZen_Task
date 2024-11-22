import Tabs from "./components/Tabs"

const App = () => {
  return (
    <section className="flex justify-center items-center py-16">
      <div className="w-[600px] border-2 rounded-md p-6">
        <h2 className="text-2xl font-semibold text-slate-500 border-b-2 pb-4">Design System</h2>

        {/* HERE TABS COMPONENTS */}
        <Tabs />
      </div>

    </section>
  )
}

export default App