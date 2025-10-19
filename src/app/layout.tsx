import '@/shared/styles/antd.scss'
import '@/shared/styles/globals.scss'
import {AntdRegistry} from '@ant-design/nextjs-registry'
import {App, ConfigProvider} from 'antd'
import type {Metadata, Viewport} from 'next'

import {MainLayout} from '@/modules/dashboard/client/layouts/Main'
import {cushonPrimaryFont} from '@/modules/shared/fonts'
import {CSSProperties} from 'react'

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

const appCss: CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   height: '100%'
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" className={`${cushonPrimaryFont.variable}`}>
         <body>
            <AntdRegistry>
               <ConfigProvider>
                  <App style={appCss}>
                     <MainLayout>{children}</MainLayout>
                  </App>
               </ConfigProvider>
            </AntdRegistry>
         </body>
      </html>
   )
}
