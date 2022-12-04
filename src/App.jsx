import { useState } from 'react'
import JSConfetti from 'js-confetti'

import { CustomForm } from './components/CustomForm'
import { OneThing } from './components/OneThing'

const jsConfetti = new JSConfetti()

const getSuccessMessage = () => {
  const messages = [
    'Congrats!',
    'Great Job!',
    'Don&#39;t ya feel great?!',
    'Up,up and up!',
    'Um...Okay',
    'Did you though?',
    'Don&#39;t feel like you tried your best...',
    'Forget about it!',
  ]

  return messages[Math.floor(Math.random() * messages.length)]
}

const App = () => {
  const [thing, setThing] = useState('')
  const [isCompleted, setIsCompleted] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsCompleted(false)
  }
  const handleChange = (e) => {
    setThing(e.target.value)
  }

  const handleCompletedThing = async (e) => {
    e.target.setAttribute('disabled', true)
    setThing(getSuccessMessage())
    await jsConfetti.addConfetti()
    e.target.removeAttribute('disabled')
    setThing('')
    setIsCompleted(true)
  }

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted && (
          <CustomForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            thing={thing}
          />
        )}
        {!isCompleted && (
          <OneThing handleCompletedThing={handleCompletedThing} thing={thing} />
        )}
      </div>
    </main>
  )
}

export default App
