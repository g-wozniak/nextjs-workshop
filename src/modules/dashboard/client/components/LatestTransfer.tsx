'use client'

import {Transfer} from '@/shared/dto/Transfer'
import {ArrowDownOutlined, ArrowUpOutlined, BankOutlined} from '@ant-design/icons'
import {Card, Space, Statistic, Tag, Typography} from 'antd'
import dayjs from 'dayjs'
import React from 'react'

const {Text, Title} = Typography

interface Props {
   transfer: Transfer | null
   loading?: boolean
}

export const LatestTransfer: React.FC<Props> = ({transfer, loading}) => {
   if (!transfer) return null

   const outgoing = transfer.outgoing

   return (
      <Card
         loading={loading}
         bordered
         style={{
            borderRadius: 12,
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            maxWidth: 500,
            margin: '0 auto'
         }}
      >
         <Space direction="vertical" style={{width: '100%'}}>
            <Title level={5} style={{marginBottom: 4}}>
               <BankOutlined style={{marginRight: 8}} />
               Most Recent Transfer
            </Title>

            <Space size="small">
               <Tag color={outgoing ? 'red' : 'green'}>{outgoing ? 'OUTGOING' : 'INCOMING'}</Tag>
               <Text type="secondary">{dayjs(transfer.eventAt).format('DD MMM YYYY, HH:mm')}</Text>
            </Space>

            <Statistic
               prefix={outgoing ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
               value={transfer.amount}
               precision={2}
               suffix="£"
               valueStyle={{
                  color: outgoing ? '#cf1322' : '#3f8600',
                  fontSize: 24,
                  fontWeight: 600
               }}
            />

            <Space direction="vertical" size={0}>
               <Text>
                  From: <strong>{transfer.transferFrom}</strong>
               </Text>
               <Text>
                  To: <strong>{transfer.transferTo}</strong>
               </Text>
               <Text type="secondary">Employees: {transfer.employees}</Text>
            </Space>
         </Space>
      </Card>
   )
}
