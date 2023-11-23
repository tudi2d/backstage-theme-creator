import { Sidebar, SidebarItem, SidebarPage } from "@backstage/core-components"
import ExtensionIcon from "@material-ui/icons/Extension"
import HomeIcon from "@material-ui/icons/Home"

export const Root = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <SidebarPage>
      <Sidebar>
        <SidebarItem icon={HomeIcon as any} to="/home" text="Home" />
        <SidebarItem icon={ExtensionIcon as any} to="/api-docs" text="APIs" />
        <SidebarItem icon={ExtensionIcon as any} to="/catalog" text="Catalog" />
        <SidebarItem
          icon={ExtensionIcon as any}
          to="/tech-radar"
          text="TechRadar"
        />
      </Sidebar>
      {children}
    </SidebarPage>
  )
}
