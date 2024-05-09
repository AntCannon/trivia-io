import "./Sidebar.css";
import Filters from './Filters.jsx';
import Stats from './Stats.jsx';

export default function Sidebar({ userHP, maxUserHP }) {
  
  return (
    <section className="sidebar">
      <Filters />
      <Stats
        userHP={userHP}
        maxUserHP={maxUserHP}
      />
    </section>
  )
}