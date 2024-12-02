"use client"

import { useParams } from 'next/navigation'
import React from 'react'

export default function PageArticle() {

    const params = useParams();

  return (
    <div>article {params.slug}</div>
  )
}
