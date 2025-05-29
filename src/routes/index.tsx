import { createFileRoute } from '@tanstack/react-router'
import AboutUs from './-components/AboutUs'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <AboutUs />
    </>
  )
}
