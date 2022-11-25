type Item = {
  name: string
  items: {
    name: string
    slug: string
    description?: string
    isDisabled?: boolean
  }[]
}

export const pages: Item[] = [
  {
    name: 'Pages',
    items: [
      {
        name: 'design.',
        slug: 'design',
        description: 'Stuff about me',
      },
      {
        name: 'code.',
        slug: 'code',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'write.',
        slug: 'write',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
      {
        name: 'regarding.',
        slug: 'regarding',
        description: 'Create top-level layouts that apply to all routes',
        isDisabled: true,
      },
    ],
  },
]
