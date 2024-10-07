import { Toaster } from "react-hot-toast";
import TodoContainer from "./_components/TodoContainer";

export default function Home() {
  return (
    <>
      <TodoContainer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}


//     "postinstall": "prisma generate"
