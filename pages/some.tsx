import { NextPage } from "next"
import React from "react"

import Share from "../components/Share"

export const config = { amp: 'true' }

const SomePage: NextPage = () => {
  return (
    <>
      <Share url="/some" text="SomePage" />
    </>
  )
}

export default SomePage