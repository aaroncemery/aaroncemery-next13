import Nav from 'components/ui/nav'
import { GetStaticProps } from 'next'
import { PageHero } from 'components/sections/hero'
import { pages } from 'lib/globals'
import { ParsedUrlQuery } from 'querystring'

interface PageProps {
  titleOne: string
  titleTwo: string
  backgroundColor: 'blue-500' | 'red-500' | 'purple-500' | 'orange-500'
}

export default function Page({
  titleOne,
  titleTwo,
  backgroundColor,
}: PageProps) {
  return (
    <>
      <Nav />
      <div className="space-y-6">
        <PageHero
          titleOne={titleOne}
          titleTwo={titleTwo}
          backgroundColor={backgroundColor}
        />
      </div>
    </>
  )
}

interface IParams extends ParsedUrlQuery {
  page: string
}

export const getStaticPaths = async () => {
  const paths = pages[0].items.map((page) => ({
    params: { page: page.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { page } = context.params as IParams

  const pageData = pages[0].items.find((item) => item.slug === page)

  return {
    props: {
      titleOne: pageData ? pageData.titleOne : 'be.',
      titleTwo: pageData ? pageData.titleTwo : 'visible.',
      backgroundColor: pageData ? pageData.backgroundColor : 'blue-500',
    },
  }
}
