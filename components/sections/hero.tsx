import { heroThemeColors } from 'utils/themeSwitcher'

export const MainHero = () => {
  return (
    <div className="bg-blue-500 py-4 h-screen max-h-[1000px]">
      <div className="container mx-auto px-4 h-full">
        <div className="grid items-center h-full">
          <div>
            <div className="pb-4">
              <div className="text-green-500 font-mono text-4xl">be.</div>
              <div className="text-green-500 font-mono text-4xl">visible.</div>
            </div>
            <button className="rounded-md bg-green-500 text-blue-500 py-3 px-10 font-mono hover:bg-green-500">
              inquire
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface PageHeroProps {
  titleOne: string
  titleTwo: string
  backgroundColor?: 'blue-500' | 'red-500' | 'purple-500' | 'orange-500'
}

export const PageHero = ({
  titleOne,
  titleTwo,
  backgroundColor = 'blue-500',
}: PageHeroProps) => {
  return (
    <div
      className={`${heroThemeColors(
        backgroundColor,
        'bg',
      )} py-4 h-screen max-h-[1000px]`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="grid items-center h-full">
          <div>
            <div className="pb-4">
              <div
                className={`${heroThemeColors(
                  backgroundColor,
                  'text',
                )} font-mono text-4xl`}
              >
                {titleOne}
              </div>
              <div
                className={`${heroThemeColors(
                  backgroundColor,
                  'text',
                )} font-mono text-4xl`}
              >
                {titleTwo}
              </div>
            </div>
            <button
              className={`rounded-md py-3 px-10 font-mono ${heroThemeColors(
                backgroundColor,
                'button',
              )}`}
            >
              inquire
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
