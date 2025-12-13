import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import TaskInput from "./components/Tasks/TaskInput.jsx";

export default function App() {
  return (
    <div className="bg-white w-1280px p-2rem align-middle m-9 mt-12 flex flex-wrap h-full">
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full">
        <TaskInput />
      </div>
      <div className="bg-gray-700 rounded-2xl w-full">
        <Footer />
      </div>
    </div>
  );
}
