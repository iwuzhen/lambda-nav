export type ExternalPageCreate = {
  title: string
  abstract?: string | null
  description?: string | null
  public_url?: string | null
  private_url?: string | null
}


export type ExternalPage = {
  id: string
  title: string
  abstract?: string | null
  description?: string | null
  public_url?: string | null
  private_url?: string | null
  page_tags?: Array<PageTag>
}

export type ExternalPagesPublic = {
  data: Array<ExternalPage>
  count: number
}

export type PageTagCreate = {
  title: string
  description?: string | null
  weight?: number
  updated_at?: string
  created_at?: string
}

export type PageTag = {
  id: string
  title: string
  description?: string | null
  weight: number
  updated_at?: string
  created_at?: string
}

export type PageTags = {
  data: Array<PageTag>
  count: number
}