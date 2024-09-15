import { Preset } from "../engine/presets"

export function getSystemPrompt({
  preset,
  // prompt,
  // existingPanelsTemplate,
  firstNextOrLast,
  maxNbPanels,
  nbPanelsToGenerate,
  // nbMaxNewTokens,
}: {
  preset: Preset
  // prompt: string
  // existingPanelsTemplate: string
  firstNextOrLast: string
  maxNbPanels: number
  nbPanelsToGenerate: number
  // nbMaxNewTokens: number
}) {
  return [
    `You are a writer specialized in ${preset.llmPrompt}`,
    `Please write detailed drawing instructions and short (2-3 sentences long) speeches and narrator captions for the ${firstNextOrLast} ${nbPanelsToGenerate} panels (out of ${maxNbPanels} in total) of a new story, but keep it open-ended (it will be continued and expanded later). Please make sure each of those ${nbPanelsToGenerate} panels include info about character gender, age, origin, clothes, colors, location, lights, etc. Speeches are the dialogues, so they MUST be written in 1st person style, and be short, eg a couple of short sentences. Only generate those ${nbPanelsToGenerate} panels, but take into account the fact the panels are part of a longer story (${maxNbPanels} panels long).`,
    `Give your response as a VALID JSON array like this: \`Array<{ panel: number; instructions: string; speech: string; caption: string; }>\`.`,
    // `Give your response as Markdown bullet points.`,
    `Be brief in the instructions, the speeches and the narrative captions of those ${nbPanelsToGenerate} panels, don't add your own comments. Write speeces in 1st person style, with intensity, humor etc. The speech must be captivating, smart, entertaining, usually a sentence or two. Be straight to the point, return JSON and never reply things like "Sure, I can.." etc. Reply using valid JSON!! Important: Write valid JSON!`
  ].filter(item => item).join("\n")
}