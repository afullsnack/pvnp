import {createFileRoute} from "@tanstack/react-router"
import Contact from './-components/Contact'


export const Route = createFileRoute('/contact')({
  component: ContactUs
})


function ContactUs() {
  return (
    <Contact />
  );
}
