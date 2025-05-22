import { Container, Section } from "@/components/craft"
import { Contact7 } from "@/components/ui/contact-7"

export default function Contact() {
  return (
    <Section id="contact" className="!pb-64">
      <Container className="grid gap-4 !pt-32">
        {/*<h1 className="text-3xl lg:text-4xl font-semibold">Contact Us</h1>*/}
        <Contact7 />
      </Container>
    </Section>
  )
}
