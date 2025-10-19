'use client'

import Button from 'antd/lib/button'
import Flex from 'antd/lib/flex'
import styles from './Header.module.scss'

import t from './Header.texts'
import {Logo} from '@/modules/shared/components/Logo'
import {Container} from '@/shared/components/Container'

export default function Header() {
   return (
      <header role="banner" className={styles.header}>
         <Container>
            <nav role="navigation" className={styles.navbar}>
            <Flex align="center" justify="space-between">
               <Logo width={200} height={57} />
               <Flex vertical gap={5}>
                  <Button aria-label={t.buttons.myInvestments}>{t.buttons.myInvestments}</Button>
                  <Button type="primary" aria-label={t.buttons.myProfile}>
                     {t.buttons.myProfile}
                  </Button>
               </Flex>
            </Flex>
         </nav>
         </Container>
      </header>
   )
}
