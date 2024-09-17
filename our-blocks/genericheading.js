import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { RichText, BlockControls } from "@wordpress/block-editor";

wp.blocks.registerBlockType("ourblocktheme/genericheading", {
  title: "Generic Heading",
  attributes: {
    text: { type: "string" },
    size: { type: "string", default: "large" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent({ attributes, setAttributes }) {
  function handleTextChange(value) {
    setAttributes({ text: value });
  }
  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            isPressed={attributes.size === "large"}
            onClick={() => setAttributes({ size: "large" })}
          >
            Large
          </ToolbarButton>
          <ToolbarButton
            isPressed={attributes.size === "medium"}
            onClick={() => setAttributes({ size: "medium" })}
          >
            Medium
          </ToolbarButton>
          <ToolbarButton
            isPressed={attributes.size === "small"}
            onClick={() => setAttributes({ size: "small" })}
          >
            Small
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
      <RichText
        allowedFormats={["core/bold", "core/italic"]}
        tagName="h1"
        className={`headline headline--${attributes.size}`}
        value={attributes.text}
        onChange={handleTextChange}
      />
    </>
  );
}

function SaveComponent({ attributes }) {
  return (
    <RichText.Content
      tagName={
        attributes.size === "large"
          ? "h1"
          : attributes.size === "medium"
          ? "h2"
          : "h3"
      }
      className={`headline headline--${attributes.size}`}
      value={attributes.text}
    />
  );
}
