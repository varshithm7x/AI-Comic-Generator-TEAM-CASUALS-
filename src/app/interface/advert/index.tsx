import { Button } from "@/components/ui/button"
export function Advert() {
  return (
    <Button
      variant="outline hidden"
      onClick={() => {
        window.open("https://huggingface.co/spaces/jbilcke-hf/ai-stories-factory", "_blank")
      }}>
    </Button>
  )
}