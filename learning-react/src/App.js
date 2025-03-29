import { useState } from "react"

function DisplayMyNameAndDate() {
  const name = "Nhat Hoa"
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h2>Date: 2004</h2>
      </div>
    </>
  )
}

function CreateSpaceDOM() {
  return (
    <>
      <div>
        <div>
          <p>
            <p>
            </p>
          </p>
        </div>
      </div>
    </>
  )
}

function DisplayTrueFlag() {
  const isLogIn = true;
  if (isLogIn) {
    return (
      <>
        {`${isLogIn}`}
      </>
    )
  }
  else {
    return null
  }
}

export { DisplayMyNameAndDate, DisplayTrueFlag } 