import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  Settings,
  Mail,
  FileText,
  Search,
  Plus,
  Send,
} from "lucide-react";

export default function ComplexLayout() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Main Sidebar */}
      <ScrollArea className="w-16 bg-muted flex-shrink-0">
        <div className="flex flex-col items-center py-4 space-y-4">
          <Button variant="ghost" size="icon">
            <Home className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mail className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <FileText className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Plus className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Send className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Home className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mail className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <FileText className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Plus className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Send className="h-6 w-6" />
          </Button>
        </div>
      </ScrollArea>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header Bar */}
        <header className="h-16 bg-background border-b flex items-center px-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </header>

        {/* App Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* App Sidebar */}
          <div className="w-64 bg-muted flex flex-col">
            <div className="p-4">
              <h2 className="text-lg font-semibold">App Sidebar</h2>
            </div>
            <ScrollArea className="flex-1">
              <nav className="space-y-2 p-4">
                <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
                  Dashboard
                </a>
                <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
                  Projects
                </a>
                <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
                  Tasks
                </a>
                <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
                  Calendar
                </a>
                <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
                  Documents
                </a>
                <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
                  Reports
                </a>
                <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
                  Analytics
                </a>
                <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
                  Team
                </a>
                <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
                  Messages
                </a>
                <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
                  Settings
                </a>
                <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
                  Help & Support
                </a>
                <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
                  Integrations
                </a>
              </nav>
            </ScrollArea>
          </div>

          {/* Content Pane */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Content Header */}
            <div className="h-16 bg-background border-b flex items-center justify-between px-4">
              <h2 className="text-lg font-semibold">Content Header</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4 mr-2" /> Search
                </Button>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" /> New
                </Button>
              </div>
            </div>

            {/* Icons Pane */}
            <div className="h-12 bg-muted flex items-center px-4 space-x-2">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            {/* Data Content (Scrollable) */}
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-4">
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 1</h3>
                  <p>
                    This is some sample content for data item 1. It can be quite
                    long and will scroll within the content area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 2</h3>
                  <p>
                    Here&aspo;s another data item with different content. The
                    scrolling is contained within this area.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">Data Item 3</h3>
                  <p>
                    And one more data item to demonstrate the scrolling
                    behavior.
                  </p>
                </div>
                <div className="space-y-2">
                  <Input placeholder="Enter your message..." />
                  <div className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>
                      <Send className="h-4 w-4 mr-2" /> Send
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
