"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Card className="max-w-md w-full">
        <CardHeader>
          <h2 className="font-bold text-green-500 text-center text-xl">
            Search Your Product
          </h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Button>Search</Button>
            <Button>hi</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
