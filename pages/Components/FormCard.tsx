import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {

} from "@/components/ui/select"

export function FormCard() {
  return (
    <Card className="w-[450px] bg-background text-foreground">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="Enter your Email address" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">PASSWORD</Label>
              <Input id="name" placeholder="Enter your Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">

        <Button>Login</Button>
      </CardFooter>
    </Card>


  )
}
