import React from 'react'
import Card from '../Components/Card'

const Cardbox = () => {
    const data = [
        {
            code:"#F9D307",
            title:"Heart Disease Detection"
        },
        {
            code:"#6EE7B7",
            title:"Alzheimer Disease Detection"
        },
        {
            code:"#EE1739",
            title:"Infectious Disease Detection"
        },
        {
            code:"#7148FC",
            title:"Diabetes Detection"
        },
        {
            code:"#FF36AB",
            title:"Liver Diseases Detection"
        },
        {
            code:"#654EB0",
            title:"Parkinson's Disease Detection"
        }
    ]
  return (
    <>
    <div className='w-screen xl:h-[80vh] md:h-auto'>
            <div className='text-center xl:text-[64px] md:text-[64px] text-[40px] font-semibold'>Services Offered</div>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4 pt-10'>
                <Card data={data[0]}/>
                <Card data={data[1]}/>
                <Card data={data[2]}/>
                <Card data={data[3]}/>
                <Card data={data[4]}/>
                <Card data={data[5]}/>
            </div>

    </div>
    </>
  )
}

export default Cardbox