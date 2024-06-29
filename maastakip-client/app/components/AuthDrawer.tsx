import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { IconLogin, IconUserPlus } from "@tabler/icons-react";

export default function AuthDrawer({ defaultTab }) {
  const [openTab, setOpenTab] = useState(defaultTab);
  useEffect(() => {
    setOpenTab(defaultTab);
  }, [defaultTab]);
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        {openTab === "login" ? (
          <Button variant="outline">
            Giriş Yap <IconLogin className="ml-1 text-primary h-4 w-4" />
          </Button>
        ) : (
          <Button>
            Kayıt Ol{" "}
            <IconUserPlus className="ml-1 text-primary-foreground h-4 w-4" />
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent
        data-vaul-no-drag
        className="w-full h-full max-w-md testdrawer left-auto right-0  pt-2 float-end justify-end"
      >
        <Tabs defaultValue={openTab} className="w-full h-full pt-4">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Giriş Yap</TabsTrigger>
            <TabsTrigger value="register">Kayıt Ol</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="space-y-4 h-full flex flex-col justify-center px-4 sm:px-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full">Login</Button>
              <CloseAuthDrawer></CloseAuthDrawer>
            </div>
          </TabsContent>
          <TabsContent value="register">
            <div className="space-y-4 h-full flex flex-col justify-center px-4 sm:px-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full">Register</Button>
              <CloseAuthDrawer></CloseAuthDrawer>
            </div>
          </TabsContent>
        </Tabs>
      </DrawerContent>
    </Drawer>
  );
}

function CloseAuthDrawer(props) {
  return (
    <DrawerClose asChild>
      <Button variant="outline">Vazgeç</Button>
    </DrawerClose>
  );
}
