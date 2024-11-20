import * as React from "react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

interface Props {
    value: string
    timestamp: string
}

function CardPayment( props: Props) {
  const { value, timestamp } = props
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Make your Payment</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Label htmlFor="value">Value:{value}</Label>
        <Label htmlFor="timestamp">Timestamp:{timestamp}</Label>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  )
}

export default CardPayment;
