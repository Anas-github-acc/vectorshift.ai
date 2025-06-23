import { PipelineUI } from './ui';
import { Header } from './components/header';
import { SidebarMain } from './components/sidebar-main';

function App() {
  return (
    <div className="relative h-dvh">
      <Header />
      <div className='flex flex-row h-[calc(100vh-50px)] gap-0'>
        <SidebarMain />
        <PipelineUI />
      </div>
    </div>
  );
}

export default App;
