import { createFileRoute } from '@tanstack/react-router'
import AboutUs from './-components/AboutUs'
import Services from './-components/Services'
import Contact from './-components/Contact'
import Request from './-components/Request'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <AboutUs />
      <Services />
      <Contact />
      <Request />
    </>
  )
}
