// checked
import { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "@/components/ui/dialog"

import { Login } from "../login"

const APP_NAME = `AI Comic Factory`
const APP_DOMAIN = `aicomicfactory.app`
const APP_URL = `https://aicomicfactory.app`
const APP_VERSION = `1.6`
const APP_RELEASE_DATE = `August 2024`

const ExternalLink = ({ url, children }: { url: string; children: ReactNode }) => {
  return (
    <a
      className="text-stone-600 underline"
      href={url}
      target="_blank">{children}</a>
  )
}

export function About() {
  return (
    <Dialog open={false}>
      {/*<Button variant="outline hidden" disabled>*/}
        {/*<span className="hidden md:hidden"></span>*/}
        {/*<span className="inline md:hidden"></span>*/}
      {/*</Button>*/}
      <DialogContent className="w-full sm:max-w-[500px] md:max-w-[600px] overflow-y-scroll h-[100vh] sm:h-[550px]">
        <DialogHeader>
          <DialogDescription className="w-full text-center text-2xl font-bold text-stone-700">
            <ExternalLink url={APP_URL}>{APP_DOMAIN}</ExternalLink> {APP_VERSION} ({APP_RELEASE_DATE})
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-stone-700 text-sm md:text-base xl:text-lg">
          <p className="">
            {APP_DOMAIN} generates stories using AI in a few clicks.
          </p>
          <p><Login />
          </p>
          <p>
          <ExternalLink url="https://discord.com/invite/AEruz9B92B"></ExternalLink>
          </p>
        </div>
        <DialogFooter>
          <Button type="submit"></Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
