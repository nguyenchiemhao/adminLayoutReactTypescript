import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import AdminRouter from "./AdminRouter";
import IAppState from "../../redux/base-interface/IAppState";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../redux/ui/ui.actions";

interface IAdminLayoutProps {
  //props receive from redux
  toggleSidebar?: any;
  onSidebarOpen?: any;
}

function AdminLayout({ toggleSidebar, onSidebarOpen }: IAdminLayoutProps) {
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <Header onToggleSidebar={toggleSidebar} />
      <div
        style={{
          position: "relative",
          minHeight: "100%",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <div style={{ height: "64px", width: "100%" }}></div>
        <div style={{ display: "flex", flexDirection: "row", minHeight: "calc(100vh - 64px)" }}>
          <Sidebar onSidebarOpen={onSidebarOpen} />
          <AdminRouter />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: IAppState) => {
  return {
    onSidebarOpen: state.uiReducer.onSidebarOpen,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleSidebar: () => {
      dispatch(toggleSidebar());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout);
