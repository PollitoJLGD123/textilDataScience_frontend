import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3, DollarSign, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-8">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Ingresos Totales
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% desde el mes pasado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Usuarios Activos
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% desde el mes pasado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ventas</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% desde el mes pasado
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Resumen del Dashboard</CardTitle>
          <CardDescription>
            Bienvenido a tu panel de control. Aquí puedes ver un resumen de tu
            actividad.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] rounded-md border border-dashed border-border flex items-center justify-center">
            <p className="text-muted-foreground">
              Aquí puedes agregar tus gráficos o contenido principal
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
