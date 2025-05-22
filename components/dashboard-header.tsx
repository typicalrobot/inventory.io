export default function DashboardHeader() {
  return (
    <header className="retro-header border-b-2 border-black py-4">
      <div className="flex flex-col justify-center items-center px-4 md:px-6">
        <div className="bg-gray-800 px-6 py-2 border-4 border-t-white border-l-white border-b-gray-600 border-r-gray-600 shadow-md">
          <h1 className="text-2xl font-bold font-mono tracking-tight text-center bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            inventory.io
          </h1>
        </div>
        <p className="text-sm mt-3 font-mono text-white font-bold">Manage and monitor your product inventory</p>
      </div>
    </header>
  )
}
