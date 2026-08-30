"use client";

import * as React from "react";

import {
  LayoutDashboard,
  Users,
  CreditCard,
  MessageSquareWarning,
  HardHat,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const adminNavigation = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    icon: Users,
  },
  {
    title: "Billing",
    icon: CreditCard,
  },
  {
    title: "Complaints",
    icon: MessageSquareWarning,
  },
  {
    title: "Technicians",
    icon: HardHat,
  },
  {
    title: "Notices",
    icon: Bell,
  },
];

export function AdminSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  return (
    <Sidebar {...props}>
      <div className="flex h-16 items-center border-b px-4">
        <div>
          <h1 className="text-lg font-bold">
            Woodpecker Net
          </h1>

          <p className="text-xs text-muted-foreground">
            Administration
          </p>
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Administration
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {adminNavigation.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton tooltip={item.title}>
                      <Icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton type="button">
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}