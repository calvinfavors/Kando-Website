import type { Metadata } from "next"
import Week1ChecklistClient from "./Week1ChecklistClient"

export const metadata: Metadata = {
  title: "Week 1 Checklist: Laundry Room | Spring Clean with Kando Homes",
  description: "Download or print your Week 1 Laundry Room checklist for the Spring Clean with Kando Homes challenge.",
}

export default function Week1ChecklistPage() {
  return <Week1ChecklistClient />
}
