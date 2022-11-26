type Item = {
  name: string
  items: {
    name: string
    slug: string
    description?: string
    titleOne?: string
    titleTwo?: string
    backgroundColor?: string
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
        titleOne: 'be.',
        titleTwo: 'different.',
        backgroundColor: 'purple-500',
      },
      {
        name: 'code.',
        slug: 'code',
        description: 'Organize routes without affecting URL paths',
        titleOne: 'be.',
        titleTwo: 'smart.',
        backgroundColor: 'orange-500',
      },
      {
        name: 'write.',
        slug: 'write',
        description:
          'Streaming data fetching from the server with React Suspense',
        titleOne: 'be.',
        titleTwo: 'heard.',
        backgroundColor: 'red-500',
      },
      // {
      //   name: 'regarding.',
      //   slug: 'regarding',
      //   description: 'Create top-level layouts that apply to all routes',
      //   isDisabled: true,
      // },
    ],
  },
]
