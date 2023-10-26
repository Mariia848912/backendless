import { Link } from "react-router-dom"

export const Navigation = ({ tabs }) => {
    return (<nav>
        {tabs.map((tab) => (
          <Link key={tab.id} to={`/${tab.id}`}>
            {tab.title}
          </Link>
        ))}
      </nav>)
}