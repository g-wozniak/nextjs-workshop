'use server'

import {FundsService} from '@/dashboard/server/services/funds/funds.service'
import {Container} from '@/shared/components/Container'
import {Masthead} from '@/shared/components/Masthead'
import {Row} from 'antd/lib/grid'
import styles from './page.module.scss'

export default async function DashboardPage() {
   const fundService = new FundsService()
   const funds = await fundService.list()
   const performance = await fundService.listPerformance()
   return (
      <div className={styles.page}>
         <Masthead title="ISA dashboard" />
         <Container>
            <Row>
               {funds.map((f) => (
                  <div>{JSON.stringify(f)}</div>
               ))}
            </Row>
            <Row>
               {performance.map((p) => (
                  <div>{JSON.stringify(p)}</div>
               ))}
            </Row>
         </Container>
      </div>
   )
}
