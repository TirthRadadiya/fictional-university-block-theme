wp.blocks.registerBlockType("ourblocktheme/header", {
  title: "Ficational university Header",
  edit: function () {
    return wp.element.createElement(
      "div",
      { className: "our-placeholder-block" },
      "Add Header Navigation"
    );
  },
  save: function () {
    return null;
  },
});
