import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div className="flex flex-col w-screen h-screen justify-around">
            <header className="w-full h-16 flex flex-row items-center justify-center text-2xl font-bold shadote">
                <h1 className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                    Recipes Hub
                </h1>
            </header>
            <Outlet />
        </div>
    )
}
export default Layout;
