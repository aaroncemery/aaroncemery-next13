export const heroThemeColors = (color: string, type: string) => {
  switch (color) {
    case 'blue-500':
      switch (type) {
        case 'bg':
          return 'bg-blue-500'
        case 'text':
          return 'text-green-500'
        case 'button':
          return 'bg-green-500 text-blue-500 hover:bg-green-500'
      }
    case 'red-500':
      switch (type) {
        case 'bg':
          return 'bg-red-500'
        case 'text':
          return 'text-white'
        case 'button':
          return 'bg-white text-red-500 hover:text-white'
      }
    case 'purple-500':
      switch (type) {
        case 'bg':
          return 'bg-purple-500'
        case 'text':
          return 'text-yellow-500'
        case 'button':
          return 'bg-yellow-500 text-purple-500 border-yellow-500 hover:text-yellow-500'
      }
    case 'orange-500':
      switch (type) {
        case 'bg':
          return 'bg-orange-500'
        case 'text':
          return 'text-blue-500'
        case 'button':
          return 'bg-blue-500 text-orange-500 border-blue-500 hover:text-blue-500'
      }
    default:
      return 'bg-blue-500'
  }
}
