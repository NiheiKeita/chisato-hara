import React from "react"
import Image from "next/image"
import { useCountView } from "./hooks"
import { config } from "~/config"

export const CountView = React.memo(() => {
  const { count, addCount } = useCountView()

  return (
    <div>
      <p data-testid="countText">{count}</p>
      <button data-testid="button" className="bg-red-500 px-2 py-4 hover:bg-red-300" onClick={addCount}>
        カウントアップ==
      </button>
      <Image
        src={`${config.imageUrl}tests.svg`}
        alt="placeholder"
        width={100}
        height={100}
      />
    </div>
  )
})
CountView.displayName = "CountView"
