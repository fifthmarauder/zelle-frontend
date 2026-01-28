import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <>
      <main
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </main>
    </>
  );
}
