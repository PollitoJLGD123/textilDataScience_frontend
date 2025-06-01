import * as React from "react"
import Link from "next/link"
import { Bell, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Header() {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">
            <span className="font-bold">DB</span>
          </div>
          <span className="hidden font-bold text-blue-600 md:inline-block">Dashboard</span>
        </Link>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <form className="hidden md:block">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar..."
              className="w-64 rounded-lg bg-background pl-8 md:w-80"
            />
          </div>
        </form>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-blue-600" />
          <span className="sr-only">Notificaciones</span>
        </Button>
        {/* Aquí puedes agregar más elementos como el botón de modo oscuro, perfil, etc. */}
      </div>
    </header>
  )
}
