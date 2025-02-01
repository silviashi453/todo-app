import { TodoWrapper } from "./components/TodoWrapper";

function App() {
  return (
    <main
      className="min-h-screen bg-background dark:bg-background-dark bg-[url(./assets/bg-mobile-light.jpg)] 
      dark:bg-[url(./assets/bg-mobile-dark.jpg)] lg:bg-[url(./assets/bg-desktop-light.jpg)] 
      dark:lg:bg-[url(./assets/bg-desktop-dark.jpg)] bg-no-repeat bg-[length:100%_200px] 
      lg:bg-[length:100%_300px] flex flex-col items-center pb-18 md:pb-14"
    >
      <TodoWrapper />
    </main>
  );
}

export default App;
