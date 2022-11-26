import { MainHero } from 'components/sections/hero'
import { NextSeo } from 'next-seo'
import Nav from 'components/ui/nav'

export default function Index() {
  return (
    <>
      <NextSeo
        title="be. different"
        description="bad_raccoon is a web development agency that helps you build your brand and grow your business."
        titleTemplate="%s | bad_raccoon"
      />
      <Nav />
      <div className="space-y-6">
        <MainHero />
      </div>
    </>
  )
}
