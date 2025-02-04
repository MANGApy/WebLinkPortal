import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function TutorialSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto px-4 py-12"
    >
      <Tabs defaultValue="domain" className="w-full">
        <TabsList className="w-full justify-center bg-black/50 border border-white/20">
          <TabsTrigger
            value="domain"
            className="text-white data-[state=active]:bg-white/10"
          >
            How to Use INJU.CC
          </TabsTrigger>
          <TabsTrigger
            value="cookies"
            className="text-white data-[state=active]:bg-white/10"
          >
            Understanding Roblox Cookies
          </TabsTrigger>
        </TabsList>

        <TabsContent value="domain">
          <Card className="border-white/20 bg-black/50">
            <CardContent className="pt-6">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <video
                  src="/attached_assets/BF1E439E-953D-44D3-A66B-4DB2A2813425.mov"
                  controls
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-white space-y-4">
                <h3 className="text-xl font-bold">Getting Started with INJU.CC</h3>
                <p>
                  Follow along with this comprehensive guide to understand how to effectively
                  use the INJU.CC domain. The video above demonstrates the key steps and
                  features you need to know.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Setting up your initial configuration</li>
                  <li>Navigating the main interface</li>
                  <li>Troubleshooting common issues</li>
                  <li>Best practices for optimal usage</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cookies">
          <Card className="border-white/20 bg-black/50">
            <CardContent className="pt-6">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <video
                  src="https://streamable.com/qy3kc4"
                  controls
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-white space-y-4">
                <h3 className="text-xl font-bold">Understanding Roblox Cookies</h3>
                <p>
                  This tutorial explains the fundamentals of Roblox cookies and how they
                  work. Watch the video above for a detailed walkthrough of the cookie
                  system.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>What are Roblox cookies?</li>
                  <li>How do they function?</li>
                  <li>Security considerations</li>
                  <li>Common usage scenarios</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}