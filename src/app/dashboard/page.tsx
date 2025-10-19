'use server'

import {FundsSection} from '@/dashboard/server/components/Funds'
import {Container} from '@/shared/components/Container'
import {Masthead} from '@/shared/components/Masthead'
import {Spin} from 'antd'
import {Row} from 'antd/lib/grid'
import {Suspense} from 'react'
import styles from './page.module.scss'
import User from '@/dashboard/client/components/user/User'

export default async function DashboardPage() {
   return (
      <div className={styles.page}>
         <Masthead title="ISA dashboard" />
         <Container>
            <Row>
               <Suspense fallback={<Spin fullscreen={true} />}>
                  <FundsSection />
               </Suspense>
            </Row>
            <User/>
         </Container>
      </div>
   )
}
