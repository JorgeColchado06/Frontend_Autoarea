import React from 'react'
import  Header from '../components/Header'
import  Footer  from '../components/Footer'
import { History } from '../components/History'
export function Purchases() {
  return (
    <>
      <Header />
      <section className="py-20">
        <div className="container mx-auto">
          <div className="my-20">
          <History />
          </div>
          </div>
            </section>
      
      <Footer />
    
    </>
  )
}

