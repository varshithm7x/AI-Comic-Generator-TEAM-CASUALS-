"use client"

import { useEffect, useRef } from "react"

import { allLayoutAspectRatios, allLayouts } from "@/app/layouts"
import { useStore } from "@/app/store"
import { cn } from "@/lib/utils"

export function Page({ page }: { page: number }) {
  const zoomLevel = useStore(s => s.zoomLevel)
  const layouts = useStore(s => s.layouts)

  // attention: here we use a fallback to layouts[0]
  // if no predetermined layout exists for this page number
  const layout = layouts[page] || layouts[0]

  const LayoutElement = (allLayouts as any)[layout]
  const aspectRatio = ((allLayoutAspectRatios as any)[layout] as string) || "aspect-[250/297]"

  const currentNbPages = useStore(s => s.currentNbPages)
  const maxNbPages = useStore(s => s.maxNbPages)
  const currentNbPanelsPerPage = useStore(s => s.currentNbPanelsPerPage)

  // in the future, different layouts might have different numbers of panels
  const allLayoutsNbPanels = {
    Layout0: currentNbPanelsPerPage,
    Layout1: currentNbPanelsPerPage,
    Layout2: currentNbPanelsPerPage,
    Layout3: currentNbPanelsPerPage,
    // Layout4: currentNbPanelsPerPage
  }

  
  const panelsPerPage = ((allLayoutsNbPanels as any)[layout] as number) || currentNbPanelsPerPage




  return (
    <div
      // deprecated
      // ref={pageRef}
      className={cn(
        `w-full`,
        `print:w-screen`,
        `print:break-after-all`,
        
        )}
      style={{
        padding: `${Math.round((zoomLevel / 100) * 16)}px`
        // marginLeft: `${zoomLevel > 100 ? `100`}`
      }}
      >
      <div
      className={cn(
        aspectRatio,
        `transition-all duration-100 ease-in-out`,
        `border border-stone-200`,
        `shadow-2xl`,
        `print:shadow-none`,
        `print:border-0`,
      )}
      style={{
        padding: `${Math.round((zoomLevel / 100) * 16)}px`
        // marginLeft: `${zoomLevel > 100 ? `100`}`
      }}
      >
       <LayoutElement page={page} nbPanels={panelsPerPage} />
      </div>
      {currentNbPages > 1 &&
        <p className="w-full text-center pt-4 font-sans text-2xs font-semibold text-stone-600">
          {page + 1}/{maxNbPages}
          
        </p>}
    </div>
  )
}