'use client'

import {Fund} from '@/shared/dto/Fund'
import {FireOutlined} from '@ant-design/icons'
import {Card, Col, Progress, Row, Tag, Typography} from 'antd'
import React, {Fragment} from 'react'

const {Title, Paragraph} = Typography

interface Props {
   data: Fund[]
   loading: boolean
}

export const PopularFundsList: React.FC<Props> = ({data, loading}) => {
   return (
      <div style={{padding: '40px 0'}}>
         <Title level={3} style={{marginBottom: 16}}>
            Quick access
         </Title>

         <Row gutter={[30, 30]} style={{display: 'flex'}}>
         {data.map((f) => (
            <Col key={f.id} xs={24} sm={12} md={8} lg={8} xl={6} style={{display: 'flex'}}>
               <Card hoverable loading={loading} style={{borderRadius: 12}}>
                  <Title level={5} style={{marginBottom: 6}}>
                     <FireOutlined style={{color: '#ff4d4f', marginRight: 6}} />
                     {f.name}
                  </Title>
                  <Paragraph type="secondary" ellipsis={{rows: 2}}>
                     {f.description}
                  </Paragraph>

                  <div style={{display: 'flex', gap: 8, margin: '8px 0 12px'}}>
                     <Tag color="blue">{f.type.slice(0, 20)}</Tag>
                     <Tag
                        color={f.risk === 'HIGH' ? 'red' : f.risk === 'MEDIUM' ? 'orange' : 'green'}
                     >
                        {f.risk} Risk
                     </Tag>
                  </div>

                  <Progress
                     percent={Number(f.popularity.toFixed(1))}
                     size="small"
                     showInfo
                     format={(p) => `${p?.toFixed?.(1) ?? f.popularity.toFixed(1)}%`}
                  />
               </Card>
            </Col>
         ))}
      </Row>
      </div>
   )
}
