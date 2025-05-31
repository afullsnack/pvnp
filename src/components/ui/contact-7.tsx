import { Copy, Mail, MapPin, Phone } from 'lucide-react'
import { useCallback } from 'react'
import { useTheme } from '@/components/theme-provider'

interface Contact7Props {
  title?: string
  description?: string
  emailLabel?: string
  emailDescription?: string
  email?: string
  officeLabel?: string
  officeDescription?: string
  officeAddress?: string
  sessionLabel?: string
  sessionMessengerDescription?: string
  sessionMessengerId?: string
}

export const Contact7 = ({
  title = 'Contact Us',
  description = 'Contact the support team at N vs NP Solutions.',
  emailLabel = 'Email',
  emailDescription = 'We respond within 24 hours.',
  email = 'Manitorx168@tutamail.com',
  // officeLabel = 'Office',
  // officeDescription = 'Drop by our office for a chat.',
  // officeAddress = '1 Eagle St, Brisbane, QLD, 4000',
  sessionLabel = 'Session',
  sessionMessengerDescription = 'Use the sassion messenger ID: ',
  sessionMessengerId = '05394cdf752f12dc42b7e5cbfe6588d4b512ec7dabb276a8e023ee79193210df1f',
}: Contact7Props) => {
  const copySessionId = useCallback(() => {
    navigator.clipboard.writeText(sessionMessengerId)
    alert('Session Messenger ID copied to clipboard')
  }, [sessionMessengerId])

  const { theme } = useTheme()

  return (
    <section className="bg-background py-32">
      <div className="container">
        <div className="mb-14">
          <h1 className="mt-2 mb-3 text-3xl lg:text-4xl font-semibold text-balance md:text-4xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="mb-3 text-muted-foreground">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline"
            >
              {email}
            </a>
          </div>
          {/* <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="mb-3 text-muted-foreground">{officeDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {officeAddress}
            </a>
          </div> */}
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              {/* <Phone className="h-6 w-auto" /> */}
              {theme === 'light' ? (
                <img
                  src="/session_icon_black.svg"
                  className="w-6 h-6 object-cover"
                />
              ) : (
                <img
                  src="/session_icon_white.svg"
                  className="w-6 h-6 object-cover"
                />
              )}
            </span>
            <p className="mb-2 text-lg font-semibold">
              <a href="https://getsession.org/" target="_blank">
                {sessionLabel}
              </a>
            </p>
            <p className="mb-3 text-muted-foreground">
              {sessionMessengerDescription}
            </p>
            <a
              href={`#`}
              className="font-semibold hover:underline flex gap-2 items-center justify-start"
              onClick={(e) => {
                e.preventDefault()
                copySessionId()
              }}
            >
              {sessionMessengerId.slice(0, 14)}...
              {sessionMessengerId.slice(-14)}
              <Copy className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
