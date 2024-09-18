import { InnerBlocks } from "@wordpress/block-editor";

wp.blocks.registerBlockType("ourblocktheme/slideshow", {
  title: "Slideshow",
  suports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent() {
  return (
    <>
      <div style={{ backgroundColor: "#333", padding: "35px" }}>
        <p style={{ textAlign: "center", fontSize: "20px", color: "#fff" }}>
          SlideShow
        </p>
        <InnerBlocks allowedBlocks={["ourblocktheme/slide"]} />
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
