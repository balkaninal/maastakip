import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const notifications = [
  {
    title: "Maaşın döviz karşılığı",
    description: "100USD -> 250USD",
    
  },
  {
    title: "Maaşın altın karşılığı",
    description: "23gr -> 14gr  ",
  },
  {
    title: "Maaşınızla alabildiğiniz ekmek sayısı",
    description: "14 -> 15",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function LandingCards({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
              <CardTitle>Memurlar için</CardTitle>
              <CardDescription>Eski maaş -> Yenimaaş</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-red-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"} className="w-full">
          Daha Fazla Detay
        </Button>
      </CardFooter>
    </Card>
  );
}
