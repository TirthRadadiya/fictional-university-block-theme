import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

wp.blocks.registerBlockType("ourblocktheme/slide", {
  title: "Slide",
  suports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    imgID: { type: "number" },
    imgURL: { type: "string", default: banner.fallbackImg },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent({ attributes, setAttributes }) {
  useEffect(() => {
    if (attributes.imgID) {
      const fetchImage = async () => {
        const response = await apiFetch({
          path: `/wp/v2/media/${attributes.imgID}`,
          method: "GET",
        });

        setAttributes({
          imgURL: response.media_details.sizes.pageBanner.source_url,
        });
      };

      fetchImage();
    }
  }, [attributes.imgID]);

  function onFileUpload(imgObj) {
    setAttributes({ imgID: imgObj.id });
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Background Image" initialOpen={true}>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileUpload}
                value={attributes.imgID}
                render={({ open }) => (
                  <Button onClick={open}>Choose Image</Button>
                )}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div
        class="hero-slider__slide"
        style={{
          backgroundImage: `url(${attributes.imgURL})`,
        }}
      >
        <div class="hero-slider__interior container">
          <div class="hero-slider__overlay t-center">
            <InnerBlocks
              allowedBlocks={[
                "ourblocktheme/genericheading",
                "ourblocktheme/genericbutton",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
