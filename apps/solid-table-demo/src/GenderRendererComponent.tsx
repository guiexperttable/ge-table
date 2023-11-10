function Renderer(props: any) {

  return (
    <div class="ge-table-label-div">
      <div class="ge-table-label">
        <b>{props?.cellValue}</b>
      </div>
    </div>
  );
}

export default Renderer;


