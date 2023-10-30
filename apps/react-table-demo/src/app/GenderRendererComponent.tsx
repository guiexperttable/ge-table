function Renderer(props: any) {

  return (
    <div className="ge-table-label-div">
      <div className="ge-table-label">
        _<b>{props?.cellValue}</b>
      </div>
    </div>
  );
}

export default Renderer;


