import { createFileRoute } from "@tanstack/react-router"
import Request from './-components/Request'


export const Route = createFileRoute('/request-data-destruction')({
  component: DataDestruction,
})


function DataDestruction() {
  return (
    <Request />
  )
}
