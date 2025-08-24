// @ts-nocheck
import React, { useState } from 'react'
import Image from 'next/image'

const studios = {
  "Studio A": ["Project One", "Project Two"],
  "Studio B": ["Project Three"]
}

const TABS = ["Overview", "Website", "Agents"]

const mockProjectData = {
  image: "https://picsum.photos/seed/diff/600/400",
  title: "Gospel Tech",
  description: "A project that brings biblical teachings to modern tools.",
  agents: ["calimedia", "com&", "mons"],
  status: "🟡 In Progress",
  contributors: [
    {
      avatar: "https://i.pravatar.cc/100?u=1",
      date: "2025-08-22",
      action: "Added the project image"
    },
    {
      avatar: "https://i.pravatar.cc/100?u=2",
      date: "2025-08-21",
      action: "Updated the agent configuration"
    },
    {
      avatar: "https://i.pravatar.cc/100?u=3",
      date: "2025-08-20",
      action: "Created the initial project"
    }
  ],
  website: {
    status: "🟢 Live",
    visitors: 4372,
    lastDeployed: "2025-08-21",
    domain: "www.monsmariae.com"
  }
}

const agentOptions = [
  { name: "calimedia", avatar: "https://i.pravatar.cc/100?u=calimedia", tone: "funny" },
  { name: "com&", avatar: "https://i.pravatar.cc/100?u=comand", tone: "techy" },
  { name: "monsignor", avatar: "https://i.pravatar.cc/100?u=mons", tone: "spiritual" },
]


const taskOptions = ["Write summary", "Generate roadmap", "Analyze feedback"]


const agentPrompts: Record<string, string> = {
  funny: "Hey hey! Let's spice this up like it's Friday night stand-up!",
  techy: "Initializing sequence... AI module ready to optimize your workflow.",
  spiritual: "Let us reflect on your journey with grace and insight."
}

const activeAgents = [
  {
    name: "Calimedia",
    task: "Created content calendar",
    lastAction: "Scheduled posts for the next 4 weeks."
  },
  {
    name: "com&",
    task: "Refined tone of voice",
    lastAction: "Adjusted all prompts to match brand tone."
  },
  {
    name: "Mons",
    task: "Spiritual insights research",
    lastAction: "Generated 5 reflection-based quotes for homepage."
  }
]

