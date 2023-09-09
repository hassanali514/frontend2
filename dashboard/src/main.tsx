import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import {store} from "./app/store"
import {ApiProvider } from "@reduxjs/toolkit/query/react"
import {apiSlice} from "../src/features/api/apiSlice"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2123bf",
          }
        }}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
