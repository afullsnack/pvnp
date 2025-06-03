import {
  Database,
  HandCoins,
  Radar,
  Router,
  ScanEye,
  ShieldCheck,
} from 'lucide-react'
import { Container, Section } from '@/components/craft'
import { GridBackground } from '@/components/grid-background'
import { Card, CardContent } from '@/components/ui/card'

export default function Services() {
  return (
    <Section id="services" className="!pb-64 relative">
      <Container className="grid gap-4 !pt-32 !z-50">
        <h1 className="text-3xl lg:text-4xl font-semibold z-50">
          Our services
        </h1>
        <p className="z-50">
          Due to legal restrictions in some regions, we can’t publicly detail
          our full range of skills and capabilities—but don’t let that stop you.
          Shoot us an email or chat with our service agent below (they typically
          reply within the hour). Pro tip: Stay on the page while you wait—we
          don’t track cookies or store your info, because privacy isn’t just a
          policy here, it’s a principle.
        </p>

        <br />
        <br />
        <h4 className="text-xl font-medium z-50">
          Our services include but not limited to:
        </h4>
        <br />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 z-50">
          <li>
            <Card>
              <CardContent>
                <div className="grid gap-2">
                  <Database />
                  Cloud data services.
                </div>
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent>
                <div className="grid gap-2">
                  <ScanEye />
                  Private eye
                </div>
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent>
                <div className="grid gap-2">
                  <Router />
                  Server/account infiltration
                </div>
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent>
                <div className="grid gap-2">
                  <HandCoins />
                  Digital fund tracking and recovery
                </div>
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent>
                <div className="grid gap-2">
                  <Radar />
                  Spyware setup & detection
                </div>
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent>
                <div className="grid gap-2">
                  <ShieldCheck />
                  Cyber security setup and consultation
                </div>
              </CardContent>
            </Card>
          </li>
        </ul>
      </Container>
      <GridBackground />
    </Section>
  )
}