export const ProjectScreen = () => {
  const [selectedStudio, setSelectedStudio] = useState("Studio A")
  const [selectedProject, setSelectedProject] = useState(studios["Studio A"][0])
  const [selectedTab, setSelectedTab] = useState("Overview")
  const [selectedAgent, setSelectedAgent] = useState(agentOptions[0])
  const [selectedTask, setSelectedTask] = useState(taskOptions[0])

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Overview":
        return (
          <div className="w-full">
            {/* Top Section: Image + Info */}
            <div className="flex flex-col lg:flex-row gap-6 mb-10">
              <div className="w-full lg:w-1/2">
                <Image
                  src={mockProjectData.image}
                  alt="Project Preview"
                  width={600}
                  height={400}
                  className="rounded-md w-full h-auto object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-4 text-white">
                    {mockProjectData.title}
                  </h1>
                  <p className="text-white/80 mb-4">
                    {mockProjectData.description}
                  </p>
                  <p className="text-white/60 text-sm mb-2">Agents:</p>
                  <ul className="flex flex-wrap gap-2">
                    {mockProjectData.agents.map((tech) => (
                      <li
                        key={tech}
                        className="bg-zinc-800 px-3 py-1 rounded-full text-sm text-white border border-white/10"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/60 text-sm mt-4">Status:</p>
                  <p className="text-white font-medium">{mockProjectData.status}</p>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="w-full space-y-4">
              <h2 className="text-xl font-semibold mb-2 text-white">Recent Activity</h2>
              {mockProjectData.contributors.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full bg-zinc-900 border border-white/10 shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-lg transition-all"
                >
                  <Image
                    src={item.avatar}
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="text-white text-sm">
                    <p className="font-medium">{item.action}</p>
                    <p className="text-white/50 text-xs">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case "Website":
        return (
          <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-6 mb-10">
              <div className="w-full lg:w-4/5 aspect-video rounded-md overflow-hidden border border-white/10">
                <iframe
                  src="https://www.monsmariae.com/"
                  className="rounded-md w-full h-full border border-white/10"
                  title="Website Preview"
                />
              </div>
              <div className="w-full lg:w-1/5  flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4">Website Details</h2>
                  <p className="text-white/60 text-sm mb-1">Status:</p>
                  <p className="text-white font-medium mb-3">{mockProjectData.website.status}</p>


                  <p className="text-white/60 text-sm mb-1">Visitors:</p>
                  <p className="text-white font-medium mb-3">👥 {mockProjectData.website.visitors.toLocaleString()}</p>


                  <p className="text-white/60 text-sm mb-1">Last Deployed:</p>
                  <p className="text-white font-medium mb-3">{mockProjectData.website.lastDeployed}</p>


                  <p className="text-white/60 text-sm mb-1">Domain:</p>
                  <p className="text-white font-medium mb-3 underline">{mockProjectData.website.domain}</p>
                </div>
              </div>
            </div>
          </div>
        )
      case "Agents":
        return (
          <div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="col-span-1 lg:col-span-1 flex flex-col gap-2">
                <label className="text-white text-sm">Agent</label>
                <select
                  value={selectedAgent.name}
                  onChange={(e) => {
                    const agent = agentOptions.find((a) => a.name === e.target.value)
                    if (agent) setSelectedAgent(agent)
                  }}
                  className="bg-zinc-900 text-white px-4 py-2 rounded-md border border-white/10"
                >
                  {agentOptions.map((agent) => (
                    <option key={agent.name} value={agent.name} className="text-white">
                      {agent.name}
                    </option>
                  ))}
                </select>
              </div>


              <div className="col-span-1 lg:col-span-1 flex flex-col gap-2">
                <label className="text-white text-sm">Task</label>
                <select
                  value={selectedTask}
                  onChange={(e) => setSelectedTask(e.target.value)}
                  className="bg-zinc-900 text-white px-4 py-2 rounded-md border border-white/10"
                >
                  {taskOptions.map((task) => (
                    <option key={task} value={task} className="text-white">
                      {task}
                    </option>
                  ))}
                </select>
              </div>


              <div className="col-span-1 lg:col-span-3 flex items-start mt-6 bg-zinc-800 rounded-md p-4 border border-white/10 text-white">
                {agentPrompts[selectedAgent.tone]}
              </div>




            </div>
            <div className="w-full flex justify-center items-center my-6">
              <button className="px-6 py-2 rounded-md border border-cyan text-cyan hover:text-white transition-colors duration-200 font-medium shadow">
                Select Agent
              </button>
            </div>
            <div className="text-white/80 text-md mb-4">Active Agents</div>
            <div className="space-y-4">
              {activeAgents.map((agent) => (
                <div key={agent.name}
                  className="grid grid-cols-3 gap-4 items-center bg-zinc-900 p-4 rounded-md border border-white/10"

                >
                  <div className="font-semibold text-left text-white w-36">{agent.name}</div>
                  <div className="text-sm text-left text-white/80">Task: {agent.task}</div>
                  <div className="text-sm text-left text-white/60 italic">Last: {agent.lastAction}</div>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-black min-h-screen w-full text-white px-6 py-8">
      {/* Studio / Project Dropdowns */}
      <div className="flex gap-2 items-center mb-6">
        <select
          value={selectedStudio}
          onChange={(e) => {
            setSelectedStudio(e.target.value)
            setSelectedProject(studios[e.target.value][0])
          }}
          className="bg-zinc-900 text-white text-sm font-medium px-3 py-2 rounded-md border border-white/10 focus:outline-none"
        >
          {Object.keys(studios).map((studio) => (
            <option key={studio} value={studio} className="text-cyan">
              {studio}
            </option>
          ))}
        </select>
        <span className="text-white/50 font-light">/</span>
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          className="bg-zinc-900 text-white text-sm font-medium px-3 py-2 rounded-md border border-white/10 focus:outline-none"
        >
          {studios[selectedStudio].map((project) => (
            <option key={project} value={project} className="text-cyan">
              {project}
            </option>
          ))}
        </select>
      </div>

      {/* Tab Bar */}
      <div className="flex border-b border-white/10 mb-6 gap-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`pb-2 transition-all duration-200 text-sm font-medium ${selectedTab === tab ? 'border-b-2 border-white' : 'text-white/50 hover:text-white'
              }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="transition-all duration-300 ease-in-out animate-fade">
        {renderTabContent()}
      </div>
    </div>
  )
}