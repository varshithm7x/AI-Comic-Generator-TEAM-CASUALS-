// checked....
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { Login } from "../login"
import { SettingsDialog } from "../settings-dialog"

export function AuthWall({ show }: { show: boolean }) {
  return (
    <Dialog open={show}>
    </Dialog>
  )
}