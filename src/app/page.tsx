"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, CheckCircle2, PlayCircle, Code2, Sparkles, MonitorSmartphone, Rocket, UserPlus, Instagram, Facebook } from "lucide-react"

export default function Home() {
  const modules = [
    {
      id: "01",
      title: "認識你的 AI 助手",
      description: "學會設定遊戲規則：告訴 AI「你是誰、你要做什麼」，讓它乖乖聽話，不會亂改你的東西。",
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
    },
    {
      id: "02",
      title: "第一次跟 AI 合作",
      description: "打開一個空資料夾，跟 AI 說幾句話，看它在 10 秒內幫你生出一個網頁——完全不用自己寫程式碼。",
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
    },
    {
      id: "03",
      title: "幫 AI 裝備升級",
      description: "一鍵安裝『技能包 (Skills)』，讓 AI 從菜鳥變成專業設計師，做出來的網頁瞬間有質感。",
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
    },
    {
      id: "04",
      title: "動手做：你的個人網頁",
      description: "帶著你事先準備的自我介紹，跟 AI 一起合作，親手打造一個屬於自己的漂亮個人首頁。",
      icon: <MonitorSmartphone className="w-6 h-6 text-purple-500" />,
    },
    {
      id: "05",
      title: "上線！讓全世界看到",
      description: "把你的作品發佈到網路上，拿到一個專屬網址，立刻分享給朋友——就這麼簡單。",
      icon: <Rocket className="w-6 h-6 text-rose-500" />,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
      {/* Hero Section with AI Background */}
      <section className="relative px-6 py-32 md:py-48 lg:px-8 overflow-hidden min-h-[80vh] flex items-center justify-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/80 z-10" />
          <img
            src="/hero_workspace.png"
            alt="Futuristic Workspace"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Glowing Blobs */}
        <div className="absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-cyan-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="relative z-20 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            2026 全新 Agentic 紀元的開發體驗
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-8 drop-shadow-sm">
            Antigravity IDE 工作坊
            <span className="block text-indigo-400 mt-2">The Future of Web Dev</span>
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-slate-300 mb-12 max-w-2xl mx-auto">
            不需要會寫程式，只要會打字就行。跟著 AI 一起合作，3 小時內從零開始做出你的個人網站，並發佈到全世界都看得到的網址上。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold text-lg w-full sm:w-auto shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              立即報名工作坊 <UserPlus className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-white border-slate-700 hover:bg-slate-800 font-medium text-lg w-full sm:w-auto bg-slate-900/50 backdrop-blur-sm">
              查看課前檢核表
            </Button>
          </div>
        </div>
      </section>

      {/* Pre-work Highlights */}
      <section className="px-6 py-24 bg-slate-900/40 lg:px-8 border-y border-slate-800/50">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-6">
                <MonitorSmartphone className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">安裝 Antigravity</h3>
              <p className="text-slate-400 text-sm">請務必在上課前安裝好最新版環境。</p>
            </div>
            <div className="p-6">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 mb-6">
                <Rocket className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">GitHub & Vercel</h3>
              <p className="text-slate-400 text-sm">註冊好帳號，最後一堂課帶你一鍵起飛。</p>
            </div>
            <div className="p-6">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-6">
                <Code2 className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">專屬你的主題</h3>
              <p className="text-slate-400 text-sm">先準備好網頁文案與風格，上課直接做！</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Tracker with Illustration Layout */}
      <section className="px-6 py-32 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Modules */}
            <div>
              <div className="mb-12">
                <h2 className="text-4xl font-extrabold tracking-tight mb-4">你會學到什麼？</h2>
                <p className="text-lg text-slate-400">5 個步驟，3 小時，帶走一個完整的個人網站。</p>
              </div>
              <div className="space-y-6">
                {modules.map((mod) => (
                  <div key={mod.id} className="group relative flex gap-6 p-6 rounded-2xl border border-slate-800/60 bg-slate-900/40 hover:bg-slate-800 transition-all duration-300 hover:border-indigo-500/30">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      {mod.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-3">
                        <span className="text-indigo-400 text-sm font-mono bg-indigo-500/10 px-2 py-0.5 rounded">MOD {mod.id}</span>
                        {mod.title}
                      </h3>
                      <p className="mt-3 text-slate-400 leading-relaxed">{mod.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Banana Pro 2 Image */}
            <div className="relative hidden lg:block rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-500/10">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
              <img
                src="/module_illustration.png"
                alt="AI Building Blocks"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-slate-950/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800">
                  <p className="text-sm font-medium text-cyan-400 mb-2">Powered by Banana Pro 2</p>
                  <h4 className="text-xl font-bold text-white">用魔法打敗魔法</h4>
                  <p className="text-slate-400 mt-2 text-sm">這份網頁與您眼前看到的影像，皆是我與 AI 共同合作的成果。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Instructor */}
      <section className="relative px-6 py-32 lg:px-8 overflow-hidden">
        {/* Subtle radial gradient background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* Left: Visual Column (2 cols) */}
            <div className="lg:col-span-2 flex flex-col items-center gap-10">
              {/* Avatar with elegant double-ring */}
              <div className="relative">
                {/* Outer decorative ring */}
                <div className="absolute -inset-3 rounded-full border border-amber-500/20" />
                <div className="absolute -inset-1.5 rounded-full border border-white/[0.06]" />
                {/* Avatar circle */}
                <div className="relative w-52 h-52 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden shadow-xl">
                  <img src="/josh.jpg" alt="Josh — 講師" className="w-full h-full object-cover" />
                </div>
                {/* Small decorative dot */}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-500/80 border-2 border-slate-950 shadow-lg" />
              </div>

              {/* Workshop Photo Cards */}
              <div className="w-full max-w-xs space-y-6">
                {/* Photo 1 */}
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm shadow-xl">
                  <div className="w-full h-48 relative">
                    <img src="/n8nworkshop1.jpg" alt="n8n 工作坊實況" className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md">
                      <span className="text-[11px] font-semibold text-amber-300/90">n8n 實戰工作坊</span>
                    </div>
                  </div>
                  <div className="p-4 border-t border-white/[0.06]">
                    <p className="text-xs text-slate-400 text-center">帶領新手從 0 到 1，打造自動化流程</p>
                  </div>
                </div>
                {/* Photo 2 */}
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm shadow-xl">
                  <div className="w-full h-48 relative">
                    <img src="/n8nworkshop2.jpg" alt="n8n 工作坊學員互動" className="w-full h-full object-cover" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-md">
                      <span className="text-[11px] font-medium text-slate-300">學員好評不斷 ✨</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text Column (3 cols) */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center self-start rounded-full px-4 py-1.5 text-sm font-medium text-amber-300/90 bg-amber-500/[0.07] border border-amber-500/15 mb-6">
                <Sparkles className="w-3.5 h-3.5 mr-2 text-amber-400/70" />
                AI 自動化顧問與講師
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                <span className="text-white">認識你的 AI 領航員</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400">—— Josh</span>
              </h2>

              {/* Subtitle with decorative line */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-8 bg-gradient-to-r from-amber-500/50 to-transparent" />
                <h3 className="text-base font-medium text-slate-400">
                  人生鍛造所主理人 ｜ 超過 15 年線上教學經驗
                </h3>
              </div>

              {/* Paragraphs */}
              <div className="space-y-5 text-slate-300/90 leading-relaxed text-[15px]">
                <p>
                  擁有超過 <span className="text-white font-semibold">15 年的教學經驗</span>，我最擅長的事情，就是將複雜的技術與邏輯，拆解成<span className="text-amber-300 font-medium">麻瓜也能輕鬆理解的白話文</span>。你不必是工程師，也能學會指揮 AI。
                </p>
                <p>
                  我的核心理念是「<span className="text-amber-300 font-medium">用 AI 與自動化為自己賦能</span>」。近期已成功舉辦多場 n8n 自動化工作坊，帶領新手打造專屬數位工具。我致力於透過閱讀、AI 與健身，實踐並推廣持續進化的個人成長系統。
                </p>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-white/[0.06] via-white/[0.1] to-white/[0.06] my-10" />

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/josh_lifeforge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
                >
                  <Instagram className="w-4 h-4 text-slate-500 group-hover:text-pink-400 transition-colors duration-300" />
                  <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors duration-300">@Josh_LifeForge</span>
                </a>
                <a
                  href="https://www.facebook.com/raja.dream"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
                >
                  <Facebook className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors duration-300" />
                  <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors duration-300">Facebook</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Registration Form / Call to Action */}
      <section className="px-6 py-24 bg-gradient-to-b from-slate-950 to-slate-900 lg:px-8 border-t border-slate-800/50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white mb-6">準備好加入 Agentic Era 了嗎？</h2>
          <p className="text-lg text-slate-400 mb-10">
            名額有限。留下您的 Email，獲取上課連結與課前秘密武器大補帖。
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="進入未來的信箱..."
              className="flex-1 h-12 rounded-lg bg-slate-950 border border-slate-800 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              required
            />
            <Button type="submit" className="h-12 px-8 bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold whitespace-nowrap">
              立即卡位 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
          <p className="mt-6 text-xs text-slate-500">
            報名即代表您同意本網站透過 AI 持續產出酷炫內容震撼您。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-12 text-center bg-slate-950">
        <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
          Made with <Sparkles className="w-4 h-4 text-amber-500" /> by Antigravity IDE & Next.js
        </p>
      </footer>
    </div>
  )
}
