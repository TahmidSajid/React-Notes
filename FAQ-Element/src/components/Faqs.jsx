import React, { useState } from 'react'
import Faq from './Faq'
import { faqsData } from '../Datas/data'

const Faqs = () => {
    const [faqs,setFaqs] = useState(faqsData);
  return (
    <>
    <h1>FAQ</h1>
    <div className='container'>
        <div className='faqs'>
          {faqs.map((faq)=> <Faq key={faq.id} {...faq}/>)}
        </div>
      </div>
    </>
  )
}

export default Faqs