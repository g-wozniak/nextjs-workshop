'use client'

import {Goal} from '@/shared/dto/Goal'
import {AimOutlined, CheckCircleOutlined, TrophyOutlined} from '@ant-design/icons'
import {Card, Col, Divider, Progress, Row, Space, Statistic, Tag, Typography} from 'antd'
import dayjs from 'dayjs'
import React from 'react'

const {Title, Text, Paragraph} = Typography

interface Props {
   goals: Goal[]
   loading?: boolean
}

export const GoalsOverview: React.FC<Props> = ({goals, loading}) => {
   const achievedGoals = goals.filter((g) => g.achieved).length
   const totalGoals = goals.length
   const overallPercent =
      goals.reduce((sum, g) => sum + Math.min((g.progress / g.target) * 100, 100), 0) /
      (totalGoals || 1)

   return (
      <Card
         loading={loading}
         style={{
            width: '100%',
            borderRadius: 12,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            background: '#fafafa'
         }}
      >
         <Title level={4} style={{marginBottom: 16}}>
            🎯 Company Goals Overview
         </Title>

         <Row gutter={[24, 24]}>
            <Col xs={24} sm={8}>
               <Statistic title="Total Goals" value={totalGoals} prefix={<AimOutlined />} />
            </Col>
            <Col xs={24} sm={8}>
               <Statistic
                  title="Goals Achieved"
                  value={achievedGoals}
                  prefix={<CheckCircleOutlined />}
                  valueStyle={{color: '#3f8600'}}
               />
            </Col>
            <Col xs={24} sm={8}>
               <Statistic
                  title="Average Progress"
                  value={overallPercent}
                  suffix="%"
                  precision={1}
                  prefix={<TrophyOutlined />}
                  valueStyle={{color: '#1890ff'}}
               />
            </Col>
         </Row>

         <Divider />

         <Row gutter={[16, 16]}>
            {goals.map((goal) => {
               const percent = Math.min((goal.progress / goal.target) * 100, 100)

               return (
                  <Col key={goal.id} xs={24} sm={12} md={8} lg={6}>
                     <Card size="small" style={{borderRadius: 10, height: '100%'}}>
                        <Space direction="vertical" style={{width: '100%'}}>
                           <Title level={5} style={{marginBottom: 0}}>
                              {goal.name}
                           </Title>
                           <Paragraph type="secondary" ellipsis={{rows: 2}} style={{fontSize: 13}}>
                              {goal.description}
                           </Paragraph>

                           <Progress
                              percent={percent}
                              status={goal.achieved ? 'success' : 'active'}
                              strokeColor={goal.achieved ? '#52c41a' : '#1890ff'}
                              format={() => `${percent.toFixed(0)}%`}
                           />

                           <div style={{display: 'flex', justifyContent: 'space-between'}}>
                              <Tag color={goal.achieved ? 'green' : 'blue'}>
                                 {goal.achieved
                                    ? `Achieved ${dayjs(goal.achievedAt).format('DD MMM')}`
                                    : `${percent.toFixed(0)}% Complete`}
                              </Tag>
                              <Text strong>£{goal.target.toLocaleString()}</Text>
                           </div>
                        </Space>
                     </Card>
                  </Col>
               )
            })}
         </Row>
      </Card>
   )
}
