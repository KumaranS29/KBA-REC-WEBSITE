"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Linkedin,
  UserCheck,
  Settings,
  Code,
  FileText,
  DollarSign,
  Heart,
  Handshake,
  Palette,
  Calendar,
  Megaphone,
  Laptop,
  Link,
  Search,
  Camera,
} from "lucide-react"

interface TeamMember {
  name: string
  role: string
  linkedin?: string
  photo?: string
}

interface Team {
  name: string
  members: TeamMember[]
}

const getTeamIcon = (teamName: string) => {
  const iconMap: { [key: string]: any } = {
    Ambassador: UserCheck,
    Operations: Settings,
    "Technology Executives": Code,
    Secretary: FileText,
    Treasurer: DollarSign,
    Empowerment: Heart,
    "Community Partners": Handshake,
    Design: Palette,
    Events: Calendar,
    "PR & Media": Megaphone,
    Technology: Laptop,
    Blockchain: Link,
    Research: Search,
    Media: Camera,
  }
  return iconMap[teamName] || Users
}

export function CoreTeam() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)

  const teamColors = [
    "bg-red-100 border-red-200 hover:border-red-400",
    "bg-blue-100 border-blue-200 hover:border-blue-400",
    "bg-green-100 border-green-200 hover:border-green-400",
    "bg-yellow-100 border-yellow-200 hover:border-yellow-400",
    "bg-purple-100 border-purple-200 hover:border-purple-400",
    "bg-pink-100 border-pink-200 hover:border-pink-400",
    "bg-indigo-100 border-indigo-200 hover:border-indigo-400",
    "bg-teal-100 border-teal-200 hover:border-teal-400",
    "bg-orange-100 border-orange-200 hover:border-orange-400",
    "bg-cyan-100 border-cyan-200 hover:border-cyan-400",
    "bg-lime-100 border-lime-200 hover:border-lime-400",
    "bg-emerald-100 border-emerald-200 hover:border-emerald-400",
    "bg-violet-100 border-violet-200 hover:border-violet-400",
    "bg-rose-100 border-rose-200 hover:border-rose-400",
  ]

  const teams: Team[] = [
    {
      name: "Ambassador",
      members: [
        { name: "Raghavan S", role: "Ambassador", linkedin: "#", photo: "/professional-headshot.png" },
        { name: "Laksheta SV", role: "Ambassador", linkedin: "#", photo: "/professional-headshot.png" },
      ],
    },
    {
      name: "Operations",
      members: [
        { name: "Varsha Thomas", role: "Operation Executive", linkedin: "#", photo: "/professional-headshot.png" },
      ],
    },
    {
      name: "Technology Executives",
      members: [{ name: "Swetha J", role: "Technology Executive", linkedin: "#", photo: "/placeholder.svg?key=3j4k5" }],
    },
    {
      name: "Secretary",
      members: [{ name: "Mymoon Beevi B", role: "Secretary", linkedin: "#", photo: "/placeholder.svg?key=6l7m8" }],
    },
    {
      name: "Treasurer",
      members: [{ name: "Tanisha C A", role: "Treasurer", linkedin: "#", photo: "/placeholder.svg?key=9n0o1" }],
    },
    {
      name: "Empowerment",
      members: [
        { name: "Srivarshni S", role: "Empowerment Lead", linkedin: "#", photo: "/placeholder.svg?key=2p3q4" },
        { name: "Girija", role: "Empowerment Team", linkedin: "#", photo: "/placeholder.svg?key=5r6s7" },
        { name: "Tejaswin", role: "Empowerment Team", linkedin: "#", photo: "/placeholder.svg?key=8t9u0" },
        {
          name: "SUDHARSHAN KRISHNAA L K",
          role: "Empowerment Team",
          linkedin: "#",
          photo: "/placeholder.svg?key=1v2w3",
        },
        { name: "Kamalesh S P", role: "Empowerment Team", linkedin: "#", photo: "/placeholder.svg?key=4x5y6" },
      ],
    },
    {
      name: "Community Partners",
      members: [
        { name: "Gokulakrishnan K", role: "Community Partner", linkedin: "#", photo: "/placeholder.svg?key=7z8a9" },
      ],
    },
    {
      name: "Design",
      members: [
        { name: "HARIRAJ G", role: "Design Lead", linkedin: "#", photo: "/placeholder.svg?key=0b1c2" },
        { name: "DivyaDharsini K", role: "Design Co-Lead", linkedin: "#", photo: "/placeholder.svg?key=3d4e5" },
        { name: "Veronica Regina Paul", role: "Design Team", linkedin: "#", photo: "/placeholder.svg?key=6f7g8" },
        { name: "Velan", role: "Design Team", linkedin: "#", photo: "/placeholder.svg?key=9h0i1" },
        { name: "Sreya G", role: "Design Team", linkedin: "#", photo: "/placeholder.svg?key=2j3k4" },
      ],
    },
    {
      name: "Events",
      members: [
        { name: "Sree Varssini K S", role: "Event Lead", linkedin: "#", photo: "/placeholder.svg?key=5l6m7" },
        { name: "Sharvesh R", role: "Event Associate", linkedin: "#", photo: "/placeholder.svg?key=8n9o0" },
        { name: "Sreyaskari M", role: "Event Associate", linkedin: "#", photo: "/placeholder.svg?key=1p2q3" },
        { name: "Madhumitha P", role: "Event Associate", linkedin: "#", photo: "/placeholder.svg?key=4r5s6" },
        { name: "Ridhanya J", role: "Event Associate", linkedin: "#", photo: "/placeholder.svg?key=7t8u9" },
      ],
    },
    {
      name: "PR & Media",
      members: [
        { name: "Miruthula KG", role: "PR Lead", linkedin: "#", photo: "/placeholder.svg?key=0b1c2" },
        { name: "Tejushree Sanjeevi Kumar", role: "PR Co-Lead", linkedin: "#", photo: "/placeholder.svg?key=3d4e5" },
        { name: "Rama Thulasi G", role: "PR Associate", linkedin: "#", photo: "/placeholder.svg?key=6f7g8" },
        { name: "SarveshWar P", role: "PR Associate", linkedin: "#", photo: "/placeholder.svg?key=9h0i1" },
        { name: "Madhumitha B M", role: "PR Associate", linkedin: "#", photo: "/placeholder.svg?key=2j3k4" },
      ],
    },
    {
      name: "Technology",
      members: [
        { name: "Manicka Meenakshi S", role: "Tech Lead", linkedin: "#", photo: "/placeholder.svg?key=5l6m7" },
        { name: "Ganeshan M", role: "Tech Co-Lead", linkedin: "#", photo: "/placeholder.svg?key=8n9o0" },
        { name: "S Darshan", role: "Tech Associate", linkedin: "#", photo: "/placeholder.svg?key=1p2q3" },
        { name: "Farheen Tabassum H", role: "Tech Associate", linkedin: "#", photo: "/placeholder.svg?key=4r5s6" },
        { name: "Subramanian S", role: "Tech Associate", linkedin: "#", photo: "/placeholder.svg?key=7t8u9" },
        { name: "Ashna V", role: "Tech Associate", linkedin: "#", photo: "/placeholder.svg?key=0b1c2" },
        { name: "Prathyush R", role: "Full Stack Developer", linkedin: "#", photo: "/placeholder.svg?key=3d4e5" },
        { name: "Uma AL", role: "Full Stack Developer", linkedin: "#", photo: "/placeholder.svg?key=6f7g8" },
        { name: "Kumaran S", role: "Full Stack Developer", linkedin: "#", photo: "/placeholder.svg?key=9h0i1" },
        { name: "DAYANITHI V", role: "Full Stack Developer", linkedin: "#", photo: "/placeholder.svg?key=2j3k4" },
        { name: "Pranav Kumar J", role: "Cloud Engineer", linkedin: "#", photo: "/placeholder.svg?key=5l6m7" },
        { name: "Vishwak S", role: "Cloud Engineer", linkedin: "#", photo: "/placeholder.svg?key=8n9o0" },
        { name: "Kannan R", role: "Embedded Engineer", linkedin: "#", photo: "/placeholder.svg?key=1p2q3" },
      ],
    },
    {
      name: "Blockchain",
      members: [
        {
          name: "Jagadeshwaran Parthiban",
          role: "Blockchain Lead",
          linkedin: "#",
          photo: "/placeholder.svg?key=4r5s6",
        },
        { name: "Srihari S", role: "Blockchain Associate", linkedin: "#", photo: "/placeholder.svg?key=7t8u9" },
        { name: "Keshavallu B", role: "Blockchain Associate", linkedin: "#", photo: "/placeholder.svg?key=0b1c2" },
      ],
    },
    {
      name: "Research",
      members: [
        { name: "Monic Auditya A", role: "Research Lead", linkedin: "#", photo: "/placeholder.svg?key=3d4e5" },
        { name: "Subramanian M", role: "Research Associate", linkedin: "#", photo: "/placeholder.svg?key=6f7g8" },
        { name: "Manisha G", role: "Research Associate", linkedin: "#", photo: "/placeholder.svg?key=9h0i1" },
        { name: "Thirumurugan", role: "Research Associate", linkedin: "#", photo: "/placeholder.svg?key=2j3k4" },
        { name: "Deepa S", role: "Research Associate", linkedin: "#", photo: "/placeholder.svg?key=5l6m7" },
      ],
    },
    {
      name: "Media",
      members: [
        { name: "Varsha Thomas", role: "Media Lead", linkedin: "#", photo: "/placeholder.svg?key=8n9o0" },
        { name: "Renithjoel R R", role: "Media Associate", linkedin: "#", photo: "/placeholder.svg?key=1p2q3" },
        { name: "Shanmuganathan S", role: "Media Associate", linkedin: "#", photo: "/placeholder.svg?key=4r5s6" },
        { name: "Giridharan E", role: "Media Associate", linkedin: "#", photo: "/placeholder.svg?key=7t8u9" },
      ],
    },
  ]

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 text-balance">Core Team</h2>
          <p className="text-xl md:text-2xl text-blue-700 text-pretty max-w-4xl mx-auto">
            Click on any team category to explore our dedicated members and their roles
          </p>
        </div>

        <div className="space-y-8">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
            {teams.slice(0, 3).map((team, index) => {
              const IconComponent = getTeamIcon(team.name)
              return (
                <Card
                  key={index}
                  className={`cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm ${teamColors[index]} h-full`}
                  onClick={() => setSelectedTeam(team)}
                >
                  <CardContent className="p-10 text-center h-full flex flex-col justify-between min-h-[280px]">
                    <div className="flex flex-col items-center flex-grow justify-center">
                      <div className="w-24 h-24 bg-white/60 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <IconComponent className="h-12 w-12 text-gray-700" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-4 text-xl leading-tight text-balance">{team.name}</h3>
                      <Badge
                        variant="secondary"
                        className="text-base bg-white/80 text-gray-700 hover:bg-white/90 px-4 py-2"
                      >
                        {team.members.length} member{team.members.length !== 1 ? "s" : ""}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Second row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teams.slice(3, 7).map((team, index) => {
              const IconComponent = getTeamIcon(team.name)
              return (
                <Card
                  key={index + 3}
                  className={`cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm ${teamColors[index + 3]} h-full`}
                  onClick={() => setSelectedTeam(team)}
                >
                  <CardContent className="p-10 text-center h-full flex flex-col justify-between min-h-[280px]">
                    <div className="flex flex-col items-center flex-grow justify-center">
                      <div className="w-24 h-24 bg-white/60 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <IconComponent className="h-12 w-12 text-gray-700" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-4 text-xl leading-tight text-balance">{team.name}</h3>
                      <Badge
                        variant="secondary"
                        className="text-base bg-white/80 text-gray-700 hover:bg-white/90 px-4 py-2"
                      >
                        {team.members.length} member{team.members.length !== 1 ? "s" : ""}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Third row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teams.slice(7, 11).map((team, index) => {
              const IconComponent = getTeamIcon(team.name)
              return (
                <Card
                  key={index + 7}
                  className={`cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm ${teamColors[index + 7]} h-full`}
                  onClick={() => setSelectedTeam(team)}
                >
                  <CardContent className="p-10 text-center h-full flex flex-col justify-between min-h-[280px]">
                    <div className="flex flex-col items-center flex-grow justify-center">
                      <div className="w-24 h-24 bg-white/60 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <IconComponent className="h-12 w-12 text-gray-700" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-4 text-xl leading-tight text-balance">{team.name}</h3>
                      <Badge
                        variant="secondary"
                        className="text-base bg-white/80 text-gray-700 hover:bg-white/90 px-4 py-2"
                      >
                        {team.members.length} member{team.members.length !== 1 ? "s" : ""}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Fourth row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
            {teams.slice(11, 14).map((team, index) => {
              const IconComponent = getTeamIcon(team.name)
              return (
                <Card
                  key={index + 11}
                  className={`cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm ${teamColors[index + 11]} h-full`}
                  onClick={() => setSelectedTeam(team)}
                >
                  <CardContent className="p-10 text-center h-full flex flex-col justify-between min-h-[280px]">
                    <div className="flex flex-col items-center flex-grow justify-center">
                      <div className="w-24 h-24 bg-white/60 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <IconComponent className="h-12 w-12 text-gray-700" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-4 text-xl leading-tight text-balance">{team.name}</h3>
                      <Badge
                        variant="secondary"
                        className="text-base bg-white/80 text-gray-700 hover:bg-white/90 px-4 py-2"
                      >
                        {team.members.length} member{team.members.length !== 1 ? "s" : ""}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

{/* Team Members Modal */}
<Dialog open={!!selectedTeam} onOpenChange={() => setSelectedTeam(null)}>
  <DialogContent className="max-w-7xl w-[95vw] max-h-[95vh] overflow-y-auto p-8 md:p-12">
    <DialogHeader className="mb-12">
      <DialogTitle className="text-3xl md:text-4xl font-bold text-blue-800 text-center">
        {selectedTeam?.name} Team
      </DialogTitle>
    </DialogHeader>
    <div className="w-full">
      <div
        className="
          grid gap-8 w-full justify-items-center
          grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
        "
      >
        {selectedTeam?.members.map((member, index) => (
          <Card
            key={index}
            className="border-blue-200 hover:shadow-lg transition-all duration-300 w-full max-w-sm"
          >
            <CardContent className="p-8 text-center flex flex-col justify-between h-full">
              <div className="flex flex-col items-center">
                <Avatar className="w-28 h-28 mx-auto mb-6 ring-4 ring-blue-100">
                  <AvatarImage
                    src={member.photo || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-blue-600 text-white text-xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-blue-900 text-lg mb-2 text-balance leading-tight">
                  {member.name}
                </h4>
                <p className="text-blue-600 text-base mb-6">{member.role}</p>
              </div>
              {member.linkedin && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent px-6 py-2 w-full"
                  onClick={() => window.open(member.linkedin, "_blank")}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </DialogContent>
</Dialog>


      </div>
    </section>
  )
}
