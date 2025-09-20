"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Search, Send, Paperclip, MoreVertical, ArrowLeft } from "lucide-react"

const conversations = [
  {
    id: 1,
    name: "Amina Benali",
    lastMessage: "Merci pour l'interview, j'ai hâte de voir le résultat !",
    time: "14:30",
    unread: 0,
    avatar: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    online: true,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    lastMessage: "Pouvons-nous reprogrammer notre rendez-vous ?",
    time: "12:15",
    unread: 2,
    avatar: "/young-man-helping-homeless-community-center.jpg",
    online: false,
  },
  {
    id: 3,
    name: "Léa Dubois",
    lastMessage: "J'ai quelques idées pour le prochain projet...",
    time: "10:45",
    unread: 1,
    avatar: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    online: true,
  },
]

const messages = [
  {
    id: 1,
    sender: "Amina Benali",
    content: "Bonjour ! J'espère que vous allez bien. J'ai quelques questions concernant l'interview de demain.",
    time: "14:25",
    isMe: false,
  },
  {
    id: 2,
    sender: "Moi",
    content: "Bonjour Amina ! Bien sûr, je suis là pour répondre à toutes vos questions. De quoi s'agit-il ?",
    time: "14:27",
    isMe: true,
  },
  {
    id: 3,
    sender: "Amina Benali",
    content: "Merci pour l'interview, j'ai hâte de voir le résultat !",
    time: "14:30",
    isMe: false,
  },
]

export default function MessagesDashboard() {
  const [selectedConversation, setSelectedConversation] = useState(1)
  const [newMessage, setNewMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [showConversation, setShowConversation] = useState(false)

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Logique d'envoi de message
      setNewMessage("")
    }
  }

  const selectConversation = (id: number) => {
    setSelectedConversation(id)
    setShowConversation(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground">Communiquez avec vos talents et collaborateurs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px] md:h-[600px]">
        {/* Liste des conversations */}
        <Card className={`lg:col-span-1 ${showConversation ? "hidden lg:block" : "block"}`}>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Conversations</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => selectConversation(conversation.id)}
                  className={`p-3 md:p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                    selectedConversation === conversation.id ? "bg-muted" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar className="w-8 h-8 md:w-10 md:h-10">
                        <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                        <AvatarFallback>
                          {conversation.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-background" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-foreground truncate text-sm md:text-base">
                          {conversation.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          {conversation.unread > 0 && (
                            <Badge className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground truncate mt-1">
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Zone de conversation */}
        <Card className={`lg:col-span-2 flex flex-col ${showConversation ? "block" : "hidden lg:flex"}`}>
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setShowConversation(false)}>
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Avatar className="w-8 h-8 md:w-10 md:h-10">
                  <AvatarImage src="/young-woman-entrepreneur-presenting-tech-startup.jpg" alt="Amina Benali" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base md:text-lg">Amina Benali</CardTitle>
                  <CardDescription className="text-xs md:text-sm">En ligne</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-3 md:p-4 overflow-y-auto">
            <div className="space-y-3 md:space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] md:max-w-[70%] p-2 md:p-3 rounded-lg ${
                      message.isMe ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-xs md:text-sm">{message.content}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.isMe ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          <div className="p-3 md:p-4 border-t">
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Textarea
                placeholder="Tapez votre message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 min-h-[40px] max-h-[120px] text-sm"
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    sendMessage()
                  }
                }}
              />
              <Button onClick={sendMessage} className="bg-primary hover:bg-primary/90" size="sm">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
