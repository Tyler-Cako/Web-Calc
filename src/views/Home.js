import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Home() {
    return(
        <div>
            <div>Home</div>
            <FontAwesomeIcon icon="fa-solid fa-caret-down" />
        </div>
    )
}

export default Home;