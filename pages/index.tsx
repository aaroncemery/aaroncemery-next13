import { MainHero } from 'components/sections/hero'
import Nav from 'components/ui/nav'

export default function Index() {
  return (
    <>
      <Nav />
      <div className="space-y-6">
        <MainHero />
      </div>
    </>
  )
}
