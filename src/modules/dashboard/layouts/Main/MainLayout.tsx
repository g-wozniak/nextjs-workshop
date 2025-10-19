import {PropsWithChildren} from 'react'
import styles from './MainLayout.module.scss'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export function MainLayout({children}: PropsWithChildren) {
   return (
      <div className={styles.layout}>
         <Header />
         <main className={styles.main}>{children}</main>
         <Footer />
      </div>
   )
}
