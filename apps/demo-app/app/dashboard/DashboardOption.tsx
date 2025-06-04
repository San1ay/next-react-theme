import Toggler from '@/components/Toggler'
import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'
import Dashboard from "./page"
import Link from 'next/link';

export default function DashboardOption() {
     const [showDashboard, setShowDashboard] = useState(false);
  return (
        <AnimatePresence key={"dashboard-option"}>
          <motion.div className="flex items-center flex-col justify-center md:flex-row gap-5 mt-5">
            <Toggler text="Show Shadcn Dashboard " value={showDashboard} setValue={setShowDashboard} className="ml-5 w-60 gap-[5px]" />
            <Link href={"/dashboard"} className="">
              <button className="font-semibold rounded-md hover:cursor-pointer bg-primary text-primary-foreground shadow-xs hover:bg-primary/80 h-8 md:items-start px-2">
                Go to Seperate Dashboard Page
              </button>
            </Link>
          </motion.div>
          <AnimatePresence key={"dashboard-component"}>
            {showDashboard && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.95 }}
                transition={{ duration: 0.35, type: "spring" }}
                className="w-full"
              >
                <Dashboard />
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatePresence>
  )
}
