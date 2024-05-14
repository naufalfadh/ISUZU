import { useState } from "react";
import MasterModelIndex from "./Index";
import MasterModelAdd from "./Add";
import MasterModelDetail from "./Detail";
import MasterModelEdit from "./Edit";

export default function MasterModel() {
  const [pageMode, setPageMode] = useState("index");
  const [dataID, setDataID] = useState();

  function getPageMode() {
    switch (pageMode) {
      case "index":
        return <MasterModelIndex onChangePage={handleSetPageMode} />;
      case "add":
        return <MasterModelAdd onChangePage={handleSetPageMode} />;
      case "detail":
        return (
          <MasterModelDetail
            onChangePage={handleSetPageMode}
            withID={dataID}
          />
        );
      case "edit":
        return (
          <MasterModelEdit onChangePage={handleSetPageMode} withID={dataID} />
        );
    }
  }

  function handleSetPageMode(mode) {
    setPageMode(mode);
  }

  function handleSetPageMode(mode, withID) {
    setDataID(withID);
    setPageMode(mode);
  }

  return <div>{getPageMode()}</div>;
}
