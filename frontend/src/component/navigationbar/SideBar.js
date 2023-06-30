
export default function SideBar({children}) {

    const menuItem = [
        {
            title : "menu satu"
        }
    ]

    return (
        <aside className="container">
            <ul className="side-menu">
                <li>menu satu</li>
                <li>menu dua</li>
            </ul>
            {
                menuItem.map((item, index) => (
                    <></>
                ))
            }
        </aside>
    )
}
