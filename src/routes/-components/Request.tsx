import { Container, Section } from "@/components/craft"
import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion"

export default function Request() {
  return (
    <Section id="request-data-destruction">
      <hr />
      <Container className="grid gap-4">
        <h1 className="text-3xl lg:text-4xl font-semibold">Steps to request data destruction</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="step-1">
            <AccordionTrigger>Step 1</AccordionTrigger>
            <AccordionContent>
              Contact data management team at
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="step-2">
            <AccordionTrigger>Step 2</AccordionTrigger>
            <AccordionContent>
              Wait for a response (usually within the hour) from an agent and provide the appropriate time stamps for review
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="step-3">
            <AccordionTrigger>Step 3</AccordionTrigger>
            <AccordionContent>
              Request will be processed and executed
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </Section>
  )
}
