import { useState } from 'react'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'
const App = () => {
  const [thing, setThing] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    setThing(e.target.value)
  }

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        <h1 className="text-3xl sm:text-6xl font-bold text-center">
          What is your &quot;One Thing&quot;?
        </h1>
        <form
          className="flex ring-4 rounded-md ring-slate-200 dark:ring-slate-800 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800"
          onSubmit={handleSubmit}
        >
          <input
            autoFocus
            className="bg-inherit rounded-md font-sans text-slate-800 py-2 px-6 focus:outline-none text-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600 appearance-none w-full"
            maxLength="64"
            placeholder="Enter one thing"
            type="text"
            value={thing}
            onChange={handleChange}
          />
          <button className="bg-inherit rounded-md font-sans text-slate-800 py-2 pr-6 focus:outline-none focus:text-teal-600 hover:text-teal-600">
            <ArrowCircleRightIcon className="h-12 w-12" />
          </button>
        </form>
      </div>
    </main>
  )
}

export default App
