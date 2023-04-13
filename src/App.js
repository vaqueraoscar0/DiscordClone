import './App.css';
import Sidebar from "./Sidebar";
import Channelbar from './ChannelBar';
import ContentContainer from './ContentContainer';

function App() {
  return (
    <div className={'flex'}>
        <Sidebar/>
        <Channelbar/>
        <ContentContainer />
    </div>
  );
}

export default App;
