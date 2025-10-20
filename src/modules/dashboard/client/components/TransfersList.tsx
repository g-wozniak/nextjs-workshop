'use client'

import {Transfer} from '@/shared/dto/Transfer'
import {ArrowDownOutlined, ArrowUpOutlined, BankOutlined} from '@ant-design/icons'
import {Avatar, List, Space, Statistic, Tag, Typography} from 'antd'
import dayjs from 'dayjs'
import React from 'react'

const {Text, Title} = Typography

interface Props {
   transfers: Transfer[]
   loading?: boolean
}

export const TransfersList: React.FC<Props> = ({transfers, loading}) => {
   return (
      <div style={{padding: '0 40px'}}>
         <Title level={3} style={{marginBottom: 16}}>
            Latest Transfers
         </Title>

         <List
            loading={loading}
            itemLayout="horizontal"
            dataSource={transfers}
            renderItem={(item) => (
               <List.Item
                  style={{
                     borderBottom: '1px solid #f0f0f0',
                     padding: '12px 0'
                  }}
               >
                  <List.Item.Meta
                     avatar={
                        <Avatar
                           icon={<BankOutlined />}
                           style={{
                              backgroundColor: item.outgoing ? '#ff7875' : '#52c41a'
                           }}
                        />
                     }
                     title={
                        <Space size="small">
                           <Text strong>{item.outgoing ? 'Outgoing' : 'Incoming'} Transfer</Text>
                           <Tag color={item.outgoing ? 'red' : 'green'}>
                              {item.outgoing ? 'OUT' : 'IN'}
                           </Tag>
                        </Space>
                     }
                     description={
                        <Space direction="vertical" size={2}>
                           <Text type="secondary">
                              From: <strong>{item.transferFrom}</strong>
                           </Text>
                           <Text type="secondary">
                              To: <strong>{item.transferTo}</strong>
                           </Text>
                           <Text type="secondary">
                              {dayjs(item.eventAt).format('DD MMM YYYY, HH:mm')}
                           </Text>
                        </Space>
                     }
                  />

                  <div style={{textAlign: 'right', minWidth: 150}}>
                     <Statistic
                        value={item.amount}
                        prefix={item.outgoing ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                        suffix="£"
                        valueStyle={{
                           color: item.outgoing ? '#cf1322' : '#3f8600',
                           fontSize: 16
                        }}
                        precision={2}
                     />
                     <Text type="secondary">{item.employees} employees</Text>
                  </div>
               </List.Item>
            )}
         />
      </div>
   )
}
