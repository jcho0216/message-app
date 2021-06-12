import SideBar from "./SideBar";
function Dashboard({id}) {
    return (
        <div className="d-flex" style={{height: '100vh'}}>
        <SideBar id={id} />
        </div>
    )
}

export default Dashboard