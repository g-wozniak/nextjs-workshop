import '@/shared/styles/antd.scss'
import '@/shared/styles/globals.scss'
import type {Metadata, Viewport} from 'next'

import {MainLayout} from '@/modules/dashboard/client/layouts/Main'
import {cushonPrimaryFont} from '@/modules/shared/fonts'
import {QueryErrorResetBoundary} from '@tanstack/react-query'
import DesignSystemProvider from '@/shared/serviceProviders/DesignSystemProvider'
import {ReactQueryProvider} from '@/shared/serviceProviders/ReactQueryProvider'

export const metadata: Metadata = {
   title: 'NatWest Cushon',
   description: 'Invest in your future with NatWest Cushon ISA'
}

export const viewport: Viewport = {
   width: 'device-width',
   initialScale: 1,
   maximumScale: 1,
   userScalable: false
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" className={`${cushonPrimaryFont.variable}`}>
         <body>
            <ReactQueryProvider>
               <DesignSystemProvider>
                  <QueryErrorResetBoundary>
                     <MainLayout>{children}</MainLayout>
                  </QueryErrorResetBoundary>
               </DesignSystemProvider>
            </ReactQueryProvider>
         </body>
      </html>
   )
}
