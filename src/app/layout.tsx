import { type Metadata } from 'next'
import glob from 'fast-glob'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { type Section } from '@/components/SectionProvider'

import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'
import { CSPostHogProvider } from '@/components/monitoring/posthog'

export const metadata: Metadata = {
  title: {
    template: '%s - PyVISA',
    default: 'PyVISA',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <CSPostHogProvider>
        <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
          <Providers>
            <div className="w-full">
              <Analytics />
              <Layout allSections={allSections}>{children}</Layout>
            </div>
          </Providers>
        </body>
      </CSPostHogProvider>
    </html>
  )
}
