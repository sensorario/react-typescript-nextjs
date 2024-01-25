'use client'

import UnComponente from './UnComponente'
import create from './actions'

export default function Home() {
  return (
    <div className="container">
      <UnComponente create={create}></UnComponente>
    </div>
  )
}