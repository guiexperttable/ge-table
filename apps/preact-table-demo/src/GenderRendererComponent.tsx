function Renderer(props: any) {

  return (
    <div className="ge-table-label-div">
      <div className="ge-table-label">
        <i>{props?.cellValue}</i>!
      </div>
    </div>
  );
}

export default Renderer;


