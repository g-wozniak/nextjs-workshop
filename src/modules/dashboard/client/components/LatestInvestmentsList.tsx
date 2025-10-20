'use client'

import {Fund} from '@/shared/dto/Fund'
import {Investment} from '@/shared/dto/Investment'
import {PoundCircleOutlined} from '@ant-design/icons'
import {Avatar, List, Space, Tag, Typography} from 'antd'
import dayjs from 'dayjs'
import React from 'react'

const {Text} = Typography

interface Props {
   investments: Investment[]
   funds?: Fund[]
   loading?: boolean
}

export const LatestInvestmentsList: React.FC<Props> = ({investments, funds = [], loading}) => {
   const withFundNames = investments.slice(0, 10).map((inv) => ({
      ...inv,
      fundName: funds.find((f) => f.id === inv.fundId)?.name ?? 'Unknown fund'
   }))

   return (
      <div style={{padding: '16px 0'}}>
         <Typography.Title level={4} style={{marginBottom: 16}}>
            💸 Latest Investments
         </Typography.Title>

         <List
            loading={loading}
            itemLayout="horizontal"
            dataSource={withFundNames}
            renderItem={(item) => (
               <List.Item>
                  <List.Item.Meta
                     avatar={
                        <Avatar
                           icon={<PoundCircleOutlined />}
                           style={{backgroundColor: '#52c41a'}}
                        />
                     }
                     title={
                        <Space size="small">
                           <Text strong>{item.username}</Text>
                           <Text type="secondary">invested in</Text>
                           <Tag color="blue">{item.fundName}</Tag>
                        </Space>
                     }
                     description={
                        <Space size="large">
                           <Text>
                              Amount: <strong>£{item.amount.toLocaleString()}</strong>
                           </Text>
                           <Text type="secondary">
                              {dayjs(item.investedAt).format('DD MMM YYYY, HH:mm')}
                           </Text>
                        </Space>
                     }
                  />
               </List.Item>
            )}
         />
      </div>
   )
}
