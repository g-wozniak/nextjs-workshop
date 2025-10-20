import {GoalsOverview} from '@/dashboard/client/components/GoalsOverview'
import {LatestInvestmentsList} from '@/dashboard/client/components/LatestInvestmentsList'
import {LatestTransfer} from '@/dashboard/client/components/LatestTransfer'
import {PopularFundsList} from '@/dashboard/client/components/PopularFunds'
import {TopPerformingFundsList} from '@/dashboard/client/components/TopPerformingFunds'
import {TransfersList} from '@/dashboard/client/components/TransfersList'
import {FundsSection} from '@/dashboard/server/components/Funds'
import {FundsService} from '@/dashboard/server/services/funds/funds.service'
import {GoalsService} from '@/dashboard/server/services/goals/goals.service'
import {InvestmentsService} from '@/dashboard/server/services/investments/investments.service'
import {TransfersService} from '@/dashboard/server/services/transfers/transfers.service'
import {Container} from '@/shared/components/Container'
import {Masthead} from '@/shared/components/Masthead'
import {Col, Spin} from 'antd'
import Flex from 'antd/lib/flex'
import {Row} from 'antd/lib/grid'
import {Suspense} from 'react'
import styles from './page.module.scss'

export default async function DashboardPage() {
   const fundsService = new FundsService()
   const investmentsService = new InvestmentsService()
   const transfersService = new TransfersService()
   const goalsService = new GoalsService()

   const funds = await fundsService.list()
   const popularFunds = await fundsService.listMostPopular()
   const performances = await fundsService.getMostRecentPerformance()

   const investments = await investmentsService.listMostRecent()

   const transfers = await transfersService.list(5)
   const latestTransfer = await transfersService.getMostRecent()

   const goals = await goalsService.list()

   return (
      <div className={styles.page}>
         <Masthead title="ISA dashboard" />
         <Container>
            {/* === Popular funds section === */}
            <section>
               <PopularFundsList data={popularFunds} loading={false} />
            </section>

            {/* === Main funds area === */}
            <section style={{ marginBottom: 60 }}>
               <Row gutter={50}>
                  <Col xs={24} lg={12}>
                     <Suspense fallback={<Spin fullscreen />}>
                        <FundsSection />
                     </Suspense>
                  </Col>
                  <Col xs={24} lg={12}>
                     <TopPerformingFundsList
                        funds={funds}
                        performances={performances}
                     />
                  </Col>
               </Row>
            </section>

            {/* === Goals overview === */}
            <section style={{ marginBottom: 60 }}>
               <GoalsOverview goals={goals} />
            </section>

            {/* === Lower data section === */}
            <section>
               <Row gutter={50}>
                  <Col xs={24} md={12} lg={8}>
                     <LatestInvestmentsList investments={investments} funds={funds} />
                  </Col>
                  <Col xs={24} md={12} lg={8}>
                     <TransfersList transfers={transfers} />
                  </Col>
                  <Col xs={24} md={24} lg={8}>
                     <Flex justify="center">
                        <LatestTransfer transfer={latestTransfer} />
                     </Flex>
                  </Col>
               </Row>
            </section>
         </Container>
      </div>
   )
}
