import { useStore } from "@/app/store"
import { HuggingClap } from "@/components/icons/hugging-clap"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

export function Share() {
  const [isOpen, setOpen] = useState(false)
  const preset = useStore(s => s.preset)
  const prompt = useStore(s => s.prompt)
  const panelGenerationStatus = useStore(s => s.panelGenerationStatus)
  const allStatus = Object.values(panelGenerationStatus)
  const remainingImages = allStatus.reduce((acc, s) => (acc + (s ? 1 : 0)), 0)


  const handlePrint = () => {
    window.print()
  }

  const handleShare = async () => {

     
    const storyPrompt = (prompt.split("||")[1] || "")

    const storyPromptMd = storyPrompt ? `
#### Story prompt:
\`\`\`${storyPrompt}\`\`\`
` : ``

    const stylePrompt = (prompt.split("||")[0] || "")

    const stylePromptMd = stylePrompt ? `
#### Style/character prompt:
\`\`\`${stylePrompt}\`\`\`
` : ``

    const comicFileMd =
`### Comic:

Drag & drop your comic image (converted to JPG) here!
`

    const descriptionMd = `
${storyPromptMd}
${stylePromptMd}
#### Preset:
\`\`\`${preset.label}\`\`\`

${comicFileMd}`;

    // console.log("descriptionMd:", descriptionMd)

    const slicedStory = storyPrompt.slice(0, 77)

    const params = new URLSearchParams({
      title: `[Comic] ${
        slicedStory
      }${
        slicedStory !== storyPrompt ? '...' : ''
      }${
        stylePrompt ? `(${stylePrompt.slice(0, 77)
      })` : ''}`,
      description: descriptionMd,
      });
    const paramsStr = params.toString();
    window.open(`https://huggingface.co/spaces/jbilcke-hf/comic-factory/discussions/new?${paramsStr}`, '_blank');
  }
}