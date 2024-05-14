import { useState } from "react";
import MasterKerusakanIndex from "./Index";
import MasterKerusakanAdd from "./Add";
import MasterKerusakanDetail from "./Detail";
import MasterKerusakanEdit from "./Edit";

export default function MasterKerusakan() {
  const [pageMode, setPageMode] = useState("index");
  const [dataID, setDataID] = useState();

  function getPageMode() {
    switch (pageMode) {
      case "index":
        return <MasterKerusakanIndex onChangePage={handleSetPageMode} />;
      case "add":
        return <MasterKerusakanAdd onChangePage={handleSetPageMode} />;
      case "detail":
        return (
          <MasterKerusakanDetail
            onChangePage={handleSetPageMode}
            withID={dataID}
          />
        );
      case "edit":
        return (
          <MasterKerusakanEdit onChangePage={handleSetPageMode} withID={dataID} />
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
