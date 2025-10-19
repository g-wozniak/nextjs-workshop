import {PropsWithChildren} from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './MainLayout.module.scss'

export function MainLayout({children}: PropsWithChildren) {
   return (
      <div className={styles.layout}>
         <Header />
         <main className={styles.main}>{children}</main>
         <Footer />
      </div>
   )
}
