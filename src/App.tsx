import React from "react";
import MusicMemories from "./pages/MusicMemories";
import Entry from "./pages/Entry";

export default function App() {
  const [admitted, setAdmitted] = React.useState(false);

  return admitted ? <MusicMemories /> : <Entry onAdmitted={setAdmitted} />;
}
