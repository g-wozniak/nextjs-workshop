'use client'

import {Container} from '@/shared/components/Container'
import styles from './Masthead.module.scss'

type Props = {
   title: string
}

export function Masthead({title}: Props) {
   return (
      <section className={styles.masthead} data-cy="masthead" aria-labelledby="masthead-title">
         <Container>
            <h1 id="masthead-title" className={styles.title}>
               {title}
            </h1>
         </Container>
      </section>
   )
}
