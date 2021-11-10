import Nav from "./Nav";

const Subpage = ({ subData }) => {
  return (
    <div className={"SubpageContainer"}>
      {subData.map((mapdata) => (
        <div key={mapdata.id} className={"SubdataDiv " + mapdata.class}>
          <Nav />
          <img src={mapdata.img} />
          <div className="h1Container">
            <h1 className={mapdata.h1Class}> {mapdata.h1} </h1>
            <h1 className={mapdata.h1SecClass}> {mapdata.h1SecPart} </h1>
          </div>
          <div className="pTagContainer">
            <p>{mapdata.pOne}</p>
            <p>{mapdata.pTwo}</p>
            <p>{mapdata.pThree}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subpage;
