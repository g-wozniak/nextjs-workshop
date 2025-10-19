import {Col, Row} from 'antd/lib/grid'
import styles from './page.module.scss'
import {Masthead} from '@/shared/components/Masthead'
import {Container} from '@/shared/components/Container'


export default async function InvestPage() {

   return (
      <div className={styles.page}>
         <Masthead title="ISA dashboard" />
         <Container>
            <Row>
               <Col xs={24}>

               </Col>
               <Col xs={24}>

               </Col>
            </Row>
            <Row>
               <Col xs={24}>

               </Col>
               <Col xs={24}>

               </Col>
            </Row>
         </Container>
      </div>
   )
}
