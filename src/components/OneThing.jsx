import { CustomButton } from './CustomButom'
export const OneThing = ({ thing, handleCompletedThing }) => {
  return (
    <>
      <h2 className="text-3xl sm:text-6xl font-bold text-center">{thing}</h2>
      <CustomButton
        handleCompletedThing={handleCompletedThing}
        text="Mark Done"
      />
    </>
  )
}
