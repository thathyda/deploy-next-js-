import React from 'react'
import TeamComponent from './TeamComponent'
import { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: "team",
  description: "This is page team shop",
  keywords: ['shop', 'ecommerce', 'sell']

};
const page = () => {
  return (
    <div>
    <TeamComponent/>
    </div>
  )
}



export default page
