import "./Sidebar.css";
import Filters from './Filters.jsx';
import Stats from './Stats.jsx';

export default function Sidebar() {
  
  return (
    <section className="sidebar">
      <Filters />
      <Stats />
    </section>
  )
}