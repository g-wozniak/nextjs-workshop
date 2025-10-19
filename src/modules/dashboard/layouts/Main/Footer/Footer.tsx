import styles from './Footer.module.scss'
import {Container} from '@/shared/components/Container'

export default function Footer() {
   return (
      <footer className={styles.footer} role="contentinfo" aria-label="Site footer">
         <Container>
            <p>
               <small>&copy; 2025 NatWest Cushon NextJS rendering workshop</small>
            </p>
         </Container>
      </footer>
   )
}
