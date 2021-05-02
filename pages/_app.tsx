// 全体のスタイル設定用
import '../styles/global.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}