import { Container, Section } from "@/components/craft"

export default function AboutUs() {
  return (
    <Section id="about-us">
      <Container className="grid gap-4 !pt-32">
        <h1 className="text-3xl lg:text-4xl font-semibold">About Us – P vs NP Solutions</h1>
        <p>
          At <b>P vs NP Solutions</b>, we’re the digital world’s answer to the problems most people don’t even know they have—until it’s too late. We specialize in **data retrieval**, **social-engineered penetration**, and **digital private eye services**, which is just a fancy way of saying we find what’s lost, uncover what’s hidden, and solve the puzzles others can’t (or won’t).
        </p>
        <p>
          Think of us as your tech-savvy, slightly mischievous allies in a world where data disappears, secrets get buried, and bad actors play dirty. Whether it’s tracking down critical files that vanished into the digital abyss, testing your systems by thinking like the sneakiest hackers out there, or quietly gathering intel when discretion is non-negotiable—we’ve got you covered.
        </p>
      </Container>
      <Container className="grid gap-4">
        <h1 className="text-2xl lg:text-3xl font-semibold">Why Us?</h1>
        <p>Because we’re not your average buttoned-up cybersecurity firm. We’re a team of problem solvers who thrive on challenges that make others sweat. The name **P vs NP** isn’t just a nerdy nod to computational theory—it’s our mindset. Some problems *should* be easy but aren’t. Others seem impossible until the right people dig in. That’s where we come in.</p>
        <p>We don’t rely on cookie-cutter solutions. Every case is different, so we adapt, improvise, and (when necessary) outsmart the competition. Need proof? Just ask the clients who thought their data was gone for good—until we proved them wrong.</p>
      </Container>
      <Container className="grid gap-4">
        <h1 className="text-2xl lg:text-3xl font-semibold">What We Do Best</h1>
        <ul className="grid gap-2">
          <li><p><b>Data Retrieval:</b> Deleted files, corrupted drives, or "accidentally" misplaced information? We recover what others can’t.</p></li>
          <li><p><b>Social-Engineered Penetration:</b> Hackers don’t play fair, so neither do we. We test your defenses by exploiting the weakest link—*human behavior*—before the wrong people do.</p></li>
          <li><p><b>Digital Private Eye:</b> Sometimes, you need answers without raising alarms. We operate quietly, efficiently, and without leaving a trace.</p></li>
        </ul>
      </Container>
      <Container className="grid gap-4">
        <h1 className="text-2xl lg:text-3xl font-semibold">Motto</h1>
        <p>We take our work seriously—just not ourselves. You won’t find stiff corporate jargon here, just straight talk and results. We’re the team you call when you need <b>clever solutions, not just technical ones</b>.</p>
        <p>So, if you’re up against a digital ghost, a security blind spot, or a mystery that needs solving, let’s chat. <b>P vs NP Solutions</b>—because some problems aren’t as hard as they seem when you know where to look.</p>
        <p>(And yes, we *do* like a good challenge. Try us.)</p>
      </Container>
    </Section>
  )
}
