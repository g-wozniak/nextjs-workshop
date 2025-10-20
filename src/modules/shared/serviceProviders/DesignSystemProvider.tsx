import {AntdRegistry} from '@ant-design/nextjs-registry'
import {App, ConfigProvider} from 'antd'
import {CSSProperties, PropsWithChildren} from 'react'

const appCss: CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   height: '100%'
}

const DesignSystemProvider = ({children}: PropsWithChildren) => {
   return (
      <AntdRegistry>
         <ConfigProvider>
            <App style={appCss}>{children}</App>
         </ConfigProvider>
      </AntdRegistry>
   )
}

export default DesignSystemProvider
