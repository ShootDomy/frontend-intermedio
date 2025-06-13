import { ListadoLibros } from "@/Components/Common/ListadoLibros";
import { MainLayout } from "@/Components/Layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <ListadoLibros />
    </MainLayout>
  );
}
