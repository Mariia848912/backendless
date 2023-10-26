import { Link } from "react-router-dom"

export const Navigation = ({ tabs }) => {
    return (<nav style={{display: "flex", gap: "10px"}}>
        {tabs.map((tab) => (
          <Link key={tab.id} to={`/${tab.id}`}>
            {tab.title}
          </Link>
        ))}
      </nav>)
}