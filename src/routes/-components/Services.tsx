
import { Container, Section } from "@/components/craft"

export default function Services() {
  return (
    <Section id="services">
      <hr />
      <Container className="grid gap-4 !pt-32">
        <h1 className="text-3xl lg:text-4xl font-semibold">Our services</h1>
        <p>
          Due to legal restrictions in some regions, we can’t publicly detail our full range of skills and capabilities—but don’t let that stop you. Shoot us an email or chat with our service agent below (they typically reply within the hour). Pro tip: Stay on the page while you wait—we don’t track cookies or store your info, because privacy isn’t just a policy here, it’s a principle.
        </p>
      </Container>
    </Section>
  )
}
