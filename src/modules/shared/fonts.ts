import MuseoSansRounded from 'next/font/local'

export const cushonPrimaryFont = MuseoSansRounded({
   src: [
      {
         path: '../../../public/fonts/MuseoSansRounded300.woff',
         weight: '300',
         style: 'normal'
      },
      {
         path: '../../../public/fonts/MuseoSansRounded500.woff',
         weight: '500',
         style: 'normal'
      },
      {
         path: '../../../public/fonts/MuseoSansRounded700.woff',
         weight: '700',
         style: 'normal'
      }
   ],
   variable: '--font-primary',
   display: 'swap'
})
