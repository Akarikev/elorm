import { Loader } from "lucide-react";
import React from "react";

function loading() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Loader className="animate-spin w-7 h-7" />
    </div>
  );
}

export default loading;
