import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { Header } from './components/header';
import { SidebarMain } from './components/sidebar-main';

function App() {
  return (
    <div className="relative h-dvh">
      <Header />
      {/* <PipelineToolbar /> */}
      {/* <SidebarMain /> */}
      {/* <PipelineUI /> */}
      <div className='flex flex-row h-[calc(100vh-50px)] gap-0'>
        {/* <PipelineToolbar /> */}
        <SidebarMain />
        <PipelineUI />
      </div>
    </div>
  );
}

export default App;
