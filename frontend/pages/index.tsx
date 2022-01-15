import { MetaResponse } from '@ppaas/api'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Axios from "axios";

export default function Home() {
  const [meta, setMeta] = useState<MetaResponse>({
    servers: 0,
    parrots: 0
  })

  useEffect(() => {
    (async () => {
      try {
        const response = await Axios.get<MetaResponse>("https://party.harryet.xyz/api/meta", {
          headers: {
            "user-agent": "ppaab-ui/0.1"
          }
        })

        if (response.status == 200) {
          setMeta(response.data)
        }
      } catch (e) {
        console.error("⚠️ API Appears To Be Offline.")
      }
    })()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Party Parrot as a Bot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Party Parrot as a Bot!
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=931993173008461834&permissions=0&scope=applications.commands%20bot"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Invite &rarr;</h3>
            <p className="mt-4 text-xl">
              Add Party Parrot as a Bot to your Discord server.
            </p>
          </a>

          <a
            href="https://discord.gg/sSDFQAC2kt"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Support &rarr;</h3>
            <p className="mt-4 text-xl">
              Get help and support with Party Parrot as a Bot.
            </p>
          </a>

          <div
            className="p-6 mt-6 text-left border w-96 rounded-xl"
          >
            <h3 className="text-2xl font-bold">Parrots</h3>
            <p className="mt-4 text-xl">
              Generated {meta.parrots} Parrots.
            </p>
          </div>

          <div
            className="p-6 mt-6 text-left border w-96 rounded-xl"
          >
            <h3 className="text-2xl font-bold">Servers</h3>
            <p className="mt-4 text-xl">
              Part of {meta.servers} Servers.
            </p>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
