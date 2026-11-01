export type Review = {
  quote: string
  name: string
  /** e.g. "Tech lead, Netcompany" */
  role: string
}

// Add real recommendations here; the reviews box shows a placeholder while this is empty.
export const reviews: Review[] = []
