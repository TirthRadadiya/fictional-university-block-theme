import {
  ToolbarGroup,
  ToolbarButton,
  Popover,
  Button,
  PanelBody,
  PanelRow,
  ColorPalette,
} from "@wordpress/components";
import {
  RichText,
  BlockControls,
  InspectorControls,
  getColorObjectByColorValue,
  __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import { link } from "@wordpress/icons";
import { useState } from "@wordpress/element";

wp.blocks.registerBlockType("ourblocktheme/genericbutton", {
  title: "Generic Button",
  attributes: {
    text: { type: "string" },
    size: { type: "string", default: "large" },
    linkObject: { type: "object" },
    colorName: { type: "string", default: "blue" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent({ attributes, setAttributes }) {
  const [isVisible, setIsVisible] = useState(false);
  // const [currentColor, setCurrentColor] = useState("");

  function handleTextChange(value) {
    setAttributes({ text: value });
  }

  function buttonHandler() {
    setIsVisible(!isVisible);
  }

  function handleLinkChange(newLink) {
    setAttributes({ linkObject: newLink });
  }

  const ourColors = [
    { name: "blue", color: "#0d3b66" },
    { name: "orange", color: "#ee964b" },
    { name: "dark-orange", color: "#f95738" },
  ];

  // const temp = {};
  // ourColors.forEach((color) => {
  //   temp[color.color] = color.name;
  // });

  // setCurrentColor()

  const currentColor = ourColors.filter((color) => {
    return color.name === attributes.colorName;
  })[0].color;

  function handleColorChange(colorCode) {
    const { name } = getColorObjectByColorValue(ourColors, colorCode);
    setAttributes({ colorName: name });
  }

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton onClick={buttonHandler} icon={link} />
        </ToolbarGroup>
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
      <InspectorControls>
        <PanelBody title="Color" initialOpen={true}>
          <PanelRow>
            <ColorPalette
              colors={ourColors}
              disableCustomColors={true}
              clearable={false}
              value={currentColor}
              onChange={handleColorChange}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <RichText
        allowedFormats={[]}
        tagName="a"
        className={`btn btn--${attributes.size} btn--${attributes.colorName}`}
        value={attributes.text}
        onChange={handleTextChange}
      />
      {isVisible && (
        <Popover
          position="middle center"
          onFocusOutside={() => setIsVisible(false)}
        >
          <LinkControl
            settings={[]}
            value={attributes.linkObject}
            onChange={handleLinkChange}
          />
          <Button
            variant="primary"
            onClick={() => setIsVisible(false)}
            style={{ display: "block", width: "100%" }}
          >
            Confirm Link
          </Button>
        </Popover>
      )}
    </>
  );
}

function SaveComponent({ attributes }) {
  return (
    <a
      href={attributes.linkObject?.url}
      className={`btn btn--${attributes.size} btn--${attributes.colorName}`}
    >
      {attributes.text}
    </a>
  );
}
