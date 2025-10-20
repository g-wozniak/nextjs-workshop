'use client'

import {Fund} from '@/shared/dto/Fund'
import {Progress, Table, Tag, Tooltip, Typography} from 'antd'
import type {ColumnsType} from 'antd/lib/table'
import React, {Fragment} from 'react'

const {Title} = Typography

interface Props {
   data: Fund[]
   loading?: boolean
}

export const FundsTable: React.FC<Props> = ({data, loading}) => {
   const columns: ColumnsType<Fund> = [
      {
         title: 'Name',
         dataIndex: 'name',
         key: 'name',
         render: (text, record) => (
            <Tooltip title={record.description}>
               <span style={{fontWeight: 500}}>{text}</span>
            </Tooltip>
         )
      },
      {
         title: 'Type',
         dataIndex: 'type',
         key: 'type',
         render: (type) => <Tag color="blue">{type}</Tag>
      },
      {
         title: 'Risk',
         dataIndex: 'risk',
         key: 'risk',
         render: (risk) => {
            const color = risk === 'High' ? 'red' : risk === 'Medium' ? 'orange' : 'green'
            return <Tag color={color}>{risk}</Tag>
         }
      },
      {
         title: 'Popularity',
         dataIndex: 'popularity',
         key: 'popularity',
         render: (value) => (
            <Progress
               percent={Number(value.toFixed(1))}
               size="small"
               strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068'
               }}
               showInfo={false}
            />
         ),
         sorter: (a, b) => a.popularity - b.popularity,
         width: 150
      }
   ]

   return (
      <Fragment>
         <Title level={4} style={{marginBottom: 16}}>
            🎵 Top 10 Performing Funds
         </Title>
         <Table<Fund>
            rowKey="id"
            columns={columns}
            dataSource={data}
            loading={loading}
            pagination={{pageSize: 10}}
            bordered
            size="middle"
         />
      </Fragment>
   )
}
