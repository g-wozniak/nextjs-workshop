'use client'

import {Fund} from '@/shared/dto/Fund'
import {FundPerformance} from '@/shared/dto/FundPerformance'
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons'
import {List, Progress, Space, Typography} from 'antd'
import React from 'react'

const {Text, Title} = Typography

interface Props {
   performances: FundPerformance[]
   funds: Fund[]
   loading?: boolean
}

export const TopPerformingFundsList: React.FC<Props> = ({performances, funds, loading}) => {
   const merged = performances.map((perf) => ({
      ...perf,
      fundName: funds.find((f) => f.id === perf.fundId)?.name ?? 'Unknown fund'
   }))

   return (
      <div style={{padding: '16px 0'}}>
         <Title level={4} style={{marginBottom: 16}}>
            🎵 Top 10 Performing Funds
         </Title>

         <List
            loading={loading}
            itemLayout="horizontal"
            dataSource={merged.slice(0, 10)}
            renderItem={(item, index) => {
               const positive = item.roi >= 0
               return (
                  <List.Item
                     style={{
                        borderBottom: '1px solid #f0f0f0',
                        padding: '12px 0'
                     }}
                  >
                     <List.Item.Meta
                        title={
                           <Space align="center">
                              <Text strong style={{width: 24, display: 'inline-block'}}>
                                 {index + 1}.
                              </Text>
                              <Text>{item.fundName}</Text>
                           </Space>
                        }
                        description={
                           <Space size="large" style={{marginTop: 4}}>
                              <Text type="secondary">
                                 Investors: <strong>{item.investors}</strong>
                              </Text>
                              <Text type="secondary">
                                 Withdrawals: <strong>{item.withdrawals}</strong>
                              </Text>
                           </Space>
                        }
                     />

                     <div style={{textAlign: 'right'}}>
                        <Text strong style={{color: positive ? '#3f8600' : '#cf1322'}}>
                           {positive ? <ArrowUpOutlined /> : <ArrowDownOutlined />}{' '}
                           {item.roi.toFixed(2)}%
                        </Text>
                        <Progress
                           percent={Math.min(Math.abs(item.roi), 100)}
                           showInfo={false}
                           size="small"
                           strokeColor={positive ? '#52c41a' : '#ff4d4f'}
                           style={{width: 120, marginTop: 4}}
                        />
                     </div>
                  </List.Item>
               )
            }}
         />
      </div>
   )
}
